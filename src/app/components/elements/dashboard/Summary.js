import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Summary = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h6>Summary</h6>
					<Row>
						<Col md="6">
							<p>Attended</p>
							<div className="th--badge--green">
								<span className="th--badge--border"/>
								<span className="th--badge--bg">23</span>
							</div>
						</Col>
						<Col md="6">
							<span>Appointment</span>
							<div className="th--badge--primary">
								<span className="th--badge--border"/>
								<span className="th--badge--bg">23</span>
							</div>
						</Col>
						<Col md="6">
							<span>Request</span>
							<div className="th--badge--secondary">
								<span className="th--badge--border"/>
								<span className="th--badge--bg">23</span>
							</div>
						</Col>
						<Col md="6">
							<span>Canceled</span>
							<div className="th--badge--orange">
								<span className="th--badge--border"/>
								<span className="th--badge--bg">23</span>
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

export default Summary;
