/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React, { useReducer, useEffect } from 'react';

// Reducers
import { StoreContext, reducer } from './store/reducers';
import getInitialState from './store/initial-state';
import { APP_INIT, APP_LOADING, APP_ERROR } from './store/action-types';

// Components
import AppLoader from './components/app/AppLoader';
import AppError from './components/app/AppError';
import Layout from './components/Layout';

const App = () => {
	const [store, dispatch] = useReducer(reducer, getInitialState());
	useEffect(() => {
		(async () => {
			dispatch({type: APP_LOADING, payload: true});
			try {
				//:TODO
			} catch ( e ) {
				dispatch({type: APP_ERROR, payload: e.message});
			} finally {
				dispatch({type: APP_LOADING, payload: false});
				setTimeout(() => {
					dispatch({type: APP_INIT, payload: true});
				},1500);
			}
		})();
	}, []);
	
	return (
		<>
			<StoreContext.Provider value={{dispatch, store}}>
				{!store.init && <AppLoader/>}
				{store.init && (
					store.error ? <AppError message={store.error}/> : <Layout/>
				)}
			</StoreContext.Provider>
		</>
	);
};

export default App;
