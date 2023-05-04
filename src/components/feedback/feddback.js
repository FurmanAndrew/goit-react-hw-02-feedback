const Feedbacks = ({ handleClickGood, handleClickNeutral, handleClickBad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    return (<div>
        <h1>Please leave feedback</h1>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {}</li>
            <li>Neutral: {}</li>
            <li>Bad: { }</li>
            <li>Total: { countTotalFeedback }</li>
            <li>Positive feedback: { countPositiveFeedbackPercentage }</li>
        </ul>
    </div>)

};

export default Feedbacks