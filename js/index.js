//https://dev.twitch.tv/docs/v5/reference/search/
//https://forum.freecodecamp.com/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541
//$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//  console.log(data);
//});
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?", function(data) {
   //when stream is null show offline button with class disabled
  if(data.stream === null){
      $("#fcc-twitch").html("Freecodecamp is currently offline <button class='btn btn-danger disabled'>Offline</button>");
    }
    //append freecodecamp details when online
    else{
      console.log(data.stream.channel.logo);
      console.log(data.stream.channel.display_name);
      console.log(data.stream.channel.url);
    }
  
});

for(var i = 0; i < streams.length; i++){
  $.when(
  $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + streams[i] + "?callback=?"), $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + streams[i] + "?callback=?"))
  .done(function(data1, data2){
    console.log(data1);
    console.log(data2);
    //display nonexistent channels
    if(data1[0].error){
      console.log(data1[0].error);
      $("#all").append("<div class='row spacing divider'><div class='col-xs-12'>" + streams[i] + " does not exist</div></div>");
    }
    //display offline channels
    else if(!data1[0].error && data2[0].stream === null){
      console.log("offline");
      $("#all").append("<div class='row spacing divider'><div class='col-xs-3'>" + data1[0].display_name + " is currently offline </div>" + "<div class='col-xs-3'>" + "</div>" + "<div class='col-xs-3'>" + "</div>" + "<div class='col-xs-3'><button class='btn btn-danger disabled'>Offline</button>" + "</div></div>");
      $("#offline").append("<div class='row spacing divider'><div class='col-xs-3'>" + data1[0].display_name + " is currently offline </div>" + "<div class='col-xs-3'>" + "</div>" + "<div class='col-xs-3'>" + "</div>" + "<div class='col-xs-3'><button class='btn btn-danger disabled'>Offline</button>" + "</div></div>");
    }
    //display online channels
    else {
      console.log("online");
      $("#all").append("<div class='row spacing divider'><div class='col-xs-3'><img src=" + data2[0].stream.channel.logo + " class='img-responsive'/></div>" + "<div class='col-xs-3'>" + data2[0].stream.channel.display_name + "</div><div class='col-xs-3'><img src=" + data2[0].stream.preview.medium + " class='img-responsive'/></div><div class='col-xs-3'><a href=" + data2[0].stream.channel.url + " class='btn btn-success' target=_blank>Online</a></div></div>");
      $("#online").append("<div class='row spacing divider'><div class='col-xs-3'><img src=" + data2[0].stream.channel.logo + " class='img-responsive'/></div>" + "<div class='col-xs-3'>" + data2[0].stream.channel.display_name + "</div><div class='col-xs-3'><img src=" + data2[0].stream.preview.medium + " class='img-responsive'/></div><div class='col-xs-3'><a href=" + data2[0].stream.channel.url + " class='btn btn-success' target=_blank>Online</button></div></div>");
    }
  });
}