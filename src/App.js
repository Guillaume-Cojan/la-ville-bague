import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visites" component={Tours} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
