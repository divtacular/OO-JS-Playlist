var playlist = new Playlist();

var songOne = new Song("Song One", "Artist One", "3:00");
var songTwo = new Song("Song Two", "Artist Two", "3:30");

playlist.add(songOne);
playlist.add(songTwo);

var manOfSteel = new Movie('Man of Steel', '2013', '2:23:00');

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
};

var nextButton = document.getElementById("next");
nextButton.onclick = function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
};

var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
    playlist.stop();
    playlist.renderInElement(playlistElement);
};

