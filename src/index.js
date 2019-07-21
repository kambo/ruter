import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Settings } from 'luxon';

import './index.css';
import App from './App';
import { unregister} from './registerServiceWorker';

Settings.defaultLocale = 'nn';

const client = new ApolloClient({
	uri: "https://api.entur.io/journey-planner/v2/graphql",
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>
	, document.getElementById('root'),
);
unregister();