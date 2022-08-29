import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import {UserDto} from "./classes/user.dto";
import Me from "./pages/Me";
import LoudspeakerPost from "./pages/LoudspeakerPost";
import SpeakerForum from "./pages/SpeakerForum";
import LoudspeakerForum from "./pages/LoudspeakerForum";

//objekt je tipa User
//začetna vrednost je new UserDto, ki pa ima neke vrednosti
function App() {
  const [user,setUser] = useState<UserDto>(new UserDto(0,'','',''));

  const currentUser = async () => {
    try {
      const res = await axios.get('http://localhost:8080/users/profile',
          {withCredentials: true});

      //pri setUser se sedaj pošljejo vsi podatki, ne samo user id
      if (res.status == 200) {
        console.log(res.data);
        setUser(res.data);
      }
    }
    catch (e) {

    }
  }

  //se požene takoj ko se stran prvič zažene
  //noter naredimo array funkcijo
  useEffect(() => {
    currentUser();
  },[]);

  //spodaj čez(Me) se morajo poslati podatki o userju
  //na komponento Me se pošljejo podatki o userju
  return (
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/create'} element={<CreatePost/>} />
            <Route path={'/loudspeaker'} element={<LoudspeakerPost/>} />
            <Route path={'/loudspeaker_forum'} element={<LoudspeakerForum/>} />
            <Route path={'/loudspeaker_posts'} element={<SpeakerForum/>} />
            <Route path={'/me'} element={<Me user={user}/>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
  );
}

export default App;