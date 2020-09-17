
(function (){
  var byeSpeaker = {speak: function(name){
    var msgCss = 'color: #008B8B; font-size: 20px;'
    console.log(`%c${speakWord} ${name}`, msgCss);
  }}
  var speakWord = "Good Bye";

  window.byeSpeaker = byeSpeaker;
})();
