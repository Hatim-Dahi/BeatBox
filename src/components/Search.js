import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { InstrumentalSongs } from './InstrumentalSongs'
import { HollywoodSongs } from './HollywoodSongs'
import { Songs } from './Songs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MusicPlayer } from './MusicPlayer';

export default function Search({ songs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [auto, setAuto] = useState(false);
  const [genre, setGenre] = useState('bollywood' || '');
  const [songName, setSongName] = useState(Songs[0]?.SongName | '');
  const [index, setIndex] = useState(0);
  
  const filterSongs = (Songs, query) => {
    const searchTerms = query.toLowerCase().split(" ");
    return Songs.filter(song =>
      searchTerms.some(term =>
        song.SongName.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.movieName.toLowerCase().includes(term) 
      )
    )
  };
  const allSongs = Songs.concat(HollywoodSongs, InstrumentalSongs);
  const filteredSongs = filterSongs(allSongs, searchQuery);

  function setMainSong(index, genre, songName) {
    setIndex(index || 0);
    setGenre(genre || '');
    setSongName(songName || "");
    setAuto(true);
  }

  return (
    <div className='AudioList SongsDescription-container'>
      <div className='songsContainer'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          <i>
            <BiSearchAlt />
          </i>
        </div>
        <div className="discover-boxes">
          {filteredSongs && filteredSongs.map((song, index) => {
            return (
              <div className="discover-box" key={index} >
                <div className="overlay">
                  <Link onClick={() => setMainSong(song.id, song.genre, song.SongName)}><i><AiFillPlayCircle /></i></Link>
                </div>
                <img src={song.img_src} alt="" />
                <h3>{song.SongName}</h3>
                <p>{song.artist}</p>
              </div>
            );
          })}
        </div>
      </div>
      <MusicPlayer index={index} genre={genre} songName={songName} />
    </div>
  )
}
