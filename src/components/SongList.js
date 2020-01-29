import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "mem gost", id: 2 },
    { title: "this wild drm", id: 3 }
  ]);
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}
