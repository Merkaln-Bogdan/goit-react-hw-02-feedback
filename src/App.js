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
    good: this.props.good,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
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
      <Section title="Please leave your feedback">
        <FeedbackOptions
          OnGood={this.handleGood}
          OnBad={this.handleBad}
          OnNeutral={this.handleNeutral}
        />
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={this.countTotalFeedback()}
            countPositivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    );
  }
}
export default App;
