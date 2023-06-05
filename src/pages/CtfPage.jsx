import React from "react";
import ProfilePic from "../imgs/profilePic.jpg";
import Poster from "../imgs/poster.jpg";
import './CtfPage.css'
import AccordionApp from "../Components/AccordionApp";

const CtfPage = () => {
	return (
		<div className='ctf-container'>
			<nav>
				<div className='home-logo'>
					<h1>Comders</h1>
				</div>
				<div className='home-nav-end'>
					<div>Pajju0330</div>
					<img src={ProfilePic} className='home-profilePic' />
				</div>
			</nav>
            <div className="ctf-contestHeader" >
				<div >
					<div className="ctf-title">Business CTF - Dirty</div>
					<img className="ctf-imgHolder" src="https://www.hackthebox.com/images/landingv3/general_event/biz-ctf-2022/OG_BIZ_CTF_2022_1200x630.jpg" alt="" />
				</div>
				<div className="eventDetails" style={{paddingTop:"2rem"}}>
						<AccordionApp/>
				</div>
			</div>
			<div className="ctf-overview">
				<h2 >Event Overview</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio sapiente eum nihil, ipsam suscipit aspernatur corporis, aut, repellendus itaque aliquid atque molestias eligendi! Amet, velit? Enim veritatis iure necessitatibus.</p>
			</div>
		</div>
	);
};

export default CtfPage;
