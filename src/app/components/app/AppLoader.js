/**
 * @author Noman Farooq <nomanfarooq@gmail.com>
 */

import React from 'react';

/** AppLoader functional component */
function AppLoader () {
	return (
		<>
			<div className="mx-auto" style={{textAlign:'center', height:'800px'}}>
				<span className="lds-ring">
					<div></div>
				</span>
			</div>
		</>
	);
}

export default AppLoader;
