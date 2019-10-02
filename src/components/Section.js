import React from 'react'
import CoverCard from './cards/CoverCard';
import ContainerCard from './cards/ContainerCard';
import LargeCard from './cards/LargeCard';
import LargeOverlayCard from './cards/LargeOverlayCard';

const Section = ({ section }) => {	
	const { sectionName, isVertical, cardType, data } = section;
	let Card;

	if (cardType === 'cover') {
		Card = CoverCard;
	} else if (cardType === 'container') {
		Card = ContainerCard;
	} else if(cardType === 'large') {
		Card = LargeCard;
	} else {
		Card = LargeOverlayCard;
	}
	
	return (
		<div className="section-container">
			<h2 className="section-title">{ sectionName }</h2>
			<div className={`card-container ${isVertical && 'vertical-list'}`}>
				{
					data && data.map(card => (
						<Card card={card} key={card.movieName} cardType={cardType}/>
					))
				}
			</div>
		</div>
	)
}

export default Section;