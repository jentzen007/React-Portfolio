import { useState } from 'react'
import './App.css'
import Header from './Header';
import Body from './Body';


function App() {
  const [section, setSection] = useState('About');

  return (
    <>
      <Header setSection={setSection}/>
      <Body section={section}/>
    </>
  )
}

export default App
