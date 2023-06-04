import React from 'react'
import '../styles/artist.css'
import '../styles/discover.css'
import { ArtistList } from "./ArtistList"
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HollywoodSongs } from './HollywoodSongs'
import { useState } from 'react';
import { Songs } from "./Songs"
import {GiMusicSpell} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Artist() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="discover-container">
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
            <div className=" artist-boxes discover-boxes">
                {ArtistList && ArtistList.map((song, index) => {
                    return (
                        <div className="artist-box discover-box" key={index} >
                            <div className="overlay">
                                <Link to={`/artist/${song.Name}`}><i><AiFillPlayCircle /></i></Link>
                            </div>
                            <img className='artist-img' src={song.img_src} alt="" />
                            <h3>{song.Name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}
