import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { Settings } from 'luxon';

import './index.css';
import App from './App';
import { unregister} from './registerServiceWorker';

Settings.defaultLocale = 'nn';


const httpLink = createHttpLink({uri: "https://api.entur.org/journeyplanner/2.0/index/graphql"});

const client = new ApolloClient({
	uri: "https://api.entur.org/journeyplanner/2.0/index/graphql",
	link: httpLink,
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>
	, document.getElementById('root'),
);
unregister();