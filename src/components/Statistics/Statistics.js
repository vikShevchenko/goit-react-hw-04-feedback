import PropTypes from 'prop-types'
import './Statistics.styled.css';
import React from 'react';
export default function Statistics(props) {
  return (
    <div>
      <ul className="ulSection">
        {Object.entries(props).map(titleStat => (
          <li key={titleStat} className="lastElem">
            {titleStat[0]}: {titleStat[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  PositivePercentage: PropTypes.number.isRequired,
}

