import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exactpath="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
