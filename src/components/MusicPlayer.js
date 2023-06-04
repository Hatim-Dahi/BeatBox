import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";

import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { Songs } from "./Songs";
import { InstrumentalSongs } from './InstrumentalSongs'
import { HollywoodSongs } from "./HollywoodSongs";
import { Link } from "react-router-dom";
import { PodcastsList } from "./PodcastList";
import { OldSongs } from "./OldSongs";

function MusicPlayer({ auto, index, genre, songName }) {

  const [currentIndex, setCurrentIndex] = useState(index);
  const [song, setSong] = useState("");
  const [SongName, setSongName] = useState(songName || "");
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    setCurrentIndex(index);
    if (genre == 'hollywood') {
      setSong(HollywoodSongs[currentIndex])
    } else if (genre == 'instrumental') {
      setSong(InstrumentalSongs[currentIndex])
    }else if (genre == 'podcast') {
      setSong(PodcastsList[currentIndex])
    }else if (genre == 'oldsongs') {
      setSong(OldSongs[currentIndex])
    }
     else {
      setSong(Songs[currentIndex])
    }
    setSongName(songName);
  }, [index][genre]);


  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };
  const handlePrevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      changePlayPause(); // start playing the song
    } else {
      setCurrentIndex(Songs.length - 1);
      changePlayPause(); // start playing the song
    }
  };

  const handleNextSong = () => {
    if (currentIndex === Songs.length - 1) {
      setCurrentIndex(0);
      changePlayPause(); // start playing the song
    } else {
      setCurrentIndex(currentIndex + 1);
      changePlayPause(); // start playing the song
    }    
  };


  return (
    <div className="musicPlayer">
      <div className="songImage">
        <Link to={`/${genre}/${currentIndex}/${SongName}`}>
          <img src={song.img_src} alt="" />
        </Link>
      </div>
      <div className="songAttributes">
        <audio src={song.song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i onClick={handlePrevSong}>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward onClick={handleNextSong} />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };