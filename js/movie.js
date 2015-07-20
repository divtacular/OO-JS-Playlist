function Movie(title, year, duration) {
    Media.call(this, title, duration); //Decorates this song with new media properties
    this.year = year;
}

//Prototype Chaining, inherits all prototyping from Media
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function () {
    var isCurrent = (this.isPlaying ? 'current' : '');
    var htmlString = '<li class=' + isCurrent + '>' + this.title + ' (' + this.year + ')<span class="duration">' + this.duration + '</span></li>';

    return htmlString;
};