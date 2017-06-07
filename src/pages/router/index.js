import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Link, Switch, IndexRoute, Router } from 'react-router-dom';
import AddBusinessTime from './../add-business-time/index.js';
import PickDay from './../pick-day/index.js';
import SelectSeason from './../select-season/index.js';

// ReactDOM.render((
//    <HashRouter>
//       <div>
//         <Route exact path="/" component={AddBusinessTime} />
//         <Route path="/pickday" component={PickDay} />
//       </div>
//    </HashRouter>
// ), document.getElementById( 'app' ) )


function getBaseUrl() {
    let path = location.pathname || '';
    return path.indexOf('.') > 0 ? path.substring(0, path.lastIndexOf('/')) : path;
}

let basePath = getBaseUrl();


// ReactDOM.render((
//    <BrowserRouter basename={basePath}>
//       <div>
//         <Route path='/' component={AddBusinessTime} />
//         <Route path='/pickday' component={PickDay} />
//       </div>
//    </BrowserRouter>
// ), document.getElementById( 'app' ) )

ReactDOM.render((
    <BrowserRouter basename={basePath}>
        <Switch>         
            <Route path="/pickday" component={PickDay}/>
            <Route path="/season" component={SelectSeason}/>
            <Route path="/" component={AddBusinessTime}/>
        </Switch>
    </BrowserRouter>
), document.getElementById( 'app' ) )





