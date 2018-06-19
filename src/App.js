import React, { Component } from 'react';
import './App.css';
import Trip from './components/Trip';
import { DateTime } from 'luxon';
import tripQuery from './trip-query'

class App extends Component {
	constructor() {
		super();
		this.time = DateTime.local().toString();
	}

	render() {
		return (
			<div className="App">
				<Trip query={tripQuery(this.time, "NSR:StopPlace:5994", "NSR:StopPlace:58366")}/>
				<Trip query={tripQuery(this.time, "NSR:StopPlace:58366", "NSR:StopPlace:5994")}/>
			</div>
		);
	}
}

export default App;
