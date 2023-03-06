import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';
import AxiosCrypto from './components/AxiosCrypto';
import UseEffectAxiosCrypto from './components/UseEffectAxiosCrypto';

function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <AxiosCrypto/> */}
      <UseEffectAxiosCrypto/>
    </div>
  );
}

export default App;
