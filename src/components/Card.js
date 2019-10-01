import React from 'react';

const Card = ({ card, cardType }) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className={`card ${cardType}`}>
			<h3 className="movie-title">{movieName}</h3>
			{
				cardType === 'container' ? <div className="imgContainer" style={{backgroundImage: `url('${imageURL}')`}}/> : <img src={imageURL} alt="movie" className="picture"/>
			}
			<p>{card.rating ? `Rating: ${card.rating}` : '' }</p>
		</div>
	)
};

export default Card;