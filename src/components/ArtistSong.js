import React, { useEffect } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaRegHeart, FaPlay, FaHeart, FaShare } from 'react-icons/fa'
import { BsFillShareFill, BsThreeDotsVertical } from 'react-icons/bs'
import { MusicPlayer } from './MusicPlayer'
import { useParams } from 'react-router-dom'
import { Songs } from "./Songs"
import { HollywoodSongs } from './HollywoodSongs'
import { InstrumentalSongs } from './InstrumentalSongs'
import { BiSearchAlt } from 'react-icons/bi'

export default function ArtistSong() {
    const params = useParams();
    const ArtistName = params.artistName;

    const [searchQuery, setSearchQuery] = useState("");
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

    const filterSongs = (Songs, query) => {
        const searchTerms = query.toLowerCase().split(" ");
        return Songs.filter(song =>
            searchTerms.some(term =>
                song.artist.toLowerCase().includes(term)
            )
        )
    };

    const allSongs = Songs.concat(HollywoodSongs, InstrumentalSongs);
    const filteredSongs = filterSongs(allSongs, ArtistName);
    return (
        <div className='AudioList SongsDescription-container'>
            <div className='songsContainer'>
                <div className="search-bar">
                    <Link to="/search"><input type="text" placeholder='Search..' /></Link>
                    <i>
                        <BiSearchAlt />
                    </i>
                </div>
                <div className="discover-container">
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
            </div>
            <MusicPlayer index={index} genre={genre} songName={songName} />
        </div>
    )
}
