type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  const album1 = makeAlbum("Pink Floyd", "Dark Side of the Moon", 10);
  console.log(album1);  // prints { artist: "Pink Floyd", title: "Dark Side of the Moon", tracks: 10 }
  
  const album2 = makeAlbum("The Beatles", "Abbey Road");
  console.log(album2);  // prints { artist: "The Beatles", title: "Abbey Road" }
  
  const album3 = makeAlbum("Led Zeppelin", "IV", 8);
  console.log(album3);  // prints { artist: "Led Zeppelin", title: "IV", tracks: 8 }
  