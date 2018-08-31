import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


/**
 * @render react
 * @name NoStyleButton
 * @description generic button with styles removed
 * @example
 * <Button text="Im a Button!" />
 */
const NoStyleButton = ({ text, onClick }) => (
	<button className={'NoStyleButton'} onClick={onClick}>
		{text}
	</button>
);

NoStyleButton.propTypes = {
	/**
	 * @property {string} text label to be displayed within the button
	 */
	text: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

NoStyleButton.defaultProps = {
	text: '',
};

export default NoStyleButton;
