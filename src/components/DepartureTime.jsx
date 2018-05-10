import React from 'react';
import { DateTime } from 'luxon';
import './DepartureTime.css'

const DepartureTime = ({dateTimeISOString}) => {
	const dateTime = DateTime.fromISO(dateTimeISOString);

	const timeToDeparture = () => {
		if (dateTime.hasSame(DateTime.local(), 'minute')) {
			return 'Nå'
		}
		return DateTime.fromISO(dateTime).toLocaleString(DateTime.TIME_SIMPLE)
	};

	return (
		<li className='departure-time'>
			{timeToDeparture()}
		</li>)
};

export default DepartureTime