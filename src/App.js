import './App.css';
import {Route,Switch} from 'react-router-dom'

import Landing from './components/landing/index'
import Movie from './components/movie/index'
import SignUp from './components/signup/index'
import SignIn from './components/signin/index'


import {auth, firestore} from './config/firebase'
import React, {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState('')
  useEffect(()=>{
    auth.onAuthStateChanged(async (userData)=>{
      if(userData){
        const profile = await firestore.collection('users').doc(userData.uid).get();
        if(profile.exists){
          setUser(profile.data().fullname);
          // console.log (profile.data());

        }
      }else{
        setUser('');
      }

    })
  },[])

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('uid')
  }
  return (
    
      <div>
          <Switch>
            <Route exact path='/'>
              <Landing/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route path='/signin'>
              <SignIn/>
            </Route>
          </Switch>
          <Route path='/movie'>
            <Movie displayName={user} handleLogout={handleLogout}/>
          </Route>
        
        
      </div>
  );
}

export default App;


