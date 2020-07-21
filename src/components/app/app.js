import React from 'react'
import MainPage from '../main-page';
import MapPage from '../order-pages/map-page';
import ModelPage from '../order-pages/model-page';
import ExtraPage from '../order-pages/extra-page';
import FinalPage from '../order-pages/final-page';
import '../../styles/style.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/need-for-drive" component={MainPage}/>
                    <Route path="/order/map" component={MapPage}/>
                    <Route path="/order/model" component={ModelPage}/>
                    <Route path="/order/extra" component={ExtraPage}/>
                    <Route path="/order/final" component={FinalPage}/>
                    <Redirect from="/" to="/need-for-drive"/>
                </Switch>
            </Router>
        </div>
    )
}

export default App