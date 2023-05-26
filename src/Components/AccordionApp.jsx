import React, { useState } from 'react';
import "./AccordionApp.css"
function AccordionApp() {
  const title = 'Contest Problems';
  const hiddenTexts = [
    {
      label: 'Problem 1',
      title: 'Title of problem',
      desc: 'Description of problem',
      dockerLink: 'link of problem'
    },
    {
      label: 'Problem 2',
      title: 'Title of problem',
      desc: 'Description of problem',
      dockerLink: 'link of problem'
    },
    {
      label: 'Problem 3',
      title: 'Title of problem',
      desc: 'Description of problem',
      dockerLink: 'link of problem'
    },
    {
      label: 'Problem 4',
      title: 'Title of problem',
      desc: 'Description of problem',
      dockerLink: 'link of problem'
    }
  ];

  return (
    <div >
      <Header title={title} />
      <Accordion hiddenTexts={hiddenTexts} />
    </div>
  );
}

function Header(props) {
  return <h1 style={{color:"white", marginLeft:"1.2rem"}}>{props.title}</h1>;
}

function Accordion(props) {
  return (
    <div className="accordion" style={{paddingRight:"2%"}} >
      {props.hiddenTexts.map((hiddenText) => (
        <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
      ))}
    </div>
  );  
}

function AccordionItem(props) {
  const [visibility, setVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  const activeStatus = visibility ? 'active' : '';

  return (
    <div style={{marginBottom:"2rem"}}>
      <button
        className="accordion__button"
        style={{ borderRadius:"12px" ,border:"2px solid black"}}
        onClick={handleToggleVisibility}
      >
        {props.hiddenText.label}
        <span color='white' className={visibility ? 'fas fa-minus' : 'fas fa-plus'}></span>
      </button>
      <p style={{borderRadius:"12px"}} className={`accordion__content ${activeStatus}`} >
        {props.hiddenText.title}
      </p>
      <p className={`accordion__content ${activeStatus}`} >
        {props.hiddenText.desc}
      </p>
      <p className={`accordion__content ${activeStatus}`} >
        {props.hiddenText.dockerLink}
      </p>
      <p style={{borderRadius:"12px"}} className={`accordion__content ${activeStatus}`} >
        <input type='text' style={{borderRadius:"8px",padding:"0.2rem"}} />
        <button className='ctf-submit'>Submit</button>
      </p>
    </div>
  );
}

export default AccordionApp;
