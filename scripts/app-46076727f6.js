/******/!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var n=o(1),i=o(2),a=o(3),r=o(4),l=o(5),u=o(6),s=o(7),c=o(8);o(9),o(16),o(23),o(25),o(28),angular.module("lcAudioPlayer",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ui.bootstrap","toastr","ngAudio","rzModule","lc.common","lc.components","lc.main","lc.intro","lc.example.example1"]).constant("malarkey",malarkey).constant("moment",moment).config(n.config).config(i.routerConfig).run(a.runBlock).service("githubContributor",l.GithubContributorService).service("webDevTec",u.WebDevTecService).controller("MainController",r.MainController).directive("acmeNavbar",s.NavbarDirective).directive("acmeMalarkey",c.MalarkeyDirective)},function(e,t){"use strict";function o(e,t){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}o.$inject=["$logProvider","toastrConfig"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=o},function(e,t){"use strict";function o(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}o.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=o},function(e,t){"use strict";function o(e){"ngInject";e.debug("runBlock end")}o.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.MainController=function(){function e(t,n,i){"ngInject";o(this,e),this.awesomeThings=[],this.classAnimation="",this.creationDate=1469186329929,this.toastr=i,this.activate(t,n)}return e.$inject=["$timeout","webDevTec","toastr"],n(e,[{key:"activate",value:function(e,t){var o=this;this.getWebDevTec(t),e(function(){o.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(e){this.awesomeThings=e.getTec(),angular.forEach(this.awesomeThings,function(e){e.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),e}()},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.GithubContributorService=function(){function e(t,n){"ngInject";o(this,e),this.$log=t,this.$http=n,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return e.$inject=["$log","$http"],n(e,[{key:"getContributors",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?30:arguments[0];return this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(e){return e.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),e}()},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.WebDevTecService=function(){function e(){"ngInject";o(this,e),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return n(e,[{key:"getTec",value:function(){return this.data}}]),e}()},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.NavbarDirective=n;var i=function a(e){"ngInject";o(this,a),this.relativeDate=e(this.creationDate).fromNow()};i.$inject=["moment"]},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e){"ngInject";function t(t,o,n,i){var a=void 0,r=e(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),a=t.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){a()})}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return o}n.$inject=["malarkey"],Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.MalarkeyDirective=n;var a=function(){function e(t,n){"ngInject";o(this,e),this.$log=t,this.contributors=[],this.activate(n)}return e.$inject=["$log","githubContributor"],i(e,[{key:"activate",value:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}}]),e}()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(10),t["default"]=angular.module("lc.common",["lc.common.components"])},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(11),t["default"]=angular.module("lc.common.components",["lc.common.components.LcAudioPlayer"])},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i);o(14),t["default"]=angular.module("lc.common.components.LcAudioPlayer",["lc.common.components.LcAudioPlayer.filters"]).component("lcAudioPlayer",(0,a["default"])())},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(){return{templateUrl:"app/common/components/lc-audio-player/lc-audio-player.html",controller:r["default"],controllerAs:"lcAudioPlayerVm",bindings:{audioSrc:"=",audioFilename:"=?",autoPlay:"=?",options:"=?",isEditorMode:"=?"}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var a=o(13),r=n(a)},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=function(){function e(t,n,i,a,r){"ngInject";var l=this;o(this,e),this.$scope=t,this.$element=n,this.$filter=i,this.$document=a,this.ngAudio=r,this.init(),this.watchInit(),this.watchScopeEvent(),t.$on("$destroy",function(){l.clean()})}return e.$inject=["$scope","$element","$filter","$document","ngAudio"],i(e,[{key:"init",value:function(){this.tooltip=!0,this.audioSrc&&(this.audio=this.ngAudio.load(this.audioSrc),this.audio.repeatCount=0,1==this.autoPlay&&this.audioPlay(),this.options&&this.loadOptions()),this.slider={value:1e4,options:{showSelectionBar:!0,hidePointerLabels:!0,hideLimitLabels:!0}},this.isDragVolumeControlEvent=!1}},{key:"watchInit",value:function(){var e=this;this.$scope.$watch("lcAudioPlayerVm.audio.remaining",function(t){t>0&&(e.trackRunningTime||(e.trackRunningTime=e.$filter("secondsToDateTime")(Math.floor(e.audio.remaining))))}),this.audio&&(this.$scope.$watch("lcAudioPlayerVm.audio.progress",function(t,o){t==o||e.isDragVolumeControlEvent||(e.slider.value=1e4*t)}),this.$scope.$watch("lcAudioPlayerVm.slider.value",function(t,o){(t!=o&&e.isDragVolumeControlEvent||e.isVolumeControlEvent)&&(e.audio.progress=Math.floor(e.slider.value)/1e4,e.isVolumeControlEvent&&(e.isVolumeControlEvent=!1,e.audio.progress=Math.floor(e.sliderCallbackValue)/1e4))}),this.$scope.$watch(function(){return e.$element[0].querySelector('span[role="slider"]')},function(t){if(t){var o="content_audio_"+Math.floor(1e3*Math.random());e.pointer=t,e.pointer.id=o,e.$pointer=e.$element.find("#"+o),e.$pointer.on("mousedown",function(){e.isDragVolumeControlEvent=!0}),e.$document.on("mouseup",function(){e.isDragVolumeControlEvent=!1}),e.$element.find(".rz-bar-wrapper").on("mousedown",function(){e.isVolumeControlEvent=!0,e.sliderCallbackValue=e.slider.value})}})),this.isEditorMode&&this.$scope.$watch("lcAudioPlayerVm.audioSrc",function(t,o){t!==o&&(e.clean(),e.audioReload())},!0)}},{key:"watchScopeEvent",value:function(){var e=this;this.isEditorMode&&(this.$scope.$on("audio:player:stop",function(){e.audio&&e.audio.stop()}),this.$scope.$on("audio:player:reload",function(){e.clean(),e.audioReload()}))}},{key:"audioPlay",value:function(){this.audio&&(this.audio.repeatCount++,this.audio.play())}},{key:"audioReload",value:function(){this.audio=this.ngAudio.load(this.audioSrc),this.audio.repeatCount=0}},{key:"clean",value:function(){this.audio&&(this.trackRunningTime=0,this.audio.stop(),this.audio.unbind())}},{key:"getRemainingSeconds",value:function(){return this.audio?this.$filter("secondsToDateTime")(this.audio.remaining):void 0}},{key:"checkAudioLoad",value:function(){return!isNaN(this.getRemainingSeconds())}},{key:"checkRemainingTimeViewCondition",value:function(){return this.audio&&0!==this.audio.remaining&&0!==this.audio.repeatCount&&this.checkAudioLoad()}},{key:"loadOptions",value:function(){void 0!==n(this.options.tooltip)&&(this.tooltip=this.options.tooltip===!1?!1:!0)}}]),e}();t["default"]=a},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(15),a=n(i);t["default"]=angular.module("lc.common.components.LcAudioPlayer.filters",[]).filter("secondsToDateTime",a["default"])},function(e,t){"use strict";function o(){"ngInject";return function(e){return new Date(1970,0,1).setSeconds(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(17),o(19),o(21),t["default"]=angular.module("lc.components",["lc.components.SideNav","lc.components.LcdHeader","lc.components.LcdFooter"])},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(18),a=n(i);t["default"]=angular.module("lc.components.SideNav",[]).component("sideNav",(0,a["default"])())},function(e,t){"use strict";function o(){return{templateUrl:"app/components/side-nav/side-nav.html"}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(20),a=n(i);t["default"]=angular.module("lc.components.LcdHeader",[]).component("lcdHeader",(0,a["default"])())},function(e,t){"use strict";function o(){return{templateUrl:"app/components/lcd-header/lcd-header.html"}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(22),a=n(i);t["default"]=angular.module("lc.components.LcdFooter",[]).component("lcdFooter",(0,a["default"])())},function(e,t){"use strict";function o(){return{templateUrl:"app/components/lcd-footer/lcd-footer.html"}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(24),a=n(i);t["default"]=angular.module("lc.main",[]).config(a["default"])},function(e,t){"use strict";function o(e){"ngInject";function t(e,t){var o=e.get("$state");return o.go("home.intro"),t.path()}e.when("/","/intro").otherwise(t)}o.$inject=["$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(26),a=n(i);t["default"]=angular.module("lc.intro",[]).config(a["default"])},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){"ngInject";e.state("home.intro",{url:"intro",templateUrl:"app/intro/intro.html",controller:r["default"],controllerAs:"introVm"})}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var a=o(27),r=n(a)},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function i(){o(this,i)};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(29),a=n(i);t["default"]=angular.module("lc.example.example1",[]).config(a["default"])},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){"ngInject";e.state("home.example1",{url:"example1",templateUrl:"app/example-1/example-1.html",controller:r["default"],controllerAs:"exampleVm"})}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var a=o(30),r=n(a)},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function i(){o(this,i),this.exampleAudio1={audioSrc:"assets/audios/Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3",audioFilename:"Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3"},this.exampleAudio2={audioSrc:"assets/audios/EFIX & Kokenn - Louise (Feat Edgar).mp3"},this.exampleAudio3={audioSrc:"assets/audios/uneasy-dream(a-bittersweet-life-ost).mp3",audioFilename:"uneasy-dream(a-bittersweet-life-ost).mp3",options:{tooltip:!1}}};t["default"]=n}]),angular.module("lcAudioPlayer").run(["$templateCache",function(e){e.put("app/example-1/example-1.html","<section class=col-md-10><h3>file-name & tooltip view Exmaple</h3><lc-audio-player audio-src=exampleVm.exampleAudio1.audioSrc auto-play=false audio-filename=exampleVm.exampleAudio1.audioFilename></lc-audio-player><p>if you input the 'audio-filename' parameter file-name and tooltip will be able.</p><h3>filename & tooltip off example</h3><lc-audio-player audio-src=exampleVm.exampleAudio2.audioSrc></lc-audio-player><p>it's simple. you won't show filename just don't put in 'audio-filename' parameter 'Warning' - don't put in 'audio-filename', invisible with tooltip!</p><h3>tootip off example</h3><lc-audio-player audio-src=exampleVm.exampleAudio3.audioSrc audio-filename=exampleVm.exampleAudio3.audioFilename options=exampleVm.exampleAudio3.options></lc-audio-player><p></p></section>"),e.put("app/intro/intro.html","<section id=main_content class=col-md-10><h3>Simple and cover to Web / Tablet / Mobile resolution</h3><p>as you can see it's simple. The HTML default audio is uncomfortable because it is too small to view. The UI does not have a very intuitive feel. The button for playback on the mobile version is too small. so WE created it. The most simple and basic audio player that covers Web/Tablet/Mobile if you want simple and All round cover it's good choice</p><br><lc-audio-player audio-src=\"'assets/audios/Pastel-Shade-01-Longing-displace-320k.mp3'\" auto-play=true></lc-audio-player><br><h3>Resolution</h3><p>this component support min-width:360px to max-width 620px as soon will be cover 320px.</p><h3>this component used to angular 1.5.x version</h3><p>this component is used to angular 1.5.x if you using 1.4.x this is to time for migration don't worry. migration is very simple. 1.5.x backward compatibility is very good.</p><h3>this document not complete!</h3></section>"),e.put("app/main/main.html",'<!-- MAIN CONTENT --><div class="main-content-wrap outer"><div class=container><side-nav></side-nav><div ui-view></div></div></div>'),e.put("app/components/lcd-footer/lcd-footer.html",'<!-- FOOTER  --><div class="outer footer-wrap"><footer class=inner><p class=copyright>develop & maintained by <a href=polyglot-m.blogspot.kr target=_blink>polyglotm</a></p><p class=copyright>disigned by <a href=https://www.medium.com/@yunkom target=_blink>SeongKwon Yoon</a></p></footer></div>'),e.put("app/components/lcd-header/lcd-header.html","<!-- HEADER --><div id=header_wrap class=outer><header class=inner><a id=forkme_banner href=https://github.com/polyglotm/angular-audio-player>View on GitHub</a><h1 id=project_title class=project-title>Angular-audio-player</h1><h2 id=project_tagline></h2><section id=downloads><a class=zip_download_link href=https://github.com/polyglotm/angular-audio-player/zipball/master>Download this project as a .zip file</a> <a class=tar_download_link href=https://github.com/polyglotm/angular-audio-player/tarball/master>Download this project as a tar.gz file</a></section></header></div>"),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),e.put("app/components/side-nav/side-nav.html",'<aside class="lcd-side-nav col-md-2"><ul class="nav nav-pills nav-stacked"><li><a ui-sref=.intro ui-sref-active=active>Intro</a></li><li><a ui-sref=.example1 ui-sref-active=active>Example</a></li></ul></aside>'),e.put("app/common/components/lc-audio-player/lc-audio-player.html","<div class=lc-audio-player><div class=audio-control-panel><button ng-click=\"lcAudioPlayerVm.audio.paused ? lcAudioPlayerVm.audioPlay() : lcAudioPlayerVm.audio.pause()\"><i ng-class=\"{'ct-ft-icon-playbtn-fi': lcAudioPlayerVm.audio.paused,\n                    'ct-ft-icon-pausebtn-fi': !lcAudioPlayerVm.audio.paused && lcAudioPlayerVm.audio.remaining !== 0,\n                    'ct-ft-icon-restartbtn-thin': lcAudioPlayerVm.audio.remaining === 0 }\"></i></button></div><div class=audio-info-panel><div class=pull-width></div><rzslider rz-slider-model=lcAudioPlayerVm.slider.value rz-slider-options=lcAudioPlayerVm.slider.options></rzslider><div ng-if=\"lcAudioPlayerVm.audioFilename && lcAudioPlayerVm.tooltip\" class=audio-hidden-menu uib-tooltip={{lcAudioPlayerVm.audioFilename}}>{{lcAudioPlayerVm.audioFilename || 'Audio'}}</div><div ng-if=\"lcAudioPlayerVm.audioFilename && !lcAudioPlayerVm.tooltip\" class=audio-hidden-menu>{{lcAudioPlayerVm.audioFilename || 'Audio'}}</div></div><div class=audio-time-panel><span ng-if=!lcAudioPlayerVm.checkAudioLoad()>'Loading...' </span><span ng-if=lcAudioPlayerVm.checkRemainingTimeViewCondition()>{{lcAudioPlayerVm.audio.remaining | secondsToDateTime | date:'mm:ss'}} | </span><span ng-if=lcAudioPlayerVm.checkAudioLoad()>{{lcAudioPlayerVm.trackRunningTime | date:'mm:ss'}}</span></div></div>")}]);
//# sourceMappingURL=../maps/scripts/app-46076727f6.js.map