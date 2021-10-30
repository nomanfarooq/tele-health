import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';

const VideoCameraIcon = () => {
	return (
		<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.13333 0H13.8667C15.04 0 16 1.05 16 2.33333V11.6667C16 12.95 15.04 14 13.8667 14H2.13333C0.96 14 0 12.95 0 11.6667V2.33333C0 1.05 0.96 0 2.13333 0Z"
				fill="white"/>
			<path
				d="M23.3636 12.2338C23.3636 13.0111 22.5157 13.4912 21.8491 13.0913L17.4855 10.4731C17.1843 10.2924 17 9.96689 17 9.61563V4.38437C17 4.03311 17.1843 3.7076 17.4855 3.52688L21.8491 0.908697C22.5157 0.508782 23.3636 0.988896 23.3636 1.76619V12.2338Z"
				fill="white"/>
		</svg>
	);
};

const Appointment = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<div className="d-flex flex-nowrap">
						<h5>Appointments</h5>
						<div className="ms-auto text-center">
							<p className="mb-0">5</p>
							<a href="#"><small>View all</small></a>
						</div>
					</div>
					
					<Card className="th--appointment--card th--card--selected">
						<Row>
							<Col md="4" className="th--card--left">
								<div>
									<Image src="https://picsum.photos/90" roundedCircle/>
								</div>
								<div className="d-block">
									<span>2:00 AM</span>
								</div>
								<div className="d-block">
									<span>Today</span>
								</div>
							</Col>
							<Col md="8" className="th--card--right">
								<div className="th--appointment--card--typo">
									<h5>John Doe</h5>
									<div className="d-flex flex-nowrap align-items-center">
										<span>Male</span>
										<div className="ms-3">
											<span>23 yrs</span>
										</div>
									</div>
									<p>Some Text Here</p>
									<hr/>
									<div className="d-flex flex-nowrap align-items-center">
										<a href="#">Starts in 3 mins</a>
										<div className="ms-auto">
											<div className="th--icon--bg--rounded bg-light-green">
												<div className="th--icon--bg">
													<VideoCameraIcon/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Card>
					<Card className="th--appointment--card">
						<Row>
							<Col md="4" className="th--card--left">
								<div>
									<Image src="https://picsum.photos/90" roundedCircle/>
								</div>
								<div className="d-block">
									<span>2:00 AM</span>
								</div>
								<div className="d-block">
									<span>Today</span>
								</div>
							</Col>
							<Col md="8" className="th--card--right">
								<div className="th--appointment--card--typo">
									<h5>John Doe</h5>
									<div className="d-flex flex-nowrap align-items-center">
										<span>Male</span>
										<div className="ms-3">
											<span>23 yrs</span>
										</div>
									</div>
									<p>Some Text Here</p>
									<hr/>
									<div className="d-flex flex-nowrap align-items-center">
										<a href="#">Starts in 3 mins</a>
										<div className="ms-auto">
											<div className="th--icon--bg--rounded bg-light-green">
												<div className="th--icon--bg">
													<VideoCameraIcon/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Card>
				</Card.Body>
			</Card>
		</>
	);
};

export default Appointment;
