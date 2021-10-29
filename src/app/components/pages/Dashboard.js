import React from 'react';
import { Row, Col, Stack } from 'react-bootstrap';

//Components
import DoctorInfo from './../elements/common/DoctorInfo';
import Summary from './../elements/dashboard/Summary';
import TodayAppointment from './../elements/dashboard/TodayAppointment';
import Requests from './../elements/dashboard/Requests';
import Earnings from './../elements/dashboard/Earnings';
import Calendar from './../elements/dashboard/Calendar';

const Dashboard = () => {
	return (
		<>
			<div className="th--dashboard--page">
				<DoctorInfo/>
				
				<Row className="mb-4">
					<Col md="4">
						<Summary/>
					</Col>
					<Col md="4">
						<Earnings/>
					</Col>
					<Col md="4">
						<Calendar/>
					</Col>
				</Row>
				
				<Row className="mb-4">
					<Col md="8">
						<TodayAppointment/>
					</Col>
					<Col md="4">
						<Requests/>
					</Col>
				</Row>
				
			</div>
		</>
	);
};

export default Dashboard;
