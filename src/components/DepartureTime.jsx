import React from 'react';
import { DateTime } from 'luxon';
import './DepartureTime.css'

const DepartureTime = ({fromEstimatedCall, minutes}) => {
	const dateTime = DateTime.fromISO(fromEstimatedCall[0].expectedArrivalTime);


	const departureTime = () => {
		if (dateTime.hasSame(DateTime.local(), 'minute')) {
			return 'No'
		}
		return dateTime.toLocaleString(DateTime.TIME_SIMPLE);
	};

	const minutesToDeparture = () => dateTime.diff(DateTime.local(), 'minutes').toFormat('m');



	return (
		<li className='departure-time'>
			{minutes ? `${minutesToDeparture()} min` : departureTime()}
		</li>)
};

export default DepartureTime