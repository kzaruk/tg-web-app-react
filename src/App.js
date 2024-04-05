import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
  const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index={true} element={<ProductList/>}/>
            <Route path={'form'} element={<Form/>}/>
            <Route path={'*'} element={<ProductList/>}/>
        </Routes>
      {/*<button onClick={onToggleButton}>toggle</button>*/}
    </div>
  );
}

export default App;
