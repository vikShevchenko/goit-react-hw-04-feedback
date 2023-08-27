import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import './App.styled.css';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const AddFeedback = but => {

    switch (but) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
      default: return
    }

  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const CountPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Pleace leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={AddFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            PositivePercentage={CountPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification mes={'No feedback given'} />
        )}
      </Section>
    </div>
  );

}

export default App;
