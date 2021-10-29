import React from 'react';
import { Card } from 'react-bootstrap';

const RequestCard = ( {name, date, disease} ) => {
	return (
		<div className="th--card--primary-colored">
			<h6>{name}</h6>
			<p>{date}</p>
			<p>{disease}</p>
		</div>
	);
};

const Requests = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<div className="d-flex flex-nowrap align-items-center">
						<h5>Requests</h5>
						<div className="ms-auto text-center">
							<p className="mb-0">5</p>
							<a href="#"><small>View all</small></a>
						</div>
					</div>
					<RequestCard name="John Doe" date="12/05/2020 | 03:45 PM" disease="Disease: Chronic Issue"/>
					<RequestCard name="John Doe" date="12/05/2020 | 03:45 PM" disease="Disease: Chronic Issue"/>
				</Card.Body>
			</Card>
		</>
	);
};

export default Requests;
