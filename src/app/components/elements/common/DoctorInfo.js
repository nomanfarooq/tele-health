import React from 'react';
import { Alert, Image } from 'react-bootstrap';

const BellIcon = () => {
	return (
		<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 18.5455C9.26142 18.5455 10.2846 17.5077 10.2846 16.2273H5.71536C5.71536 17.5077 6.73858 18.5455 8 18.5455ZM15.6925 13.1227C15.0025 12.3708 13.7114 11.2396 13.7114 7.53409C13.7114 4.71967 11.7657 2.46669 9.14214 1.91395V1.15909C9.14214 0.519055 8.63071 0 8 0C7.36929 0 6.85786 0.519055 6.85786 1.15909V1.91395C4.2343 2.46669 2.28859 4.71967 2.28859 7.53409C2.28859 11.2396 0.997522 12.3708 0.307524 13.1227C0.0932387 13.3563 -0.00176102 13.6356 2.46924e-05 13.9091C0.00395325 14.5031 0.463595 15.0682 1.14645 15.0682H14.8536C15.5364 15.0682 15.9964 14.5031 16 13.9091C16.0018 13.6356 15.9068 13.356 15.6925 13.1227V13.1227Z"
				fill="#1858C0"/>
		</svg>
	);
};

const LogoutIcon = () => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.4 12.8H4V14.4H13.6V1.6H4V3.2H2.4V0.8C2.4 0.587827 2.48429 0.384344 2.63431 0.234315C2.78434 0.0842854 2.98783 0 3.2 0H14.4C14.6122 0 14.8157 0.0842854 14.9657 0.234315C15.1157 0.384344 15.2 0.587827 15.2 0.8V15.2C15.2 15.4122 15.1157 15.6157 14.9657 15.7657C14.8157 15.9157 14.6122 16 14.4 16H3.2C2.98783 16 2.78434 15.9157 2.63431 15.7657C2.48429 15.6157 2.4 15.4122 2.4 15.2V12.8ZM4 7.2H9.6V8.8H4V11.2L0 8L4 4.8V7.2Z"
				fill="#1858C0"/>
		</svg>
	);
};

const DoctorInfo = () => {
	return (
		<>
			<div className="d-flex flex-nowrap align-items-start">
				<div className="d-flex flex-nowrap align-items-center">
					<div className="th--image--profile">
						<Image src="https://picsum.photos/60" roundedCircle/>
					</div>
					<div className="ms-2">
						<a href="#"><h6 className="mb-0">Dr. John Doe</h6></a>
						<span>Speciality</span>
					</div>
				</div>
				<div className="ms-auto">
					<Alert className="bg-color-primary-alpha p-1">
						<p className="mb-0">Availability: 12:00 AM to 09:00 PM</p>
						<p className="mb-0">Duration: 15 minutes</p>
					</Alert>
					{/*<p className="float-end"><a href="#">Set Availability</a></p>*/}
				</div>
				<div className="ms-auto">
					<div className="d-flex flex-nowrap align-items-center">
						<BellIcon/>
						<div className="ms-5">
							<LogoutIcon/> <small className="color-primary">Log out</small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorInfo;
