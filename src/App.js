import React, { Component } from 'react';
import './App.css';
import Trip from './components/Trip';
import { DateTime } from 'luxon';
import tripQuery from './trip-query'
import NoStyleButton from './components/button/NoStyleButton'

class App extends Component {
	constructor() {
		super();
		this.time = DateTime.local().toString();
		this.state = {
			minutes: false
		};
		this.toggleMinutes = this.toggleMinutes.bind(this);
	}

	toggleMinutes() {
		this.setState({
			minutes: !this.state.minutes
		});
	}

	render() {

		console.log(tripQuery(this.time, "NSR:StopPlace:5994", "NSR:StopPlace:58366"));
		return (
			<div className="App">
				<Trip query={tripQuery(this.time, "NSR:StopPlace:5994", "NSR:StopPlace:58366")} minutes={this.state.minutes}/>
				<Trip query={tripQuery(this.time, "NSR:StopPlace:58366", "NSR:StopPlace:5994")} minutes={this.state.minutes}/>
				<footer>
					<NoStyleButton onClick={this.toggleMinutes} text={'Minutes'} />
				</footer>
			</div>
		);
	}
}

export default App;
