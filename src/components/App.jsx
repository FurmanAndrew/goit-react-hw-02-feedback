import React, { Component } from 'react';
// import Feedbacks from '../components/feedback/feddback'
import Statisticks from '../components/Statistics/Statistics'
import Section from '../components/Section/Section'
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions'



class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClickButton = (typeFeedback) => {
    this.setState((prevState) =>
    {(console.log(prevState))
      return { [typeFeedback.target.name]: prevState[typeFeedback.target.name] += 1 }
    }
      )
    
  }
  countTotalFeedback = ({good, neutral, bad}) => {
     return  good + neutral + bad
  }

  countPositiveFeedbackPercentage = ({good, neutral, bad}) => {
    return `${Math.round(good / (good + neutral + bad) * 100)}%`
  }

  
  render() {
    return (
      <div
        style={{
          height: '5000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template
        <Section title='Please leave feedback' >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}/>
          
        </Section>
        <Section title='Statistics'> {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ? (<p>There is no feedback</p>) :
          <Statisticks
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />}
            
            
        </Section>

        {/* <Feedbacks handleClickGood={() => this.handleClickButton('good')} handleClickNeutral={() => this.handleClickButton('neutral')} handleClickBad={() => this.handleClickButton('bad')} countTotalFeedback={this.countTotalFeedback(this.state)} countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage(this.state)}></Feedbacks> */}
        {/* <Feedbacks handleClickGood={this.handleClickButton('good')} handleClickNeutral={this.handleClickButton('neutral')} handleClickBad={this.handleClickButton('bad')}></Feedbacks> */}
      </div>
    );
  }
};

export default App