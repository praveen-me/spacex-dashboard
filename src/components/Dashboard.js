import React from 'react';
import {useSelector} from 'react-redux';
import Section from './Section';
import cards from '../utils/cards';

const Dashboard = () => {
	const sections = useSelector(state => state.data);

	return (
		sections.map((section, index) => (
			<Section section={section} key={section.id} cards={cards}/>
		))
	)
};

export default Dashboard;

