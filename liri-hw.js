//command to use module/ libraries
var fs = require('fs');
var spotify = require('spotify');
var key =  require('./keys')
//api key protection 
require('dotenv').config(); 

//command line inputs
var cmmd = process.argv[2];
var usrInput = process.argv[3];
var result = '';



// pass the value of the command 

switch(cmmd){
case "spotify-this-song":
    if(cmmd){
      spotifySong(x);
    } else{
      spotifySong("Not found");
    }
  break;
}



function spotify(){
spotify.search({ type: 'track', query: song}, function(err, data){
    if ( err ) {
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            //artist
            console.log("Artist: " + songData.artists[0].name);
            //song name
            console.log("Song: " + songData.name);
            //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
            //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            
            //adds text to log.txt
            fs.appendFile('log.txt', songData.artists[0].name);
            fs.appendFile('log.txt', songData.name);
            fs.appendFile('log.txt', songData.preview_url);
            fs.appendFile('log.txt', songData.album.name);
            fs.appendFile('log.txt', "-----------------------");
          }

        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data'
});
}
