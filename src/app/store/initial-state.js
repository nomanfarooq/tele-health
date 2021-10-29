/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */


import { PAGE_DASHBOARD } from './utils/page';

/**
 * @typedef {Object} TeleHealth
 * @property {boolean} init - App initialized or not
 * @property {boolean} loading - Loading state
 * @property {string|null} error - Global application error
 * @property {string} page - Page name
 */

/**
 * Get reducer initial state
 * @return {TeleHealth}
 */
export default function initialState () {
	return {
		init: false,
		loading: true,
		error: null,
		page: PAGE_DASHBOARD,
	};
}
