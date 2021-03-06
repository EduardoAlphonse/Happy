import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import RestrictedAccess from './pages/RestrictedAccess';
import SuccessPage from './pages/SuccessPage';
import Dashboard from './pages/Dashboard';
import Requests from './pages/Requests';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/app" component={OrphanagesMap} />
				<Route path="/orphanages/create" component={CreateOrphanage} />
				<Route path="/orphanages/:id" component={Orphanage} />
				<Route path="/access" component={RestrictedAccess} />
				<Route path="/success" component={SuccessPage} />
				<Route path="/dashboard/orphanages" component={Dashboard} />
				<Route path="/dashboard/requests" component={Requests} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;