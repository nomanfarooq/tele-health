/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Topbar from './../components/layout/Topbar';
import SideMenu from './../components/layout/SideMenu';
import Dashboard from './../components/pages/Dashboard';
import ThankyouTech from './../components/pages/ThankyouTech';
import OrderHistory from './../components/pages/OrderHistory';
import ActiveOrders from './../components/pages/ActiveOrders';
import Payments from './../components/pages/Payments';
import PersonalDetails from './../components/pages/PersonalDetails';
import Services from './../components/pages/Services';

// Hooks
import useAppStore from './../hooks/use-app-store';
// Hooks
import * as Page from './../store/utils/page';

/** Layout functional component */
function Layout () {
	const [{page}] = useAppStore();
	
	return (
		<div className="mrmh-technician-dashboard">
			<Topbar/>
			<div className="mrmh-page-content">
				{/*Need to uncomment TODO://*/}
				{/*<SideMenu/>*/}
				<Container>
					<div className="mrmh-content-wrapper">
						{page === Page.PAGE_THANK_YOU && <ThankyouTech/>}
						{page === Page.PAGE_DASHBOARD && <Dashboard/>}
						{page === Page.PAGE_ORDER_HISTORY && <OrderHistory/>}
						{page === Page.PAGE_ACTIVE_ORDERS && <ActiveOrders/>}
						{page === Page.PAGE_PAYMENT && <Payments/>}
						{page === Page.PAGE_PERSONAL_DETAILS && <PersonalDetails/>}
						{page === Page.PAGE_SERVICES && <Services/>}
					</div>
				</Container>
			</div>
		</div>
	);
}

export default React.memo(Layout);
