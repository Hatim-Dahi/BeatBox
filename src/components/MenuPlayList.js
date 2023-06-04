import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { PlayList } from './PlayList';
import { Link } from 'react-router-dom';
function MenuPlayList() {
    return (
        <div className="play-List-container">
            <div className="name-container">
                <p>PlayList</p>
                <i><FaPlus /></i>
            </div>
            <div className="play-List-Scroll">
                <ul>
                    {
                        PlayList && PlayList.map((List) => (
                            <li key={List.id}>
                                {" "}
                                <Link to="/">
                                    <i className='musicNote'>
                                        <BsMusicNoteList />
                                    </i>
                                    <p className='playlist-name'>{List.name}</p>
                                    <i className='trash'>
                                        <BsTrash />
                                    </i>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export { MenuPlayList };