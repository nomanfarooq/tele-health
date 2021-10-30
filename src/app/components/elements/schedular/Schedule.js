import React from 'react';
import { Card } from 'react-bootstrap';

//Components
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Schedule = () => {
	const localizer = momentLocalizer(moment); // or globalizeLocalizer
	const myEventsList = [];
	
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h5>Scheduler</h5>
					<Calendar
						localizer={localizer}
						events={myEventsList}
						startAccessor="start"
						endAccessor="end"
						style={{height: 750}}
					/>
				</Card.Body>
			</Card>
		</>
	);
};

export default Schedule;
