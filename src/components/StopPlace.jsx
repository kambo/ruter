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
  stopPlace(id: "NSR:StopPlace:5994") {
    id
    name
    
    estimatedCalls(startTime:"${time}" timeRange: 72100, numberOfDepartures: 5, omitNonBoarding: true) {     
      aimedArrivalTime
      aimedDepartureTime
      expectedArrivalTime
      expectedDepartureTime
      realtime
      date
      forBoarding
      forAlighting
      destinationDisplay {
        frontText
      }
      
      quay {
        id
      }
      serviceJourney {
        directionType
        journeyPattern {
          line {
            id
            name
            transportMode
            
          }
        }
      }
    }
  }
}`;

	const headers = {
		headers: {
			'ET-Client-Name': 'demo-app',
		},
		accept: 'application/json',
	};

	return (
		<Query query={OPPSAL_QUERY} context={headers}>
			{({loading, error, data}) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;

				return (
					<div className="stop-place">
						<h1>{data.stopPlace.name}</h1>
						<h4>Retning sentrum</h4>
						<ul>
							{data.stopPlace.estimatedCalls.filter(call => (call.destinationDisplay.frontText === 'Kolsås')).map(call => (
								<DepartureTime key={shortId.generate()} dateTimeISOString={call.expectedDepartureTime} />
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