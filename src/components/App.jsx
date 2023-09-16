import { Section } from 'components/Feedback/Section';
import {Statistics} from 'components/Feedback/Statistics';
import {FeedbackOptions} from 'components/Feedback/FeedbackOptions';
import {Notification} from 'components/Feedback/Notification';
import { useState } from "react";

export  const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setbad] = useState(0);

    const handleClick = (option) => {
      if (option === 'good') {
        setGood(good + 1);
      } else if (option === 'neutral') {
        setNeutral(neutral + 1);
      } else if (option === 'bad') {
        setbad(bad + 1);
      }
    }
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    let isShowStatistics = false;
    
    if (total > 0) {
      isShowStatistics = true;
    } 

    const options={
      good: 'good',
      neutral: 'neutral',
      bad: 'bad',
    }
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(options)}
            onLeaveFeedback={handleClick}>
          </FeedbackOptions>
        </Section>
        {isShowStatistics ? (
            <Section title=''>
              <Statistics 
                 good = {good}
                 neutral = {neutral}
                 bad = {bad}
                 total = {total}
                 positivePercentage = {positivePercentage}>
              </Statistics>
            </Section>
            )
          : (<Notification message="There is no feedback" />)
        }
      </div>
    );
  }

