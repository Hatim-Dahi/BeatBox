import React, { useEffect } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaRegHeart, FaPlay, FaHeart, FaShare } from 'react-icons/fa'
import { BsFillShareFill, BsThreeDotsVertical } from 'react-icons/bs'
import { MusicPlayer } from './MusicPlayer'
import { useParams } from 'react-router-dom'
import { Songs } from "./Songs"
import { HollywoodSongs } from './HollywoodSongs'
import { InstrumentalSongs } from './InstrumentalSongs'

export default function Allsongs() {
    const params = useParams();
    const id = params.id;
    const param2 = params.genre;
    const SingleSongName = params.songName;
    
    const [artist, setArtist] = useState('');
    const [singleMoiveName, setsingleMoiveName]=useState('');
    const [Singlegenre, SetSinglegenre] = useState(param2);
    const [isLove, setLove] = useState(false);
    const [genre, setGenre] = useState('');
    const [songName, setSongName] = useState('');
    const [index, setIndex] = useState(id);
    const [auto, setAuto] = useState(false);
    const [singleSongName, setsingleSongName] = useState('');
    const [songsList, setSongsList] = useState([]);

    const changeSongLove = () => {
        setLove(!isLove);
    };

    useEffect(() => {
        SetSinglegenre(param2);
        if (Singlegenre === 'hollywood') {
            setsingleSongName(HollywoodSongs[id]);
            setsingleMoiveName(HollywoodSongs[id].movieName);
            setSongsList(HollywoodSongs);
            setArtist(HollywoodSongs[id].artist);
        } else if (Singlegenre === 'instrumental') {
            setsingleSongName(InstrumentalSongs[id]);
            setsingleMoiveName(InstrumentalSongs[id].movieName);
            setSongsList(InstrumentalSongs);
            setArtist(InstrumentalSongs[id].artist);
        } else {
            setsingleSongName(Songs[id]);
            setsingleMoiveName(Songs[id].movieName);
            setSongsList(Songs);
            setArtist(Songs[id].artist);
        }
        console.log("hiiiiiiii"+singleMoiveName);
    }, [param2, id]);


    function setMainSong(index, genre, songName) {
        setIndex(index || 0);
        setGenre(genre || '');
        setSongName(songName || "");
        setAuto(true);
    }


    const filterSimilarSongs = (Songs, query, moviename) => {
        const searchTerms = query.toLowerCase().split(" ");
        return Songs.filter(song =>
            searchTerms.some(term =>
                song.SongName.toLowerCase().includes(term) ||
                song.artist.toLowerCase().includes(term) ||
                song.movieName.toLowerCase().includes(moviename) 
            )
        )
    };
    const similarSongs = filterSimilarSongs(songsList, artist, singleMoiveName);
    
    
    return (
        <div className='AudioList SongsDescription-container'>
            <div className='songsContainer'>
                <div className="discover-container">
                    <div className="description-head">
                        <div className="description-img">
                            <img src={singleSongName.img_src} alt="" />
                        </div>
                        <div className="description-details">
                            <h2>{singleSongName.SongName}</h2>
                            <p>{singleSongName.artist}</p>
                            <div className="icons">
                                <div className="play-button" onClick={() => setMainSong(id, Singlegenre, SingleSongName)}>
                                    play
                                </div>
                                <div className="icons">
                                    <i>
                                        <FaHeart />
                                    </i>
                                </div>
                                <div className="icons">
                                    <i>
                                        <BsFillShareFill />
                                    </i>
                                </div>
                                <div className="icons">
                                    <i>
                                        <BsThreeDotsVertical />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discover-boxes">
                        <h2>Similar Songs</h2>
                        {similarSongs && similarSongs.filter((song) => song.SongName !== SingleSongName).map((song, index) => {
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
