import React from 'react';
import './../scss/loader.scss'

const Loader = () => {
	return(
		<div className="loader-wrapper">
			<div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	)
};

export default Loader;