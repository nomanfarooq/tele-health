import React from 'react';
import cn from 'classnames';

// Hooks
import useAppStore from './../../hooks/use-app-store';

// Reducers
import * as Page from './../../store/utils/page';

const SideMenu = () => {
	const [{page}, dispatch, {setPage}] = useAppStore();
	
	return (
		<>
			<div className="th--side--menu sidebar-dark">
				<div className="d-md-block sidebar collapse">
					<div className="sidebar-content">
						<ul className="nav flex-column">
							
							<li className="nav-item">
								<a className={cn('nav-link', {'nav-active': page === Page.PAGE_DASHBOARD})}
									aria-current="page" href="#"
									onClick={e => {
										e.preventDefault();
										setPage(Page.PAGE_DASHBOARD);
										
									}}>
									<span data-feather="dashboard"/>
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M9 22V12h6v10" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</a>
							</li>
							
							<li className="nav-item">
								<a className={cn('nav-link', {'nav-active': page === Page.PAGE_SCHEDULER})}
									href="#" onClick={e => {
									e.preventDefault();
									setPage(Page.PAGE_SCHEDULER);
								}}>
									<span data-feather="file"/>
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.862 7.381H21.39a1.566 1.566 0 100-3.132H8.862a1.566 1.566 0 000 3.132zm-6.265-3.12a1.566 1.566 0 10.025 3.132 1.566 1.566 0 00-.025-3.132zm18.793 6.252H8.862a1.566 1.566 0 000 3.133H21.39a1.566 1.566 0 100-3.133zm-18.793 0a1.566 1.566 0 10.025 3.133 1.566 1.566 0 00-.025-3.133zm18.793 6.265H8.862a1.566 1.566 0 000 3.132H21.39a1.566 1.566 0 100-3.132zm-18.793 0a1.567 1.567 0 10.026 3.134 1.567 1.567 0 00-.026-3.134z"
											fill="#fff"/>
									</svg>
								</a>
							</li>
							
							<li className="nav-item">
								<a className={cn('nav-link', {'nav-active': page === Page.PAGE_PATIENTS})}
									href="#" onClick={e => {
									e.preventDefault();
									setPage(Page.PAGE_PATIENTS);
								}}>
									<span data-feather="shopping-cart"/>
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M17.872 14.212h0c.168 0 .336.01.502.03V5.108a1.927 1.927 0 00-1.923-1.924H5.14a1.927 1.927 0 00-1.923 1.923v12.207a1.927 1.927 0 001.924 1.923h8.52a4.106 4.106 0 01-.068-.751m4.278-4.274l-4.278 4.274m4.278-4.274a4.28 4.28 0 00-4.278 4.274m4.278-4.274l-4.278 4.274m8.556 0v0a4.287 4.287 0 00-2.345-3.814V5.107v0a3.356 3.356 0 00-3.354-3.354h0H5.14h0a3.357 3.357 0 00-3.354 3.354v12.207h0a3.357 3.357 0 003.355 3.354h9.051a4.278 4.278 0 007.957-2.182zm-3.862-.565v.15h1.024a.415.415 0 010 .83h-1.44a.416.416 0 01-.415-.415v-1.655a.415.415 0 11.83 0v1.09zM16.003 6.743a.715.715 0 00-.506-1.222H6.096a.715.715 0 100 1.431h9.401c.19 0 .372-.075.506-.21zm-.506 2.096H6.096a.715.715 0 000 1.43h9.401a.716.716 0 000-1.43zm0 3.315H6.096a.716.716 0 000 1.431h9.401a.716.716 0 000-1.43zm-2.634 3.318H6.096a.715.715 0 100 1.43h6.767a.716.716 0 000-1.43z"
											fill="#fff" stroke="#fff"/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideMenu;
