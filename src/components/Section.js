import React from 'react'
import CoverCard from './cards/CoverCard';
import ContainerCard from './cards/ContainerCard';
import LargeCard from './cards/LargeCard';
import LargeOverlayCard from './cards/LargeOverlayCard';
import {useDispatch} from 'react-redux';
import { changeSectionIsVertical, changeCardType } from '../store/actions/actions';

const Section = ({ section, cards }) => {
	const { sectionName, isVertical, cardType, data } = section;
	const dispatch = useDispatch();
	
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

	const handleIsVerticalChange = () => dispatch(changeSectionIsVertical(section.id));

	const handleChangeCardType = (event) => dispatch(changeCardType({
		sectionId: section.id,
		cardType: event.target.value
	}))
	
	return (
		<div className="section-container">
			<div className="section-title__container">
				<h2 className="section-title">{ sectionName }</h2>
				<form>
					<label htmlFor="vertical">Vertical</label>
					<input type="checkbox" name="vertical" checked={isVertical} onChange={handleIsVerticalChange}/>
				</form>
				<select value={cardType} onChange={handleChangeCardType}>
					<option>Select Card</option>
					{
						cards.map((card) => (
							<option value={card} key={card}>{card}</option>
						))
					}
				</select>
			</div>
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