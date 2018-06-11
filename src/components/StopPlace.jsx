import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { DateTime } from 'luxon';
import shortId from 'shortid'
import DepartureTime from './DepartureTime';
import './StopPlace.css';


const StopPlace = () => {
	const time = DateTime.local().toString();

	const OPPSAL_QUERY = gql`{
  trip(from: {place:"NSR:StopPlace:5994"}, to: {place: "NSR:StopPlace:58366"}, modes:[metro], maximumTransfers:0, numTripPatterns:3, dateTime:"${time}") {
    fromPlace {
      name
    }
    tripPatterns {
      startTime    
    }
  }
}
`;

	const headers = {
		headers: {
			'ET-Client-Name': 'demo-app',
		},
		accept: 'application/json',
	};

	return (
		<Query query={OPPSAL_QUERY} context={headers}>
			{({loading, error, data}) => {
				if (loading) return <p>Laster...</p>;
				if (error) return <p>Feil :(</p>;

				return (
					<div className="stop-place">
						<h1>{data.trip.fromPlace.name}</h1>
						<h4>Retning sentrum</h4>
						<ul>
							{
								data.trip.tripPatterns.map(call => (
								<DepartureTime key={shortId.generate()} dateTimeISOString={call.startTime} />
							))
							}

						</ul>
					</div>

				);
			}}
		</Query>
	)
};

export default StopPlace;