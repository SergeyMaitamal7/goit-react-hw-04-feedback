import { ConstainerButton, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ConstainerButton>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        ))}
      </ConstainerButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
