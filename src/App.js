import './App.css';
import Leftmenu from './components/Leftmenu';
import { RightMenu } from './components/RightMenu';
import Middlemenu from './components/Middlemenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Switch } from "react-router-dom";
import Notfound from './components/Notfound';
import Artist from './components/Artist';
import Podcasts from './components/Podcasts';
import SongsDescription from './components/SongDescription';
import Search from './components/Search';
import Different_types from './components/Different_types';
import ArtistSong from './components/ArtistSong';


function App() {
  function PageLayout() {
    return (
      <>
        <Leftmenu />
        <Middlemenu />
        <RightMenu />
      </>
    );
  }
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<PageLayout />} />
          <Route path="/home" element={<PageLayout />} />
          <Route path='/:genre/:id/:songName' element={
            <>
              <Leftmenu />
              <SongsDescription />
              <RightMenu />
            </>
          }>
          </Route>
          <Route path='/:type' element={
            <>
              <Leftmenu />
              <Different_types />
              <RightMenu />
            </>
          }></Route>
          <Route path="/search" element={
            <>
              <Leftmenu />
              <Search />
              <RightMenu />
            </>
          }></Route>
        

          <Route path="/artist" element={
            <>
              <Leftmenu />
              <Artist />
              <RightMenu />
            </>

          } />

          <Route path='artist/:artistName' element={
            <>
              <Leftmenu />
              <ArtistSong />
              <RightMenu />
            </>
          }/>
            <Route path="/podcasts" element={
              <>
                <Leftmenu />
                <Podcasts />
                <RightMenu />
              </>

            } />

            <Route path='*' element={<Notfound />}></Route>
        </Routes>
        <div className="background"></div>
      </div>
    </Router>
  );
}

export default App;
