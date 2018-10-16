import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    setSnakeMoving,
    setSnakeDirection,
} from './actions';
import { StyledSnakeGame } from './Styled';
import {
    makeSelectSnake,
    makeSelectBlocks,
} from './selectors';
import Block from 'containers/SnakeGame/components/Block';

const drawSnake = (snake, block) => {
    if (snake.getIn(['headPosition', 'x']) === block.get('x') &&
        snake.getIn(['headPosition', 'y']) === block.get('y')) {
        return 'snake-game__map-block-item snake-game__draw-snake-body';
    }
    const snakeBody = snake.get('body');
    if (snakeBody.size > 1) {
        const found = snakeBody.find((bodyPos) => {
            return bodyPos.get('x') === block.get('x') &&
                bodyPos.get('y') === block.get('y');
        });
        return found ? 'snake-game__map-block-item snake-game__draw-snake-body':
            'snake-game__map-block-item';
    }
    return 'snake-game__map-block-item';
};

class SnakeGame extends Component {
    componentDidMount() {
        const {
            handleOnSetSnakeMoving,
        } = this.props;
        document.addEventListener('keydown', this.handleOnKeyDown);
        setInterval(() => {
            handleOnSetSnakeMoving();
        }, 300);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
    }
    handleOnKeyDown = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        handleOnSetSnakeDirection(event.code);
    }
    render() {
        const {
            snake,
            blocks,
        } = this.props;
        return (
            <StyledSnakeGame onKeyDown={this.handleOnKeyDown}>
                <div className="snake-game__map-wrapper">
                    {
                        blocks.map((rows) => (
                            rows.map((block) => (
                                <Block
                                    key={block.get('id')}
                                    classStyle={drawSnake(snake, block)}
                                />
                            ))
                        ))
                    }
                </div>
            </StyledSnakeGame>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    snake: makeSelectSnake(),
    blocks: makeSelectBlocks(),
});

const mapDispatchToProps = dispatch => ({
    handleOnSetSnakeMoving: () => dispatch(setSnakeMoving()),
    handleOnSetSnakeDirection: (directionType) => dispatch(setSnakeDirection(directionType)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SnakeGame);
