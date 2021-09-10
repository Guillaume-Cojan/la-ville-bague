import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Receptions from "./components/Receptions";
import Cottages from "./components/Cottages";
import Events from "./components/Events";
import Contacts from "./components/Contacts";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visites" component={Tours} />
                <Route path="/receptions" component={Receptions} />
                <Route path="/gites" component={Cottages} />
                <Route path="/evenements" component={Events} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
