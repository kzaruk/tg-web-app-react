import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const BASE_URL = 'https://steady-parfait-5284bb.netlify.app'
function App() {
  const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={BASE_URL} element={<ProductList/>}/>
            <Route path={BASE_URL +'/form'} element={<Form/>}/>
        </Routes>
      {/*<button onClick={onToggleButton}>toggle</button>*/}
    </div>
  );
}

export default App;
