import React from 'react';
import {
    StyledVirtualKeyboard,
} from './Styled';
import {
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from 'containers/SnakeGame/constants';

const VirtualKeyboard = ({ handleOnClick }) => (
    <StyledVirtualKeyboard>
        <div>
            <div data-code={ARROW_UP} className="virtual-keyboard__button fas fa-arrow-circle-up" onClick={handleOnClick} />
        </div>
        <div className="virtual-keyboard__wrapper-bottom">
            <div data-code={ARROW_LEFT} className="virtual-keyboard__button fas fa-arrow-circle-left" onClick={handleOnClick} />
            <div data-code={ARROW_DOWN} className="virtual-keyboard__button fas fa-arrow-circle-down" onClick={handleOnClick} />
            <div data-code={ARROW_RIGHT} className="virtual-keyboard__button fas fa-arrow-circle-right" onClick={handleOnClick} />
        </div>
    </StyledVirtualKeyboard>
);

export default VirtualKeyboard;
