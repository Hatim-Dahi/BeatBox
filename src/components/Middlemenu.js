import React from 'react'
import '../styles/middlemenu.css'
import Banner from './Banner'
import { FaUser } from 'react-icons/fa'
import AudioList from './AudioList'
import { MusicPlayer } from './MusicPlayer'
import { Link } from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
export default function Middlemenu() {
  return (
    <div className="mainContainer"> 
      <AudioList/>
    </div>
  )
}
