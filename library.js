// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library

var Libraby = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Libraby.prototype.addPlaylists = function (playlist) {
  this.playlists.push(playlist);
}
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks

var Playlists = function (name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = 0;
  this.totalDuration = 0;
}

Playlists.prototype._getRatings = function (trackRates) {
  var total = 0;
  for (var i = 0; i < trackRates.length; i++) {
    total += trackRates[i].rating;
  }
  return total / trackRates.length;
};

Playlists.prototype._getDuration = function (trackDuration) {
    var total = 0;
    for (var i = 0; i < trackDuration.length; i++) {
      total += trackDuration[i].length;
    }
    return total;
};

Playlists.prototype.addTracks = function (track) {
  this.tracks.push(track);
  this.overallRating = Playlists.prototype._getRatings(this.tracks);
  this.totalDuration = Playlists.prototype._getDuration(this.tracks);
}

// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
var Track = function (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.

var track1 = new Track('Track1', 1, 50)
var track2 = new Track('Track2', 2, 60)
var track3 = new Track('Track3', 3, 70)
var track4 = new Track('Track4', 2, 100)
var track5 = new Track('Track5', 5, 70)
var playlist1 = new Playlists('Playlist1');
playlist1.addTracks(track1);
playlist1.addTracks(track2);
playlist1.addTracks(track3);
playlist1.addTracks(track4);
playlist1.addTracks(track5);
console.log(playlist1);

var trackA = new Track('TrackA', 1, 50)
var trackB = new Track('TrackB', 5, 160)
var playlistA = new Playlists('PlaylistA');
playlistA.addTracks(trackA);
playlistA.addTracks(trackB);
console.log(playlistA);

var library1 = new Libraby('Library1', 'Nanaa');
library1.addPlaylists(playlist1)
library1.addPlaylists(playlistA)
console.log(library1)





