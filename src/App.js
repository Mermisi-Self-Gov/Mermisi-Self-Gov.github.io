import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

// import About from './pages/About'
import Archive   from './pages/Archive'
import Article   from './pages/Article'
import Newspaper from './pages/Newspaper'
import Project   from './pages/Project'
import Resources from './pages/Resources'

import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function updateArticles(setArticles) {
  return (() => {
    fetch(`${window.location.origin}/articles.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setArticles(oldData => result)
      }
    )
  })
}
function updateProjects(setProjects) {
  return (() => {
    fetch(`${window.location.origin}/projects.json`)
    .then(res => res.json())
    .then(
      (result) => {
        let tagset  = [...new Set([].concat(...result.map(project => project.tags)))]
        let tagdict = {}
        for (let i = 0; i < tagset.length; i++)
          tagdict[tagset[i]] = i 
        result.forEach((proj) => {
          proj.taghash = proj.tags.reduce((acc, cur) => acc + 2**tagdict[cur], 0)
        })
        setProjects(oldData => [result, tagset, tagdict])
      }
    )
  })
}
function updateResources(setResources) {
  return (() => {
    fetch(`${window.location.origin}/resources.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setResources(oldData => result)
      }
    )
  })
}

function App() {

  const [ articles,   setArticles  ] = useState([])
  const [ projects,   setProjects  ] = useState([[], [], []])
  const [ resources,  setResources ] = useState([])
  const [ clickNum,   setClickNum  ] = useState(0)
  const [ userMode,   setUserMode  ] = useState(false)

  useEffect(() => {
    const articles_local  = window.localStorage.getItem('ARTICLES');
    const projects_local  = window.localStorage.getItem('PROJECTS');
    const resources_local = window.localStorage.getItem('RESOURCES');
    if ( articles_local  !== null ) setArticles (JSON.parse(articles_local ));
    if ( projects_local  !== null ) setProjects (JSON.parse(projects_local ));
    if ( resources_local !== null ) setResources(JSON.parse(resources_local));
    updateArticles(setArticles  )()
    updateProjects(setProjects  )()
    updateResources(setResources)()
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('ARTICLES', JSON.stringify(articles));
  }, [ articles ])

  useEffect(() => {
    window.localStorage.setItem('PROJECTS', JSON.stringify(projects));
  }, [ projects ])

  useEffect(() => {
    window.localStorage.setItem('RESOURCES', JSON.stringify(resources));
  }, [ resources ])
  
  return (
    <div className="App" style={{scrollBehavior:"smooth"}}>
      <NavigationBar 
        userMode    = {userMode} 
        setUserMode = {setUserMode} 
        articles    = {articles} 
        projects    = {projects} 
        resources   = {resources[0]}
        clickNum    = {clickNum}
        setClickNum = {setClickNum}
      />
      <Routes>
        <Route exact path="/"
          element={<Newspaper 
            mode     = {userMode} 
            clickNum = {clickNum}  
            data     = {articles} 
            update   = {updateArticles(setArticles)}
          />}
        />
        <Route exact path="/newspaper"
          element={<Newspaper 
            mode     = {userMode} 
            clickNum = {clickNum}
            data     = {articles} 
            update   = {updateArticles(setArticles)}
          />}
        />
        <Route exact path="/archive"
          element={<Archive
            mode     = {userMode}
            clickNum = {clickNum}
            data     = {projects}
            update   = {updateProjects(setProjects)}
          />}
        />
        <Route exact path="/resources"
          element={<Resources
            mode     = {userMode}
            clickNum = {clickNum}
            data     = {resources}
            update   = {updateResources(setResources)}
          />}
        />
        <Route exact path="/archive/:id"
          element={<Project
            mode     = {userMode}
            clickNum = {clickNum}
            data     = {projects}
            update   = {updateProjects(setProjects)}
          />}
        />
        <Route exact path="/newspaper/:id"
          element={<Article
            mode     = {userMode}
            clickNum = {clickNum}
            data     = {articles}
            update   = {updateArticles(setArticles)}
          />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
