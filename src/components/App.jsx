import React from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Section from './sectionTittle/sectionTittle';
import Notification from './notification/notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handdleIncrement = event => {
    this.setState(prevState => {
      const option = event.target.name;
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    if (total === 0) {
      return 0;
    }
    {
      return Math.round((this.state.good * 100) / total);
    }
  };

  render() {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Section tittle="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handdleIncrement}
          />
        </Section>
        <Section tittle="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
