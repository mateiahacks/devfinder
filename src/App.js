import React from 'react';
import { useState } from 'react';
import { BsBorderTop } from 'react-icons/bs';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Profile from './components/Profile';

function App() {
    const [light, setLight] = useState(true);
    const changeTheme = () => {
      let body = document.body;
      let stats = document.getElementsByClassName('stats')[0];
      let profile = document.getElementsByClassName('profile')[0];
      let search = document.getElementsByClassName('searchbar')[0];
      let input = document.getElementsByTagName("input")[0];
      let btn = document.getElementsByClassName("btn")[0];
      setLight(!light);
      if(light) {
        body.style.backgroundColor = "white";
        profile.style.backgroundColor = "white";
        stats.style.backgroundColor = "white";
        body.style.color = "#151d4d";
        input.style.backgroundColor = "white";
        search.style.backgroundColor = "white";
        btn.style.color = "white";
      } else {
        body.style.color = 'white'; 
        body.style.backgroundColor = "#151d4d";
        profile.style.backgroundColor = "#31419b";
        stats.style.backgroundColor = "#151d4d";
        body.style.color = "white";
        input.style.backgroundColor = "#31419b";
        search.style.backgroundColor = "#31419b";
        btn.style.color = "#151d4d";
      }
    
    };

    return (
      
      <div className="card">
          <Header onChange={changeTheme} isLight={light}/>
          <Profile />
      </div>
      
    );

}

export default App;
