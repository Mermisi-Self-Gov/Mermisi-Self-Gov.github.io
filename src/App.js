import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import About from './pages/About'
import Archive from './pages/Archive'
import Article from './pages/Article'
import Newspaper from './pages/Newspaper'
import Project from './pages/Project'
import Resources from './pages/Resources'

import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [database, setDatabase] = useState([[], [], [], []])
  
  useEffect(() => {
    const data = window.localStorage.getItem('DATABASE');
    if ( data !== null ) setDatabase(JSON.parse(data));
    
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/projects.json`)
    .then(res => res.json())
    .then(
      (result) => {
        let tagset = [...new Set([].concat(...result.map(project => project.tags)))]
        setDatabase(oldData => [oldData[0], result, tagset, oldData[3]])
      }
    )
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/articles.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setDatabase(oldData => [result, oldData[1], oldData[2], oldData[3]])
      }
    )
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/activities.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setDatabase(oldData => [oldData[0], oldData[1], oldData[2], result])
      }
    )
  }, []);

  useEffect(() => {
    window.localStorage.setItem('DATABASE', JSON.stringify(database));
  }, [database])

  return (
    <div className="App" style={{scrollBehavior:"smooth"}}>
      <NavigationBar/>
      <Routes>
        <Route exact path="/"            element={<Newspaper database={database} setDatabase={setDatabase}/>}/>
        <Route exact path="/newspaper"   element={<Newspaper database={database} setDatabase={setDatabase}/>}/>
        <Route exact path="/archive"     element={<Archive   database={database} setDatabase={setDatabase}/>}/>
        <Route exact path="/resources"   element={<Resources database={database} setDatabase={setDatabase}/>}/>
        <Route exact path="/article/:id" element={<Article/>}/>
        <Route exact path="/project/:id" element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
