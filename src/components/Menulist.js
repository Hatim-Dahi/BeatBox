import { BsFillHouseFill, BsJournalAlbum } from 'react-icons/bs';
import { BiPulse } from 'react-icons/bi';
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from 'react-icons/fa';

const Menulist = [
    {
        id: 1,
        icon: <BsFillHouseFill />,
        name: "Home",
        navi: "/home"
    },
    
    {
        id: 2,
        icon: <FaMicrophoneAlt />,
        name: "Top Artist",
        navi: "/artist"
    },
    {
        id: 3,
        icon: <FaPodcast />,
        name: "Podcast",
        navi: "/podcasts"
    },
    
]

export {Menulist};