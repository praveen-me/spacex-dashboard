import React from 'react';

const LargeOverlayCard = ({ card }) => {
	const {movieName, imageURL, description} = card;
	
	return (
		<div className="card large-overlay">
			<div className="overlay" />
				<div className="content">
					<h3 className="movie-title">{movieName}</h3>
					{
						description && <p>{description}</p>
					}
				</div>
			<div className="imgContainer" style={{backgroundImage: `url('${imageURL}')`}}/>
			
		</div>
	)
};

export default LargeOverlayCard;