import React from 'react';
import { Card, Table, Image, Badge } from 'react-bootstrap';

const TodayAppointment = () => {
	return (
		<>
			<Card className="th--card--primary">
				<Card.Body>
					<h5 className="mb-3">Today's Appointments 5</h5>
					<Table>
						<tbody>
						<tr className="bg-lightest-primary">
							<th>Patient</th>
							<th>Reason</th>
							<th>Time</th>
							<th></th>
							<th>Action</th>
						</tr>
						<tr>
							<td>
								<div className="d-flex flex-nowrap align-items-center">
									<Image src="https://picsum.photos/24" roundedCircle/>
									<div className="mx-2">
										<a className="text-decoration-none" href={'#'}>Dave Johnson</a>
									</div>
								</div>
							</td>
							<td><span>Neck Wound</span></td>
							<td><span>4:09 PM</span></td>
							<td><span className="color-secondary-light">Starts in 3 min</span></td>
							<td><Badge pill={true} className="color-secondary-bg-light">12</Badge></td>
						</tr>
						<tr>
							<td>
								<div className="d-flex flex-nowrap align-items-center">
									<Image src="https://picsum.photos/24" roundedCircle/>
									<div className="mx-2">
										<a className="text-decoration-none" href={'#'}>Dave Johnson</a>
									</div>
								</div>
							</td>
							<td><span>Neck Wound</span></td>
							<td><span>4:09 PM</span></td>
							<td><span className="color-secondary-light"></span></td>
							<td><Badge pill={true} className="color-secondary-bg-light">12</Badge></td>
						</tr>
						<tr>
							<td>
								<div className="d-flex flex-nowrap align-items-center">
									<Image src="https://picsum.photos/24" roundedCircle/>
									<div className="mx-2">
										<a className="text-decoration-none" href={'#'}>Dave Johnson</a>
									</div>
								</div>
							</td>
							<td><span>Neck Wound</span></td>
							<td><span>4:09 PM</span></td>
							<td><span className="color-secondary-light"></span></td>
							<td><Badge pill={true} className="color-secondary-bg-light">12</Badge></td>
						</tr>
						<tr>
							<td>
								<div className="d-flex flex-nowrap align-items-center">
									<Image src="https://picsum.photos/24" roundedCircle/>
									<div className="mx-2">
										<a className="text-decoration-none" href={'#'}>Dave Johnson</a>
									</div>
								</div>
							</td>
							<td><span>Neck Wound</span></td>
							<td><span>4:09 PM</span></td>
							<td><span className="color-secondary-light"></span></td>
							<td><Badge pill={true} className="color-secondary-bg-light">12</Badge></td>
						</tr>
						<tr>
							<td>
								<div className="d-flex flex-nowrap align-items-center">
									<Image src="https://picsum.photos/24" roundedCircle/>
									<div className="mx-2">
										<a className="text-decoration-none" href={'#'}>Dave Johnson</a>
									</div>
								</div>
							</td>
							<td><span>Neck Wound</span></td>
							<td><span>4:09 PM</span></td>
							<td><span className="color-secondary-light"></span></td>
							<td><Badge pill={true} className="color-secondary-bg-light">12</Badge></td>
						</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
};

export default TodayAppointment;
