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
    <div>
      <Header title={title} />
      <Accordion hiddenTexts={hiddenTexts} />
    </div>
  );
}

function Header(props) {
  return <h1 style={{color:"white", marginLeft:"1rem"}}>{props.title}</h1>;
}

function Accordion(props) {
  return (
    <div className="accordion">
      {props.hiddenTexts.map((hiddenText) => (
        <AccordionItem className="singleAcc" key={hiddenText.label} hiddenText={hiddenText} />
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
    <div>
      <button
        className="accordion__button"
        onClick={handleToggleVisibility}
      >
        {props.hiddenText.label}
        <span className={visibility ? 'fas fa-minus' : 'fas fa-plus'}></span>
      </button>
      <p className={`accordion__content ${activeStatus}`}>
        {props.hiddenText.title}
      </p>
      <p className={`accordion__content ${activeStatus}`}>
        {props.hiddenText.desc}
      </p>
      <p className={`accordion__content ${activeStatus}`}>
        {props.hiddenText.dockerLink}
      </p>
      <p className={`accordion__content ${activeStatus}`}>
        {props.hiddenText.dockerLink}
      </p>
    </div>
  );
}

export default AccordionApp;