import React from "react";
import "./Home.css";
import ProfilePic from "../imgs/profilePic.jpg";
import Poster from "../imgs/poster.jpg";
const Home = () => {
	const [contests, setContests] = React.useState(true);
	return (
		<div className='home-container'>
			<nav>
				<div className='home-logo'>
					<h1>Naam Main Kya Rakha Hai</h1>
				</div>
				<div className='home-nav-end'>
					<div>Pajju0330</div>
					<img src={ProfilePic} className='home-profilePic' />
				</div>
			</nav>
			<div className='home-Poster-Holder'>
				<img src={Poster} className='home-Poster' />
			</div>
			<div className='home-content'>
				<div className='home-display'>
					<div
						className='home-rectangle'
						onClick={() => {
							setContests(true);
						}}>
						Contests
					</div>
					<div
						className='home-rectangle'
						onClick={() => {
							setContests(false);
						}}>
						CTFs
					</div>
				</div>
				<div className='home-hr'>
					<div className='home-title'>Title</div>
					<div className='home-submissions'>Submissions</div>
				</div>
				<div className={contests ? "home-contests" : "home-contests home-hidden"}>
					<div>
						<div className='home-hr'>
							<div>Question 1</div>
							<div>128</div>
						</div>
						<div className='home-hr'>
							<div>Question 2</div>
							<div>518</div>
						</div>
						<div className='home-hr'>
							<div>Question 3</div>
							<div>951</div>
						</div>
						<div className='home-hr'>
							<div>Question 4</div>
							<div>105</div>
						</div>
					</div>
				</div>
				<div className={contests ? "home-contests home-hidden" : "home-contests"}>
					<div>
						<div className='home-hr'>
							<div>CTF 1</div>
							<div>128</div>
						</div>
						<div className='home-hr'>
							<div>CTF 2</div>
							<div>518</div>
						</div>
						<div className='home-hr'>
							<div>CTF 3</div>
							<div>951</div>
						</div>
						<div className='home-hr'>
							<div>CTF 4</div>
							<div>105</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
