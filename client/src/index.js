import React, {lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {render} from "react-dom";
import "./index.css";
import Spinner from "./components/Spinner/spinner";
import {createBrowserHistory} from "history";


const Home = lazy(() => import("./pages/Home/Home.js"));


const history = createBrowserHistory();

function App() {
    return (
       <Suspense fallback={<Spinner/>}>
            <Switch history={history}>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
            </Switch>
       </Suspense>
    );
}

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);

