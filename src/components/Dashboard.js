import React from 'react';
import {useSelector} from 'react-redux';
import Section from './Section';

const Dashboard = () => {
	const {response: sections} = useSelector(state => state.data);

	return (
		sections.map((section, index) => (
			<Section section={section} key={section.id}/>
		))
	)
};

export default Dashboard;
