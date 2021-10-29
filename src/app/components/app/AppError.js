/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

/** AppError functional component */
function AppError ( props = {} ) {
	return (
		<div style={{width: '60%', margin: '40px auto'}}>
			<Alert variant="warning">
				<div className="alert-icon">
					<i className="flaticon-warning" style={{fontSize: '1.8rem'}}/>
				</div>
				<div className="alert-text">{props.message}</div>
			</Alert>
		</div>
	);
}

// Properties validation
AppError.propTypes = {
	message: PropTypes.string.isRequired,
};

// Default properties
AppError.defaultProps = {
};

export default AppError;
