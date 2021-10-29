import React from 'react';
import cn from 'classnames';

// Hooks
import useAppStore from './../../hooks/use-app-store';

// Reducers
import * as Page from './../../store/utils/page';

//Components
import { Image } from 'react-bootstrap';

const SideMenu = () => {
	const [{page}, dispatch, {setPage}] = useAppStore();
	
	return (
		<>
			<div className="th--side--menu sidebar-dark">
				<div className="d-md-block sidebar collapse">
					<div>
						<Image src="https://picsum.photos/60"/>
					</div>
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
									<div className="d-flex flex-nowrap justify-content-start mx-4 align-items-center th--sidemenu--icon">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" y="7.11111" width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" width="7.11111" height="5.33333" fill="#1858C0"/>
											<rect y="10.6667" width="7.11111" height="5.33333" fill="#1858C0"/>
										</svg>
										<div className="mx-2">
											<span>Dashboard</span>
										</div>
									</div>
								</a>
							</li>
							
							<li className="nav-item">
								<a className={cn('nav-link', {'nav-active': page === Page.PAGE_SCHEDULER})}
									href="#" onClick={e => {
									e.preventDefault();
									setPage(Page.PAGE_SCHEDULER);
								}}>
									<span data-feather="file"/>
									<div className="d-flex flex-nowrap justify-content-start mx-4 align-items-center th--sidemenu--icon">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" y="7.11111" width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" width="7.11111" height="5.33333" fill="#1858C0"/>
											<rect y="10.6667" width="7.11111" height="5.33333" fill="#1858C0"/>
										</svg>
										<div className="mx-2">
											<span>Scheduler</span>
										</div>
									</div>
								</a>
							</li>
							
							<li className="nav-item">
								<a className={cn('nav-link', {'nav-active': page === Page.PAGE_PATIENTS})}
									href="#" onClick={e => {
									e.preventDefault();
									setPage(Page.PAGE_PATIENTS);
								}}>
									<span data-feather="shopping-cart"/>
									<div className="d-flex flex-nowrap justify-content-start mx-4 align-items-center th--sidemenu--icon">
										
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" y="7.11111" width="7.11111" height="8.88889" fill="#1858C0"/>
											<rect x="8.88892" width="7.11111" height="5.33333" fill="#1858C0"/>
											<rect y="10.6667" width="7.11111" height="5.33333" fill="#1858C0"/>
										</svg>
										<div className="mx-2">
											<span>Patients</span>
										</div>
									</div>
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
