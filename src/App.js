import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Main from '../src/components/UI/Main/Main'
import Info from '../src/components/Info/Info'

function App() {
  return (
    <div className="App">
        <Navbar />
          <div className='container'>
            <Main>
            </Main>
            <Info />
          </div>
    </div>
  );
}

export default App;
