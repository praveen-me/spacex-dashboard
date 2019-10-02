import React from 'react';

const LargeOverlayCard = ({ card }) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className="card large-overlay">
			<div className="overlay">
				<h3 className="movie-title">{movieName}</h3>
			</div>
			<div className="imgContainer" style={{backgroundImage: `url('${imageURL}')`}}/>
		</div>
	)
};

export default LargeOverlayCard;