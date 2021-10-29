/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React, { createContext } from 'react';

import {
	APP_INIT, APP_LOADING, APP_ERROR, SET_PAGE
	
} from './action-types';

// Context
// will be used to pass down the dispatch method and our
// application state via the Context Provider and consumed
// in child components using the useContext Hook
export const StoreContext = createContext(null);

export const reducer = ( state, action ) => {
	const {type, payload} = action;
	
	switch ( type ) {
		case APP_ERROR: {
			return {...state, error: payload};
		}
		
		case APP_INIT: {
			if ( state.init ) {
				throw new Error('Cannot initialize application twice');
			}
			return {...state, init: payload};
		}
		
		case APP_LOADING: {
			return {...state, loading: payload};
		}
		
		case SET_PAGE: {
			return {...state, page: payload};
		}
		
		default: {
			// helps us avoid typos!
			throw new Error(`Unhandled action type: "${action.type}"`);
		}
	}
};
