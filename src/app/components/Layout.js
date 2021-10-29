/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Topbar from './../components/layout/Topbar';
import SideMenu from './../components/layout/SideMenu';
import Dashboard from './../components/pages/Dashboard';
import Scheduler from './../components/pages/Scheduler';
import Patients from './../components/pages/Patients';

// Hooks
import useAppStore from './../hooks/use-app-store';

// Pages
import * as Page from './../store/utils/page';

/** Layout functional component */
function Layout () {
	const [{page}] = useAppStore();
	
	return (
		<div className="th--page">
			<div className="th--page--content">
				<SideMenu/>
				<Container fluid={true}>
					{/*<Topbar/>*/}
					<div className="th--content--wrapper">
						{page === Page.PAGE_DASHBOARD && <Dashboard/>}
						{page === Page.PAGE_SCHEDULER && <Scheduler/>}
						{page === Page.PAGE_PATIENTS && <Patients/>}
					</div>
				</Container>
			</div>
		</div>
	);
}

export default React.memo(Layout);
