import {Feedback} from './FeedbackOptions.stiled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return ( 
        <div>
            {options.map(option => (
                <Feedback onClick={() =>
                    {onLeaveFeedback(option)}} key={option} className={option}>{option} 
                </Feedback>))}
        </div>
    );
}