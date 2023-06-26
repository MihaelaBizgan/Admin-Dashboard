import React from "react";

import "./options.scss";

const Options = (props) => {
  const options = [
    {
      text: "Products",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Documentation", handler: () => {}, id: 2 },
    { text: "Q&A", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
