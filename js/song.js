function Song(title, artist, duration) {
    Media.call(this, title, duration); //Decorates this song with new media properties
    this.artist = artist;
}

//Prototype Chaining, inherits all prototyping from Media
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function () {
    var isCurrent = (this.isPlaying ? 'current' : '');
    var htmlString = '<li class=' + isCurrent + '>' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>';

    return htmlString;
};