import React from 'react';

const Card = ({ card }) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className={`card cover`}>
			<h3 className="movie-title">{movieName}</h3>
			<img src={imageURL} alt="movie" className="picture"/>
			<p>{card.rating ? `Rating: ${card.rating}` : '' }</p>
		</div>
	)
};

export default Card;