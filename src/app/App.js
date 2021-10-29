/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Reducers
import { StoreContext, reducer } from './store/reducers';
import getInitialState from './store/initial-state';
import { APP_INIT, APP_LOADING, APP_ERROR } from './store/action-types';

// Components
import AppLoader from './components/app/AppLoader';
import AppError from './components/app/AppError';
import Layout from './components/Layout';

const TeleHealth = () => {
	return (
		<div>
			<h1>Let Start...</h1>
		</div>
	);
};

export default TeleHealth;
