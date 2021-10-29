import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const Topbar = ( {theme} ) => {
	return (
		<>
			<div className={cn('th--topbar', {'light': theme === 'light'})}>
				<Container>
					<Navbar bg="transparent" expand="lg">
						{/*<Navbar.Brand href="/">
							<img src="" alt="TeleHealth"/>
						</Navbar.Brand>*/}
						<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto mr-2 align-items-center">
								<Nav.Link className="th--notify">
									<span>Icon</span>
									<span className="badge">2</span>
								</Nav.Link>
								<div className="d-flex flex-nowrap align-items-center">
									<div className="th--technician-profile">
										<img src="" alt=""/>
									</div>
									<NavDropdown title="Noman" className="ml-auto" id="">
										{/*<NavDropdown.Item href={'#'}>My Profile</NavDropdown.Item>
                    						<NavDropdown.Divider/>*/}
										{/*<NavDropdown.Item href={'#'} strokeLinecap
											onClick={e => {
												e.preventDefault();
												Auth.logout().then(() => {
													window.location.href = '/';
												});
											}}
										>Logout</NavDropdown.Item>*/}
									</NavDropdown>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</div>
		</>
	);
};

Topbar.propTypes = {
	theme: PropTypes.oneOf(['dark', 'light']),
};

// Default properties
Topbar.defaultProps = {
	theme: 'light',
};

export default React.memo(Topbar);
