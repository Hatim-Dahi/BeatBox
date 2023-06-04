import React from 'react'
import artist_img from '../images/artist1.jpg'
import { FaEllipsisH , FaHeadphones, FaCheck} from 'react-icons/fa'

export default function Banner() {
    return (
        <div className='banner'>
            <img src={artist_img} alt="" className='bannerImg' />
            <div className="content">
                <div className="breadCrump">
                    <p>
                        Home <span>/popular artist</span>
                    </p>
                    <i>
                        <FaEllipsisH />
                    </i>
                </div>

                <div className="artist">
                    <div className="left">
                        <div className="name">
                            <h2>A-Ha</h2>
                            <img src="" alt="" />
                        </div>
                        <p><i><FaHeadphones /></i>
                            11,184,1811 <span>Monthly Listners</span>
                        </p>
                    </div>
                    <div className="right">
                        <a href="/">Play</a>
                        <a href="/">
                            <i>
                                <FaCheck />
                            </i>
                            Following
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
