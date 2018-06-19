import React from 'react';
import { Query } from 'react-apollo';
import shortId from 'shortid'
import DepartureTime from './DepartureTime';
import './Trip.css';


const Trip = ({query, time}) => {
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
								data.trip.tripPatterns.map(call => (
								<DepartureTime key={shortId.generate()} dateTimeISOString={call.startTime} />
							)).reverse()
							}

						</ul>
					</div>
				);
			}}
		</Query>
	)
};

export default Trip;