import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div>Hello Home</div>
			<Link to="/map">Lien Vers Map</Link>
		</div>

	);
}

export default Home;