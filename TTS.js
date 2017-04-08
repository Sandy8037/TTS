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
    var promise = TTSAppService.talk(TTS.text);
    console.log('end');
  }
}

TTSAppService.$inject = ['$http'];
function TTSAppService($http) {
  var service = this;

  service.talk = function (text) {
    var msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  };
}

})();
