import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBusinessTime from './../add-business-time/index.js';
import PickDay from './../pick-day/index.js';
import SelectSeason from './../select-season/index.js';
import ReminderAddTime from './../reminder-add-time/container/reminder-add-time.js';
import BusinessTime from './../business-time/index.js';

// hash router
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


// remote service, BrowserRouter
ReactDOM.render((
    <BrowserRouter basename={basePath}>
        <Switch>
            <Route exact path="/" component={ReminderAddTime}/>
            <Route exact path="/add" component={AddBusinessTime}/>
            <Route path="/add/pickday" component={PickDay}/>
            <Route path="/add/season" component={SelectSeason}/>
            <Route path="/business-time" component={BusinessTime}/>
        </Switch>
    </BrowserRouter>
), document.getElementById( 'app' ) )

// local test BrowserRouter
// ReactDOM.render((
//     <BrowserRouter basename={'/main.html'}>
//         <Switch>
//             <Route exact path="/" component={ReminderAddTime}/>
//             <Route exact path="/add" component={AddBusinessTime}/>
//             <Route path="/add/pickday" component={PickDay}/>
//             <Route path="/add/season" component={SelectSeason}/>
//             <Route path="/business-time" component={BusinessTime}/>
//         </Switch>
//     </BrowserRouter>
// ), document.getElementById( 'app' ) )





