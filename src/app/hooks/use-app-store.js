/**
 * @author Noman Farooq <nomanfarooq1432@gmail.com>
 */

import React, { useContext } from 'react';

// Reducer
import { StoreContext } from './../store/reducers';

// Reducer
import { APP_LOADING, SET_PAGE } from './../store/action-types';

/**
 * @typedef {Object} StoreActions
 * @property {function(state): void} setLoading - Change loading state
 * @property {function(step, data): void} updateStepData - Update step data
 * @property {function(step): void} setStep - Set a step name
 */

/**
 * A hook to access reducers store
 * @return {[TeleHealthInitialState, function({action: string, payload: any}): void, StoreActions]}
 */
export default function useAppStore () {
	const {store, dispatch} = useContext(StoreContext);
	
	const actions = {
		setLoading ( state = false ) {
			dispatch({type: APP_LOADING, payload: state});
		},
		setPage ( name ) {
			dispatch({type: SET_PAGE, payload: name});
		},
	};
	
	return [
		store,
		dispatch,
		actions,
	];
}
