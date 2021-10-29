import React from 'react';
import { Card } from 'react-bootstrap';

const Payments = ( {title, amount} ) => {
	return (
		<div className="th--payment--card--util">
			<h6>{title}</h6>
			<span>{amount}</span>
		</div>
	);
};

const Earnings = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h5>Earnings</h5>
					<Payments title="Total Received Payments" amount="$ 12,312"/>
					<Payments title="Total Payments" amount="$ 12,312"/>
				</Card.Body>
			</Card>
		</>
	);
};

export default Earnings;
