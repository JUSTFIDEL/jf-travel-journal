import React from 'react'

const Card = props => {
	return (
		<>
			<div className='card'>
				<img
					src={`../images/${props.data.imageUrl}`}
					alt='fuji'
					className='card--image'
				/>
				<div className='card--info'>
					<div className='card--loc'>
						<img
							src='../images/location.png'
							alt='loc'
							className='card--loc__iimg'
						/>
						<p className='card--con'>{props.data.location}</p>
						<a href={props.data.googleMapUrl} className='card--goo'>
							View on Google Map
						</a>
					</div>
					<h1 className='card--title'>{props.data.title}</h1>
					<span className='card--date'>
						{props.data.startDate} - {props.data.startDate}
					</span>
					<p className='card--info'>{props.data.description}</p>
				</div>
			</div>
			<hr className='card--hr' />
		</>
	)
}

export default Card
