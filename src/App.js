import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exactpath="/" component={Home} />
                <Route path="/visites" component={Tours} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
