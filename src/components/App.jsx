import React, { Component } from 'react';
// import Feedbacks from '../components/feedback/feddback'
import Statisticks from '../components/Statistics/Statistics'
import Section from '../components/Section/Section'
import {FeedbackOptions} from '../components/FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification';



class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClickButton = (e) => {
    this.setState(prevState =>
    {console.log(e)
      console.log(prevState)
      console.log({[e.target.name]: prevState[e.target.name] + 1})
      return { [e.target.name]: prevState[e.target.name] + 1 }
    }
      )
    
  }
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
     return  good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    return `${Math.round(good / (good + neutral + bad) * 100)}%`
  }

  
  render() {
    return (
      <div
        style={{
          eight: '5000',
          display: 'flex',
          flexDirection: 'column',
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
        <Section title='Statistics'> {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ? (<Notification/>) :
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