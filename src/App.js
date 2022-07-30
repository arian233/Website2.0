import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import { Content } from './components/Header';
import { Body } from './components/Body'
import { Footer } from './components/Footer'


function App() {
  return (
    <Router>
      <Home />
      <Content />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
