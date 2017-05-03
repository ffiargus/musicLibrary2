var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    for (list in this.playlists){
      console.log(this.playlists[list].id + ": ", this.playlists[list].name + " - " + this.playlists[list].tracks.length + " tracks");
    }
  },

  printTracks : function () {
    for (track in this.tracks){
      console.log(this.tracks[track].id + ": ", this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
    }
  },

  printPlaylist : function (playlistId) {
    console.log(this.playlists[playlistId].id + ": ", this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");

    for (track of this.playlists[playlistId].tracks){
      console.log(this.tracks[track].id + ": ", this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
    }
  },

  addTrackToPlaylist : function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack : function (name, artist, album) {
    var trackId = this.uid();
    this.tracks[trackId] =   {
                                  id: trackId,
                                  name: name,
                                  artist: artist,
                                  album: album
                                }
  },

  addPlaylist : function (name) {
    var playlistId = this.uid();
    this.playlists[playlistId] = {
                                      id: playlistId,
                                      name: name,
                                      tracks: []
                                    }
  },

  printSearchResults : function(query) {
    for (track in this.tracks){
      this.tracks[track].found = false;
    }

    var lower = query.join(" ").toLowerCase();
    for (track in this.tracks){
      if (this.tracks[track].name.toLowerCase().search(lower) != -1 && this.tracks[track].found === false){
        console.log(this.tracks[track].id + ": ", this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
        this.tracks[track].found = true;
      }
    }for (track in this.tracks){
      if (this.tracks[track].artist.toLowerCase().search(lower) != -1 && this.tracks[track].found === false){
        console.log(this.tracks[track].id + ": ", this.tracks[track].artist + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
        this.tracks[track].found = true;

      }
    }for (track in this.tracks){
      if (this.tracks[track].album.toLowerCase().search(lower) != -1 && this.tracks[track].found === false){
        console.log(this.tracks[track].id + ": ", this.tracks[track].album + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")");
        this.tracks[track].found = true;
      }
    }
  }
}
var querystring = process.argv.splice(2);
//library.printSearchResults(querystring);
//library.printPlaylists();
// library.printTracks();
