import React from 'react';
import Nav from './nav.jsx';
import DataPicker from './dataPicker.jsx';
import Calendar_my from './calendar.jsx';

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';


class App extends React.Component {
    render () {
        return (
            <HashRouter>
                <div >
                    <Nav/>
                    <DataPicker />
                    {/* <Calendar_my/> */}
                </div>
            </HashRouter>
        )
    }
}

export default App;