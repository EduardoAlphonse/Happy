import React from 'react';
import Routes from './routes';

import './styles/pages/landing.css';

interface TitleProps {
  text: String;
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <Routes />
  );
}

export default App;
