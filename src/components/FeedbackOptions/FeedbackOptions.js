import PropTypes from 'prop-types'
import React from 'react';
import './FeedbackOptions.styled.css';
export default function FeedbackOptions({ onLeaveFeedback, options }) {

  return (
    <>
      <ul className="buttonSection">
        {options.map(but => (
          <li key={but}>
            <button
              onClick={() => onLeaveFeedback(but)}
              className="button"
              name={but}
            >
              {but}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
