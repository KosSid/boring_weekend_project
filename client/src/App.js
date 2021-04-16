import logo from './logo.svg';
import classes from './App.scss';
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <MainRoutes/>
            <Footer/>
        </>
    );
}

export default App
