import React, { useCallback, useState } from 'react';
import { Card } from 'react-bootstrap';

// Component
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';

const DateCalendar = () => {
	const [value, setValue] = useState(new Date());
	
	const onChange = useCallback(
		( val ) => {
			setValue(val);
		},
		[setValue],
	);
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h5>Calender</h5>
					<Calendar className="th--calender" value={value} onChange={onChange}/>
				</Card.Body>
			</Card>
		</>
	);
};

export default DateCalendar;
