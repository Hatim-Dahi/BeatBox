import React, { useEffect } from 'react'
import { AiFillPlayCircle,AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaRegHeart, FaPlay, FaHeart, FaShare } from 'react-icons/fa'
import { BsFillShareFill,BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { MusicPlayer } from './MusicPlayer'
import { useParams } from 'react-router-dom'
import { Songs } from "./Songs"
import { OldSongs } from "./OldSongs"
import { HollywoodSongs } from './HollywoodSongs'
import { InstrumentalSongs } from './InstrumentalSongs'
import { BiSearchAlt } from 'react-icons/bi'
import { GiMusicSpell } from 'react-icons/gi'

export default function Different_types() {
    const params = useParams();
    const type = params.type;

    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [songName, setSongName] = useState('');
    const [index, setIndex] = useState(0);
    const [auto, setAuto] = useState(false);
    const [songList, setSongList] = useState([]);

    function setMainSong(index, genre, songName) {
        setIndex(index || 0);
        setGenre(genre || '');
        setSongName(songName || "");
        setAuto(true);
    }
    useEffect(() => {
        if (type === 'trending') {
            setSongList(InstrumentalSongs);
        } else if (type === 'old') {
            setSongList(OldSongs);
        } else if (type === 'new') {

        } else if (type === 'instrumental') {
            setSongList(InstrumentalSongs);
        } else if (type === 'hollywood') {
            setSongList(HollywoodSongs);
        } else {
            setSongList(Songs);
        }

    }, [type]);
    return (
        <div className='AudioList SongsDescription-container'>
            <div className='songsContainer'>
                <div className="responsive-menubar">
                    <div className="left">
                        <i><GiMusicSpell /></i>
                        <h2>BeatBoxx</h2>
                    </div>
                    <div className="right">
                        <i><BsSearch /></i>
                        <i><AiOutlineMenu /></i>
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
                <div className="discover-container">
                    <div className="discover-boxes">
                        {songList && songList.map((song, index) => {
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
            </div>
            <MusicPlayer index={index} genre={genre} songName={songName} />
        </div>
    )
}
