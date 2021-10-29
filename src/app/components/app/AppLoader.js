/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */


import React from 'react';
import { Alert } from 'react-bootstrap';

/** AppLoader functional component */
function AppLoader () {
	return (
		<div style={{width: '60%', margin: '40px auto'}}>
			<Alert variant="light">
				<div className="alert-icon" style={{width: 33, height: 33}}>
					<div className="kt-spinner kt-spinner--lg kt-spinner--dark"/>
				</div>
				<div className="alert-text">Loading... Please wait!</div>
			</Alert>
		</div>
	);
}

export default AppLoader;
