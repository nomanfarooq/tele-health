import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Image } from 'react-bootstrap';

//Components
import DoctorInfo from './../elements/common/DoctorInfo';

//Utils
import { titleCase } from './../../store/utils/string';

const ListAltIcon = () => {
	return (
		<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect y="8.72728" width="4.36364" height="3.63636" fill="#1858C0"/>
			<rect y="4.36363" width="4.36364" height="3.63636" fill="#1858C0"/>
			<rect width="4.36364" height="3.63636" fill="#1858C0"/>
			<rect x="5.81818" y="8.72728" width="10.1818" height="3.63636" fill="#1858C0"/>
			<rect x="5.81818" y="4.36363" width="10.1818" height="3.63636" fill="#1858C0"/>
			<rect x="5.81818" width="10.1818" height="3.63636" fill="#1858C0"/>
		</svg>
	);
};

const MenuIconHztl = () => {
	return (
		<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="4" height="4" rx="2" fill="#1858C0"/>
			<rect x="6" width="4" height="4" rx="2" fill="#1858C0"/>
			<rect x="12" width="4" height="4" rx="2" fill="#1858C0"/>
		</svg>
	);
};

const Patients = () => {
	const [patients, setPatients] = useState([]);
	const [loading, setLoading] = useState(false);
	
	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				await fetch('https://fakestoreapi.com/users')
					.then(res => res.json())
					.then(json => setPatients(json));
			} catch ( e ) {
				console.log(e.message, 'Error');
			} finally {
				setLoading(false);
			}
		})();
	}, []);
	
	//console.log(patients, 'here');
	
	if ( loading ) {
		return (
			<div className="th--scheduler--page">
				<DoctorInfo/>
				<Row className="mb-4">
					<Col md="12">
						<Card>
							<Card.Body>
								<span>Loading...</span>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
	
	return (
		<>
			<div className="th--scheduler--page">
				<DoctorInfo/>
				<Row className="mb-4">
					<Col md="12">
						<Card>
							<Card.Body>
								<div className="d-flex flex-nowrap align-items-center">
									<h5>Patients</h5>
									<div className="ms-auto">
										<ul className="list-inline">
											<li className="list-inline-item">View</li>
											<li className="list-inline-item">
												<ListAltIcon/>
											</li>
											<li className="list-inline-item">
												<Form>
													<Form.Group className="mb-3" controlId="patientInput">
														<Form.Control type="text" placeholder="Search Patient"/>
													</Form.Group>
												</Form>
											</li>
										</ul>
									</div>
								</div>
								<Row>
									{patients.map(item => (
										<Col md="4" key={item.id}>
											<Card className="th--card--primary mb-3">
												<div style={{textAlign: 'right', marginRight: '.5rem'}}>
													<a href="#"><MenuIconHztl/></a>
												</div>
												<Card.Body className="pt-1 pb-1">
													<div className="d-flex flex-nowrap">
														<div>
															<Image src="https://picsum.photos/72" roundedCircle/>
														</div>
														<div className="ms-3">
															<h6>{titleCase(item.name.firstname) + ' ' + titleCase(item.name.lastname)}</h6>
															<div className="d-flex flex-nowrap align-items-center">
																<p className="mb-0">Gender: <span>Male</span></p>
																<div className="ms-2">
																	<p className="mb-0">Age: <span>45 yrs</span></p>
																</div>
															</div>
															<p className="text-muted">Appointment: {item.id}</p>
														</div>
													</div>
												</Card.Body>
											</Card>
										</Col>
									))}
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Patients;
