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
import Company from "./components/Company";
import Construction from "./components/Construction";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visites_guidees" component={Tours} />
                <Route path="/receptions" component={Receptions} />
                <Route path="/location_gites.html" component={Cottages} />
                <Route path="/evenements" component={Events} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/compagnie_indes" component={Company} />
                <Route path="/construction_malouinieres" component={Construction} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
