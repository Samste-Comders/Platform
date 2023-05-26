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
            <div className="ctf-contestHeader">
				<div >
					<div className="ctf-title">Business CTF - Dirty</div>
					<img className="ctf-imgHolder" src="https://www.hackthebox.com/images/landingv3/general_event/biz-ctf-2022/OG_BIZ_CTF_2022_1200x630.jpg" alt="" />
				</div>
				<div className="eventDetails">
						<AccordionApp/>
				</div>
			</div>
		</div>
	);
};

export default CtfPage;
