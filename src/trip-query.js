import gql from 'graphql-tag';

const tripQuery = (time, fromPlace, toPlace) => (gql`{
  trip(from: {place:"${fromPlace}"}, to: {place: "${toPlace}"}, modes:[metro], maximumTransfers:0, numTripPatterns:3, dateTime:"${time}") {
    fromPlace {
      name
    }
    tripPatterns {
      legs {      
        fromEstimatedCall {
          realtime
          expectedArrivalTime
          aimedArrivalTime
        }
      }    
    }
  }
}
`);

export default tripQuery;

