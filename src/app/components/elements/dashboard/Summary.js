import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Summary = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h5>Summary</h5>
					<div className="th--badges-summary">
						<Row>
							<Col md="6">
								<p>Attended</p>
								<div className="th--badge--green">
									<span className="th--badge--border"/>
									<span className="th--badge--bg">02</span>
								</div>
							</Col>
							<Col md="6">
								<p>Appointment</p>
								<div className="th--badge--primary">
									<span className="th--badge--border"/>
									<span className="th--badge--bg">08</span>
								</div>
							</Col>
							<Col md="6">
								<p>Request</p>
								<div className="th--badge--secondary">
									<span className="th--badge--border"/>
									<span className="th--badge--bg">10</span>
								</div>
							</Col>
							<Col md="6">
								<p>Canceled</p>
								<div className="th--badge--orange">
									<span className="th--badge--border"/>
									<span className="th--badge--bg">05</span>
								</div>
							</Col>
						</Row>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Summary;
