import React, { Component } from 'react'
import Card from './Card';

const  Section = ({ section }) => {	
	const { sectionName, isVertical, cardType, data } = section;
		return (
			<div>
				<h2>{ sectionName }</h2>
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