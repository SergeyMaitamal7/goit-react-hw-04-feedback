import { Statistics } from 'components/Statistics/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Constainer } from './App.styled';
import { Notification } from 'components/Notification/Notification';

import { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  // const options = Object.keys({good, neutral, bad});
  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(preState => preState + 1);
        break;
      case 'neutral':
        setNeutral(preState => preState + 1);
        break;
      case 'bad':
        setBad(preState => preState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedback = () => {
    const total = bad + neutral + good;
    return `${((good / total) * 100).toFixed(0)}%`;
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedback();

  return (
    <>
      <Constainer>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedback={positiveFeedback}
            />
          )}
        </Section>
      </Constainer>
    </>
  );
};
