import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import Horizontal from './components/Horizontal'
import Move from './components/Move'
import Beams from './components/Beams'
import { images } from './components/images'
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import './App.css';
 
const FIRST_INDEX = 0
function App() {
  const [index, setIndex] = React.useState(FIRST_INDEX)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(FIRST_INDEX);
      } else {
        setIndex(index + 1)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [index])
  return (
    <div className="App">
      {Horizontal('MONSOON III', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://i.vimeocdn.com/video/595198868_505x160.jpg')}
      {Beams('BEAMS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://i.vimeocdn.com/video/589972810_530x315.jpg')}
      {Move('MOVE 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://i.vimeocdn.com/video/590587169_530x315.jpg')}
      <br/>
      <Gallery
        index={index}
        onRequestChange = {i => {
          setIndex(i);
        }}
      > 
        {images.map(image => (
          <GalleryImage objectFit ="cover" src = {image}/>
          ))}
      </Gallery>
      <br/>
    </div>
  );
}
export default App;
