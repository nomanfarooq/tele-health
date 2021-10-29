import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DoctorInfo from './../elements/common/DoctorInfo';
import Schedule from './../elements/schedular/Schedule';
import Appointment from './../elements/schedular/Appointments';
import Requests from './../elements/common/Requests';

const Scheduler = () => {
	return (
		<>
			<div className="th--scheduler--page">
				<DoctorInfo/>
				<Row className="mb-4">
					<Col md="8">
						<Schedule/>
					</Col>
					<Col md="4">
						<div className="mb-4">
							<Appointment/>
						</div>
						<div>
							<Requests/>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Scheduler;
