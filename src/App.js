import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import Header3 from './components/Header3/Header3';

function App() {
  return (
    <div className="App">
      <Header3></Header3>
      <Header2></Header2>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
