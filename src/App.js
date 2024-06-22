
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';

function App() {
  useEffect(() => {
    const video = document.querySelector('.Background');

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      video.pause();
      video.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const video = document.querySelector('.Background');
    video.play().catch(() => {});
  }, []);

  return (
    <div className="App">
      <video className="Background" src={process.env.PUBLIC_URL + '/BGvid2.mp4'} autoPlay muted loop />
      <Header />
      <Form />
    </div>
  );
}

export default App;

