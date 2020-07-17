import React from 'react'
import MainPage from '../main-page';
import MapPage from '../order-pages/map-page';
import ModelPage from '../order-pages/model-page';
import ExtraPage from '../order-pages/extra-page';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Route path="/need-for-drive" component={MainPage}/>
            <Route path="/order/map" component={MapPage}/>
            <Route path="/order/model" component={ModelPage}/>
            <Route path="/order/extra" component={ExtraPage}/>
        </Router>
    )
}

export default App