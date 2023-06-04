import React, { useState, useEffect } from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, FaEllipsisH } from 'react-icons/fa';
import { Songs } from './Songs';
import { InstrumentalSongs } from './InstrumentalSongs'
import { HollywoodSongs } from './HollywoodSongs'
import { MusicPlayer } from './MusicPlayer';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AiFillPlayCircle, AiOutlineMenu } from 'react-icons/ai';
import CryptoJS from 'crypto-js';
import { BiSearchAlt,bsFillHouseFill } from 'react-icons/bi'
import artist from '../images/artist.jpg'
import BannerSlider from './BannerSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import artist_img from '../images/artist1.jpg'
import { faEllipsisH, faHeadphones, faCheck, faPodcast,faMicrophoneAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { GiMusicSpell } from 'react-icons/gi'
export default function AudioList() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 6,
    className: 'Slider-x',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const [songs, setSongs] = useState(Songs);
  const [songName, setSongName] = useState(Songs[0]?.SongName | '');
  const [index, setIndex] = useState(0);
  const [song, setSong] = useState(Songs[0]?.song || '');
  const [genre, setGenre] = useState('bollywood' || '');
  const [img, setImage] = useState(Songs[0]?.img_src || '');
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    setMainSong(index, genre, songName)
    const allSongs = document.querySelectorAll('.songs');
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    allSongs.forEach((n) => n.addEventListener('click', changeActive));
  }, []);

  function changeFavourite(id) {
    setSongs((prevSongs) => {
      return prevSongs.map((song) => {
        if (song.id === id) {
          return { ...song, favourite: !song.favourite };
        } else {
          return song;
        }
      });
    });
  }

  function setMainSong(index, genre, songName) {
    setIndex(index || 0);
    setGenre(genre || '');
    setSongName(songName || "");
    setAuto(true);
  }

  // Helper function to format time
  function formatTime(seconds) {
    if (isNaN(seconds)) {
      return '';
    }

    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='AudioList'>
      <div className='songsContainer'>
        <div className="responsive-menubar">
          <div className="left">
            <i><GiMusicSpell /></i>
            <h2>BeatBoxx</h2>
          </div>
          <div className="right">
            <Link to="/search" className='res-link'><i><BsSearch /></i></Link>
            <i onClick={toggleDropdown}><AiOutlineMenu /></i>
            {isOpen && ( // only show the dropdown content if isOpen is true
              <div className="dropdown-content" style={{ display: 'block' }}>
                <Link to="/home" className='drop-link'><i><bsFillHouseFill /></i>Home</Link>
                <Link to="/artist" className='drop-link'><i><faMicrophoneAlt /></i>Top Artist</Link>
                <Link to="/podcasts" className='drop-link'><i><faPodcast /></i>Podcast</Link>
              </div>
            )}
          </div>
        </div>
        <div className="search-bar">
          <Link to="/search"><input type="text" placeholder='Search..' /></Link>
          <i>
            <BiSearchAlt />
          </i>
        </div>
        <div className="discover-head">
          <ul>
            <li><NavLink exact to='/home' className='link'>All</NavLink></li>
            <li><NavLink to='/trending' className='link'>Trending Now</NavLink></li>
            <li><NavLink to='/old' className='link'>Old Songs</NavLink></li>
            <li><NavLink to='/new' className='link'>New Songs</NavLink></li>
            <li><NavLink to='/bollywood' className='link'>Bollywood</NavLink></li>
            <li><NavLink to='/instrumental' className='link'>Instrumental Songs</NavLink></li>
            <li><NavLink to='/hollywood' className='link'>Hollywood Songs</NavLink></li>
          </ul>
        </div>

        <BannerSlider />

        <div className="headlines">
          <h2>Latest Hindi</h2>
          <Link className='link' to="/bollywood"><p>More</p></Link>
        </div>
        <div className="discover-boxes">

          <Slider {...settings}>
            {Songs && Songs.filter((song) => song.genre === "bollywood").slice(0, 20).map((song, index) => {
              return (
                <div className="discover-box discover-box-extra" key={index} >
                  <div className="overlay">
                    <Link onClick={() => setMainSong(song.id, song.genre, song.SongName)}><i><AiFillPlayCircle /></i></Link>
                  </div>

                  <img src={song.img_src} alt="" />
                  <h3>{song.SongName}</h3>
                  <p>{song.artist}</p>
                </div>
              );
            })}
          </Slider>

        </div>

        <div className="headlines">
          <h2>New Songs</h2>
          <Link className='link' to="/new"><p>More</p></Link>
        </div>
        <div className="discover-boxes">

          <Slider {...settings}>
            {Songs && Songs.filter((song) => song.genre === "bollywood").slice(10, 20).map((song, index) => {
              return (
                <div className="discover-box discover-box-extra" key={index} >
                  <div className="overlay">
                    <Link onClick={() => setMainSong(song.id, song.genre, song.SongName)}><i><AiFillPlayCircle /></i></Link>
                  </div>

                  <img src={song.img_src} alt="" />
                  <h3>{song.SongName}</h3>
                  <p>{song.artist}</p>
                </div>
              );
            })}
          </Slider>

        </div>


        <div className="headlines">
          <h2>Top Instrumental Songs</h2>
          <Link className='link' to="/instrumental"><p>More</p></Link>
        </div>
        <div className="discover-boxes">
          <Slider {...settings}>
            {InstrumentalSongs && InstrumentalSongs.filter((IntruSong) => IntruSong.genre === "instrumental").slice(0, 7).map((IntruSong, index) => {
              return (
                <div className="discover-box discover-box-extra" key={index} >
                  <div className="overlay">
                    <Link onClick={() => setMainSong(IntruSong.id, IntruSong.genre, IntruSong.SongName)}><i><AiFillPlayCircle /></i></Link>
                  </div>

                  <img src={IntruSong.img_src} alt="" />
                  <h3>{IntruSong.SongName}</h3>
                  <p>{IntruSong.artist}</p>

                </div>
              );
            })}
          </Slider>
        </div>
        <div className="headlines">
          <h2>Top Hollywood Songs</h2>
          <Link className='link' to="/hollywood"><p>More</p></Link>
        </div>
        <div className="discover-boxes">
          <Slider {...settings}>
            {HollywoodSongs && HollywoodSongs.filter((hollysong) => hollysong.genre === "hollywood").slice(0, 2).map((hollysong, index) => {
              return (
                <div className="discover-box discover-box-extra" key={index} >
                  <div className="overlay">
                    <Link onClick={() => setMainSong(hollysong.id, hollysong.genre, hollysong.SongName)}><i><AiFillPlayCircle /></i></Link>
                  </div>

                  <img src={hollysong.img_src} alt="" />
                  <h3>{hollysong.SongName}</h3>
                  <p>{hollysong.artist}</p>

                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <MusicPlayer index={index} genre={genre} songName={songName} />
    </div>
  );
}
