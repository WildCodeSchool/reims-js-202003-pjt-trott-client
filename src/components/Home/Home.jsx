import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>TROTT</h1>
			<div>
				<Link to="/map">Lien Vers Map</Link>
			</div>
			<div>
				<Link to="/landingPage">Lien Vers Landing Page</Link>
			</div>
		</div>
	);
}

export default Home;