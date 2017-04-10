(function () {
'use strict';

angular.module('TTSApp', [])
.controller('TTSAppController', TTSAppController)
.service('TTSAppService', TTSAppService);

TTSAppController.$inject = ['TTSAppService'];
function TTSAppController(TTSAppService) {
  var TTS = this;

  TTS.keyPress = function () {
    TTS.selObj = window.getSelection();
    TTS.selectedText = TTS.selObj.toString();
    TTS.text = TTS.selectedText || '';
    TTS.talk();
  };

  TTS.text = '';
  TTS.talk = function () {
    TTSAppService.talk(TTS.text);
  }

  TTS.pause = function () {
    TTSAppService.pause();
  };

  TTS.resume = function () {
    TTSAppService.resume();
  };

  TTS.cancel = function () {
    TTSAppService.cancel();
  };
}

TTSAppService.$inject = ['$http'];
function TTSAppService($http) {
  var service = this;

  service.talk = function (text) {
    var msg = new SpeechSynthesisUtterance(text);
    console.log(speechSynthesis.getVoices());
    msg.voice = speechSynthesis.getVoices()[3];
    speechSynthesis.speak(msg);
  };

  service.pause = function () {
    speechSynthesis.pause();
  };

  service.resume = function () {
    speechSynthesis.resume();
  };

  service.cancel = function () {
    speechSynthesis.cancel();
  };
}

})();
