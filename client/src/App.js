import {useEffect} from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.scss'


const App = () => {
    useEffect(() => {
        // throw new Error('test mistake')
    },[])

    return (
        <>
            <Header/>
            <MainRoutes/>
            {/*<Footer/>*/}
        </>
    );
}

export default App
