import React from 'react';

const LargeCards = ({ card }) => {
	const {movieName, imageURL} = card;
	
	return (
		<div className="card large">
			<div className="card-wrapper">
				<img src={imageURL} alt="movie" className="picture"/>
				<div className="title-container">
					<h3 className="movie-title">{movieName}</h3>
				</div>
			</div>
		</div>
	)
};


export default LargeCards;