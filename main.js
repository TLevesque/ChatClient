'use strict';




//Button send message:
$(document).ready(function () {
  $('#send').click(function () {
    var currentText = $('#inputText').val();
    console.log(currentText);
    var msgBox = $('<h2 class="user">').append(currentText);
    $('#messagesArea').append(msgBox);
    $('#inputText').val('');
    get();
  });
});

// API call
  //  Get Quote call
  function get() {
    $.ajax({
      method: "GET",
      dataType: "jsonp",
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
    });
  }

//{"quoteText":"Тот", "quoteAuthor":"", "senderName":"", "senderLink":"", "quoteLink":"http://forism"}
function parseQuote(msg) {
  console.log(msg);
  var response = $('<h2 class="server">').append(msg.quoteText);
  $('#messagesArea').append(response);
  return;
}

// function (msg) {
//   var reponse = {};
//   reponse.quote = msg.quoteText;
//   reponse.author = msg.quoteAuthor;
//   receivedMsg.push(reponse);
//   console.log('in da parseReponse');
//   return;
// }

// Store response
// var receivedMsg = [];
