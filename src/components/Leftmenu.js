import React from 'react'
import '../styles/leftmenu.css'
import { BsSpotify } from 'react-icons/bs'
import { FaEllipsisH } from 'react-icons/fa'
import { Menulist } from './Menulist'
import { Menu } from './Menu'
import { MenuPlayList } from './MenuPlayList'
import {GiMusicSpell} from 'react-icons/gi'

export default function Leftmenu() {
  return (
    <div className="left-menu">
      <div className="logo-container">
        <i><GiMusicSpell /></i>
        <h2>BeatBoxx</h2>
        <i><FaEllipsisH /></i>
      </div>

      <Menu title={'Menu'} menuObj={Menulist} />
      <MenuPlayList />
    </div>
  )
}
