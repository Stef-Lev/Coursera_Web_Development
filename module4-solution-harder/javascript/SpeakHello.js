
(function (){
  var helloSpeaker = {speak: function(name){
    var msgCss = 'color: #008B8B; font-size: 20px;'
    console.log(`%c${speakWord} ${name}`, msgCss);
  }}
  var speakWord = "Hello";

  window.helloSpeaker = helloSpeaker;
})();

