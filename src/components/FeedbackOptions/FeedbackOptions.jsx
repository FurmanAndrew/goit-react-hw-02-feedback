import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);
    return (<ul className={css.buttonList}>
        { options.map((option, index) => (
        <li key={index}>
            <button className={css.buttonItem} type='button' onClick={onLeaveFeedback} name={option}>{option}</button>
        </li>))}
    </ul>)
 }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func.isRequired
}
export  {FeedbackOptions}