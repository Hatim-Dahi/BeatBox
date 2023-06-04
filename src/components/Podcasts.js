import React from 'react'
import { Songs } from "./Songs"
import '../styles/podcasts.css'
import { PodcastsList } from './PodcastList';
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MusicPlayer } from './MusicPlayer';
export default function Podcasts() {
  const [songName, setSongName] = useState(Songs[0]?.SongName | '');
  const [genre, setGenre] = useState('podcast' || '');
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(false);

  function setMainSong(index, genre, songName) {
    setIndex(index || 0);
    setGenre(genre || '');
    setSongName(songName || "");
    setAuto(true);
  }
  return (
    <div className='AudioList SongsDescription-container'>
      <div className='songsContainer'>
        <div className="podcasts-container">
          <div className="podcasts-boxes">
            {
              PodcastsList && PodcastsList.map(Podcast => {
                return (
                  <div className="podcasts-box">
                    <div className="overlay">
                      <Link onClick={() => setMainSong(Podcast.id, Podcast.genre,  Podcast.SongName)}><i><AiFillPlayCircle /></i></Link>
                    </div>
                    <img src={Podcast.img_src} alt="" />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <MusicPlayer index={index} genre={genre} songName={songName} />
    </div>

  )
}
