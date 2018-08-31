import React from 'react';
import { Query } from 'react-apollo';
import shortId from 'shortid'
import DepartureTime from './DepartureTime';
import './Trip.css';


const Trip = ({query, time, minutes}) => {
	const headers = {
		headers: {
			'ET-Client-Name': 'demo-app',
		},
		accept: 'application/json',
	};

	return (
		<Query query={query} context={headers} fetchPolicy="network-only" notifyOnNetworkStatusChange={false} pollInterval={0} ssr={false} variables={{time: time}}>
			{({loading, error, data}) => {
				if (loading) return <p>Laster...</p>;
				if (error) return <p>Feil :(</p>;

				return (
					<div className="stop-place">
						<h1>{data.trip.fromPlace.name}</h1>
						<ul>
							{
								data.trip.tripPatterns.map(trip => (
								<DepartureTime key={shortId.generate()} fromEstimatedCall={trip.legs.map(leg => leg.fromEstimatedCall)} minutes={minutes} />
							))
							}

						</ul>
					</div>
				);
			}}
		</Query>
	)
};

export default Trip;