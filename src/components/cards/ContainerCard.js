import React from 'react';

const Card = ({ card}) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className={`card container`}>
			<h3 className="movie-title">{movieName}</h3>
			<div className="imgContainer" style={{backgroundImage: `url('${imageURL}')`}}/>
			<p>{card.rating ? `Rating: ${card.rating}` : '' }</p>
		</div>
	)
};

export default Card;