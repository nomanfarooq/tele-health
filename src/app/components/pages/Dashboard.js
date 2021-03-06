import React from 'react';
import { Row, Col, Stack } from 'react-bootstrap';

//Components
import DoctorInfo from './../elements/common/DoctorInfo';
import Summary from './../elements/dashboard/Summary';
import TodayAppointment from './../elements/dashboard/TodayAppointment';
import Requests from './../elements/common/Requests';
import Earnings from './../elements/dashboard/Earnings';
import DateCalendar from './../elements/dashboard/Calendar';

const Dashboard = () => {
	return (
		<>
			<div className="th--dashboard--page">
				<DoctorInfo/>
				
				<Row className="mb-4 th--db--cards--widgets">
					<Col md="4" className="th--db--col">
						<Summary/>
					</Col>
					<Col md="4"  className="th--db--col">
						<Earnings/>
					</Col>
					<Col md="4"  className="th--db--col">
						<DateCalendar/>
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
