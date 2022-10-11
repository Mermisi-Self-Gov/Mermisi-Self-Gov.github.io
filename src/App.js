import './css/common.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import Archive from './pages/Archive'
import Article from './pages/Article'
import Newspaper from './pages/Newspaper'
import Project from './pages/Project'
import Resources from './pages/Resources'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello, World</h1>
      <Footer/>
    </div>
  );
}

export default App;
