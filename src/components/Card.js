import React from 'react';

const Card = ({ card, cardType }) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className={`card ${cardType}`}>
			<h3 className="movie-title">{movieName}</h3>
			<div className="imgContainer">
				<img src={imageURL} alt="movie" className="picture"/>
			</div>
			<p>{card.rating ? `Rating: ${card.rating}` : '' }</p>
		</div>
	)
};

export default Card;