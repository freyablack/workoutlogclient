import React, { useEffect, useState } from 'react'
import Sitebar from './home/Navbar'
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
  //   : <Auth updateToken={updateToken}/>)
  // }


  return (
    <div>
      <Sitebar clearToken={clearToken}/>
      {/* {protectedViews()} */}
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;