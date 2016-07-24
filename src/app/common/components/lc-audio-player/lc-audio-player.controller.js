'use strict';

export default class LcAudioPlayerController {
  constructor($scope,
              $element,
              $filter,
              $document,
              ngAudio) {
    'ngInject';

    this.$scope    = $scope;
    this.$element  = $element;
    this.$filter   = $filter;
    this.$document = $document;
    this.ngAudio   = ngAudio;

    this.init();
    this.watchInit();
    this.watchScopeEvent();

    $scope.$on('$destroy', () => {
      this.clean();
    });
  }

  init() {
    if (this.audioSrc) {
      this.audio = this.ngAudio.load(this.audioSrc);
      this.audio.repeatCount = 0;
      if (this.autoPlay == true) {
        this.audioPlay();
      }

      if (this.options) {
        this.loadOptions();
      }
    }

    this.slider = {
      value: 10000,
      options: {
          showSelectionBar: true,
          hidePointerLabels: true,
          hideLimitLabels: true
      }
    }
    this.isDragVolumeControlEvent = false;
  }

  watchInit() {
    this.$scope.$watch('lcAudioPlayerVm.audio.remaining', (newValue) => {
      if (newValue > 0) {
        if (!this.trackRunningTime) {
          this.trackRunningTime = this.$filter('secondsToDateTime')(Math.floor(this.audio.remaining));
        }
      }
    });

    if (this.audio) {
      this.$scope.$watch('lcAudioPlayerVm.audio.progress', (newValue, oldValue) => {
        if (newValue != oldValue && !this.isDragVolumeControlEvent) {
          this.slider.value = newValue * 10000;
        }
      });

      this.$scope.$watch('lcAudioPlayerVm.slider.value', (newValue, oldValue) => {
        if (newValue != oldValue && this.isDragVolumeControlEvent
            || this.isVolumeControlEvent) {
          this.audio.progress = Math.floor(this.slider.value) / 10000;

          if (this.isVolumeControlEvent) {
            this.isVolumeControlEvent = false;
            this.audio.progress = Math.floor(this.sliderCallbackValue) / 10000;
          }
        }
      });

      this.$scope.$watch(
        () => {
          return this.$element[0].querySelector('span[role="slider"]');
        }, (newValue) => {
          if (newValue) {
            let id = 'content_audio_' + Math.floor(Math.random() * 1000);
            this.pointer = newValue;
            this.pointer.id = id;
            this.$pointer = this.$element.find('#' + id);

            this.$pointer.on('mousedown', () => {
              this.isDragVolumeControlEvent = true;
            });

            this.$document.on('mouseup', () => {
              this.isDragVolumeControlEvent = false;
            });

            this.$element.find('.rz-bar-wrapper').on('mousedown', () => {
              this.isVolumeControlEvent = true;
              this.sliderCallbackValue = this.slider.value;
            });
          }
        }
      );
    }


    if (this.isEditorMode) {
      this.$scope.$watch('lcAudioPlayerVm.audioSrc', (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.clean();
          this.audioReload();
        }
      }, true);
    }
  }

  watchScopeEvent() {
    if (this.isEditorMode) {
      this.$scope.$on('audio:player:stop', () => {
        if (this.audio) {
          this.audio.stop();
        }
      });

      this.$scope.$on('audio:player:reload', () => {
        this.clean();
        this.audioReload();
      });
    }
  }

  audioPlay() {
    if (this.audio) {
      this.audio.repeatCount++;
      this.audio.play();
    }
  }

  audioReload() {
    this.audio = this.ngAudio.load(this.audioSrc);
    this.audio.repeatCount = 0;
  }

  clean() {
    if (this.audio) {
      this.trackRunningTime = 0;
      this.audio.stop();
      this.audio.unbind();
    }
  }

  getRemainingSeconds() {
    if (this.audio) {
      return this.$filter('secondsToDateTime')(this.audio.remaining);
    }
  }

  checkAudioLoad() {
    return !isNaN(this.getRemainingSeconds());
  }

  checkRemainingTimeViewCondition() {
    return this.audio 
           && this.audio.remaining !== 0
           && this.audio.repeatCount !== 0
           && this.checkAudioLoad();
  }

  loadOptions() {
    this.showTooltip = this.options['showTooltip'];
  }
}
