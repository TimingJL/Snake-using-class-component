import React, { Component } from 'react';
import _ from 'lodash';
import { StyledSnakeGame } from './Styled';
import {
    GAME_WIDTH,
} from './constants';

class SnakeGame extends Component {
    state = {
        blocks: _.range(0, GAME_WIDTH * GAME_WIDTH),
    }
    render() {
        const {
            blocks,
        } = this.state;
        return (
            <StyledSnakeGame>
                <div className="snake-game__map-wrapper">
                    {
                        blocks.map((block) => (
                            <div
                                key={block}
                                className="snake-game__map-block-item"
                            >
                            </div>
                        ))
                    }
                </div>
            </StyledSnakeGame>
        );
    }
}

export default SnakeGame;
