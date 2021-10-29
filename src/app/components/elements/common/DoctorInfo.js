import React from 'react';
import { Alert, Image } from 'react-bootstrap';

const DoctorInfo = () => {
	return (
		<>
			<div className="d-flex flex-nowrap">
				<div className="d-flex flex-nowrap">
					<div className="th--image--profile">
						<Image src="https://picsum.photos/60" roundedCircle/>
					</div>
					<div className="ml-auto">
						<h6>Dr. John Doe</h6>
						<span>Speciality</span>
					</div>
				</div>
				<div className="ml-auto">
					<Alert variant="info">
						<p className="mb-0">Availability: 12:00 AM to 09:00 PM</p>
						<p className="mb-0">Duration: 15 minutes</p>
					</Alert>
					<p className="float-end"><a href="#">Set Availability</a></p>
				</div>
				<div className="ml-auto">
					<div className="d-flex flex-nowrap">
						<span>icon</span>
						<div className="ml-auto">
							<span>Log out</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorInfo;
