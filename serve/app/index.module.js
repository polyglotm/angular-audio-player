/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = __webpack_require__(2);

	var _index3 = __webpack_require__(3);

	var _main = __webpack_require__(4);

	var _githubContributor = __webpack_require__(5);

	var _webDevTec = __webpack_require__(6);

	var _navbar = __webpack_require__(7);

	var _malarkey = __webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(16);

	__webpack_require__(23);

	__webpack_require__(25);

	__webpack_require__(28);

	angular.module('lcAudioPlayer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr', 'ngAudio', 'rzModule', 'lc.common', 'lc.components', 'lc.main', 'lc.intro', 'lc.example.example1']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective); /* global malarkey:false, moment:false */

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log

	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });

	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';

	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainController = exports.MainController = function () {
	  MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	  function MainController($timeout, webDevTec, toastr) {
	    'ngInject';

	    _classCallCheck(this, MainController);

	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1469186329929;
	    this.toastr = toastr;

	    this.activate($timeout, webDevTec);
	  }

	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;

	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();

	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);

	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';

	    _classCallCheck(this, GithubContributorService);

	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }

	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;

	      var limit = arguments.length <= 0 || arguments[0] === undefined ? 30 : arguments[0];

	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);

	  return GithubContributorService;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';

	    _classCallCheck(this, WebDevTecService);

	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }

	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);

	  return WebDevTecService;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var NavbarController = function NavbarController(moment) {
	  'ngInject';

	  // "this.creationDate" is available by directive option "bindToController: true"

	  _classCallCheck(this, NavbarController);

	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.MalarkeyDirective = MalarkeyDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MalarkeyDirective(malarkey) {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };

	  return directive;

	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });

	    el.addClass('acme-malarkey');

	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });

	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });

	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}

	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';

	    _classCallCheck(this, MalarkeyController);

	    this.$log = $log;
	    this.contributors = [];

	    this.activate(githubContributor);
	  }

	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;

	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;

	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;

	        return _this2.contributors;
	      });
	    }
	  }]);

	  return MalarkeyController;
	}();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(10);

	exports.default = angular.module('lc.common', ['lc.common.components']);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(11);

	exports.default = angular.module('lc.common.components', ['lc.common.components.LcAudioPlayer']);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lcAudioPlayer = __webpack_require__(12);

	var _lcAudioPlayer2 = _interopRequireDefault(_lcAudioPlayer);

	__webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.common.components.LcAudioPlayer', ['lc.common.components.LcAudioPlayer.filters']).component('lcAudioPlayer', (0, _lcAudioPlayer2.default)());

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = lcAudioPlayerComponent;

	var _lcAudioPlayer = __webpack_require__(13);

	var _lcAudioPlayer2 = _interopRequireDefault(_lcAudioPlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function lcAudioPlayerComponent() {
	  return {
	    templateUrl: 'app/common/components/lc-audio-player/lc-audio-player.html',
	    controller: _lcAudioPlayer2.default,
	    controllerAs: 'lcAudioPlayerVm',
	    bindings: {
	      audioSrc: '=',
	      audioFilename: '=?',
	      autoPlay: '=?',
	      options: '=?',
	      isEditorMode: '=?'
	    }
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LcAudioPlayerController = function () {
	  LcAudioPlayerController.$inject = ["$scope", "$element", "$filter", "$document", "ngAudio"];
	  function LcAudioPlayerController($scope, $element, $filter, $document, ngAudio) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, LcAudioPlayerController);

	    this.$scope = $scope;
	    this.$element = $element;
	    this.$filter = $filter;
	    this.$document = $document;
	    this.ngAudio = ngAudio;

	    this.init();
	    this.watchInit();
	    this.watchScopeEvent();

	    $scope.$on('$destroy', function () {
	      _this.clean();
	    });
	  }

	  _createClass(LcAudioPlayerController, [{
	    key: 'init',
	    value: function init() {
	      this.tooltip = true;

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
	      };
	      this.isDragVolumeControlEvent = false;
	    }
	  }, {
	    key: 'watchInit',
	    value: function watchInit() {
	      var _this2 = this;

	      this.$scope.$watch('lcAudioPlayerVm.audio.remaining', function (newValue) {
	        if (newValue > 0) {
	          if (!_this2.trackRunningTime) {
	            _this2.trackRunningTime = _this2.$filter('secondsToDateTime')(Math.floor(_this2.audio.remaining));
	          }
	        }
	      });

	      if (this.audio) {
	        this.$scope.$watch('lcAudioPlayerVm.audio.progress', function (newValue, oldValue) {
	          if (newValue != oldValue && !_this2.isDragVolumeControlEvent) {
	            _this2.slider.value = newValue * 10000;
	          }
	        });

	        this.$scope.$watch('lcAudioPlayerVm.slider.value', function (newValue, oldValue) {
	          if (newValue != oldValue && _this2.isDragVolumeControlEvent || _this2.isVolumeControlEvent) {
	            _this2.audio.progress = Math.floor(_this2.slider.value) / 10000;

	            if (_this2.isVolumeControlEvent) {
	              _this2.isVolumeControlEvent = false;
	              _this2.audio.progress = Math.floor(_this2.sliderCallbackValue) / 10000;
	            }
	          }
	        });

	        this.$scope.$watch(function () {
	          return _this2.$element[0].querySelector('span[role="slider"]');
	        }, function (newValue) {
	          if (newValue) {
	            var id = 'content_audio_' + Math.floor(Math.random() * 1000);
	            _this2.pointer = newValue;
	            _this2.pointer.id = id;
	            _this2.$pointer = _this2.$element.find('#' + id);

	            _this2.$pointer.on('mousedown', function () {
	              _this2.isDragVolumeControlEvent = true;
	            });

	            _this2.$document.on('mouseup', function () {
	              _this2.isDragVolumeControlEvent = false;
	            });

	            _this2.$element.find('.rz-bar-wrapper').on('mousedown', function () {
	              _this2.isVolumeControlEvent = true;
	              _this2.sliderCallbackValue = _this2.slider.value;
	            });
	          }
	        });
	      }

	      if (this.isEditorMode) {
	        this.$scope.$watch('lcAudioPlayerVm.audioSrc', function (newValue, oldValue) {
	          if (newValue !== oldValue) {
	            _this2.clean();
	            _this2.audioReload();
	          }
	        }, true);
	      }
	    }
	  }, {
	    key: 'watchScopeEvent',
	    value: function watchScopeEvent() {
	      var _this3 = this;

	      if (this.isEditorMode) {
	        this.$scope.$on('audio:player:stop', function () {
	          if (_this3.audio) {
	            _this3.audio.stop();
	          }
	        });

	        this.$scope.$on('audio:player:reload', function () {
	          _this3.clean();
	          _this3.audioReload();
	        });
	      }
	    }
	  }, {
	    key: 'audioPlay',
	    value: function audioPlay() {
	      if (this.audio) {
	        this.audio.repeatCount++;
	        this.audio.play();
	      }
	    }
	  }, {
	    key: 'audioReload',
	    value: function audioReload() {
	      this.audio = this.ngAudio.load(this.audioSrc);
	      this.audio.repeatCount = 0;
	    }
	  }, {
	    key: 'clean',
	    value: function clean() {
	      if (this.audio) {
	        this.trackRunningTime = 0;
	        this.audio.stop();
	        this.audio.unbind();
	      }
	    }
	  }, {
	    key: 'getRemainingSeconds',
	    value: function getRemainingSeconds() {
	      if (this.audio) {
	        return this.$filter('secondsToDateTime')(this.audio.remaining);
	      }
	    }
	  }, {
	    key: 'checkAudioLoad',
	    value: function checkAudioLoad() {
	      return !isNaN(this.getRemainingSeconds());
	    }
	  }, {
	    key: 'checkRemainingTimeViewCondition',
	    value: function checkRemainingTimeViewCondition() {
	      return this.audio && this.audio.remaining !== 0 && this.audio.repeatCount !== 0 && this.checkAudioLoad();
	    }
	  }, {
	    key: 'loadOptions',
	    value: function loadOptions() {
	      if (_typeof(this.options['tooltip']) !== undefined) {
	        this.tooltip = this.options['tooltip'] === false ? false : true;
	      }
	    }
	  }]);

	  return LcAudioPlayerController;
	}();

	exports.default = LcAudioPlayerController;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _secondsToDateTime = __webpack_require__(15);

	var _secondsToDateTime2 = _interopRequireDefault(_secondsToDateTime);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.common.components.LcAudioPlayer.filters', []).filter('secondsToDateTime', _secondsToDateTime2.default);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = secondsToDateTime;
	function secondsToDateTime() {
	  'ngInject';

	  return function (seconds) {
	    return new Date(1970, 0, 1).setSeconds(seconds);
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(17);

	__webpack_require__(19);

	__webpack_require__(21);

	exports.default = angular.module('lc.components', ['lc.components.SideNav', 'lc.components.LcdHeader', 'lc.components.LcdFooter']);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sideNav = __webpack_require__(18);

	var _sideNav2 = _interopRequireDefault(_sideNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.components.SideNav', []).component('sideNav', (0, _sideNav2.default)());

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sideNavComponent;
	function sideNavComponent() {
	  return {
	    templateUrl: 'app/components/side-nav/side-nav.html'
	  };
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lcdHeader = __webpack_require__(20);

	var _lcdHeader2 = _interopRequireDefault(_lcdHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.components.LcdHeader', []).component('lcdHeader', (0, _lcdHeader2.default)());

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = lcdHeaderComponent;
	function lcdHeaderComponent() {
	  return {
	    templateUrl: 'app/components/lcd-header/lcd-header.html'
	  };
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lcdFooter = __webpack_require__(22);

	var _lcdFooter2 = _interopRequireDefault(_lcdFooter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.components.LcdFooter', []).component('lcdFooter', (0, _lcdFooter2.default)());

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = lcdFooterComponent;
	function lcdFooterComponent() {
	  return {
	    templateUrl: 'app/components/lcd-footer/lcd-footer.html'
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(24);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.main', []).config(_main2.default);

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	redirection.$inject = ["$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = redirection;
	function redirection($urlRouterProvider) {
	  'ngInject';

	  $urlRouterProvider.when('/', '/intro').otherwise(routerCallback);

	  function routerCallback($injector, $location) {

	    var state = $injector.get('$state');
	    state.go('home.intro');

	    return $location.path();
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _intro = __webpack_require__(26);

	var _intro2 = _interopRequireDefault(_intro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.intro', []).config(_intro2.default);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routerConfig;

	var _intro = __webpack_require__(27);

	var _intro2 = _interopRequireDefault(_intro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('home.intro', {
	    url: 'intro',
	    templateUrl: 'app/intro/intro.html',
	    controller: _intro2.default,
	    controllerAs: 'introVm'
	  });
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IntroController = function IntroController() {
	  _classCallCheck(this, IntroController);
	};

	exports.default = IntroController;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _example = __webpack_require__(29);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('lc.example.example1', []).config(_example2.default);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routerConfig;

	var _example = __webpack_require__(30);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('home.example1', {
	    url: 'example1',
	    templateUrl: 'app/example-1/example-1.html',
	    controller: _example2.default,
	    controllerAs: 'exampleVm'
	  });
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Example1Controller = function Example1Controller() {
	  _classCallCheck(this, Example1Controller);

	  this.exampleAudio1 = {
	    audioSrc: '/assets/audios/Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3',
	    audioFilename: 'Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3'
	  };

	  this.exampleAudio2 = {
	    audioSrc: '/assets/audios/EFIX & Kokenn - Louise (Feat Edgar).mp3'
	  };

	  this.exampleAudio3 = {
	    audioSrc: '/assets/audios/uneasy-dream(a-bittersweet-life-ost).mp3',
	    audioFilename: 'uneasy-dream(a-bittersweet-life-ost).mp3',
	    options: {
	      tooltip: false
	    }
	  };
	};

	exports.default = Example1Controller;

/***/ }
/******/ ]);