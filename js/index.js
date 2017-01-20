//https://dev.twitch.tv/docs/v5/reference/search/
//https://forum.freecodecamp.com/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541
//$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//  console.log(data);
//});
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?", function(data) {
    if(data.stream === null){
      $("#fcc-twitch").html("Freecodecamp is currently offline <button class='btn btn-danger disabled'>Offline</button>");
    }
    //append all console logged data to div
    else{
      console.log(data);
    }
  //when stream is null show offline button with class disabled
});