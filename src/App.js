import React, { Component } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeed: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (prop) => {
    this.setState((state) => ({ [prop]: state[prop] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title={"Please leave your feedback"}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={"Feedback is not given"} />
        )}
      </Section>
    );
  }
}
export default App;
