import { fromJS } from 'immutable';
import {
    INIT,
} from './constants';
import _ from 'lodash';
import {
    GAME_WIDTH,
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,

    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from './constants';

const direction = {};
direction[ARROW_UP] = { x: 0, y: -1 };
direction[ARROW_DOWN] = { x: 0, y: 1 };
direction[ARROW_LEFT] = { x: -1, y: 0 };
direction[ARROW_RIGHT] = { x: 1, y: 0 };

const createFood = () => ({
    x: Math.floor(Math.random() * GAME_WIDTH),
    y: Math.floor(Math.random() * GAME_WIDTH),
});

const defaultSnake = {
    body: [],
    maxLength: 2,
    headPosition: {
        x: 0,
        y: 0,
    },
    direction: {
        x: 1,
        y: 0,
    },
    speed: 200,
};

const defaultBlocks = _.range(0, GAME_WIDTH).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_WIDTH * indexY,
            x: indexX,
            y: indexY,
        }
    ))
));

const initialState = fromJS({
    blocks: defaultBlocks,
    snake: defaultSnake,
    food: createFood(),
    isStartGame: false,
    score: 0,
});

function snakeGameReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            return initialState;
        }

        case SET_SNAKE_MOVING: {
            const direction = state.getIn(['snake', 'direction']);
            const headPositionX = state.getIn(['snake', 'headPosition', 'x']);
            const headPositionY = state.getIn(['snake', 'headPosition', 'y']);
            const maxLength = state.getIn(['snake', 'maxLength']);
            const snakeBody = state.getIn(['snake', 'body']);
            const updatedPositionX = headPositionX + direction.get('x');
            const updatedPositionY = headPositionY + direction.get('y');
            const eatSelf = snakeBody.find((body) => (
                body.get('x') === updatedPositionX && body.get('y') === updatedPositionY
            ));
            if (eatSelf) {
                return state.set('isStartGame', false);
            }
            return state
                .updateIn(['snake', 'body'], (body) => {
                    let updatedBody = body.push(fromJS({
                        x: headPositionX,
                        y: headPositionY,
                    }));
                    if (updatedBody.size > maxLength) {
                        updatedBody = updatedBody.shift();
                    }
                    return fromJS(updatedBody);
                })
                .updateIn(['snake', 'headPosition', 'x'], (x) => updatePosition(x + direction.get('x')))
                .updateIn(['snake', 'headPosition', 'y'], (y) => updatePosition(y + direction.get('y')))
                .updateIn(['food'], (food) => {
                    if (food.get('x') === headPositionX &&
                        food.get('y') === headPositionY) {
                        return fromJS(createFood());
                    }
                    return food;
                })
                .updateIn(['snake', 'maxLength'], (maxLength) => {
                    const food = state.get('food');
                    if (food.get('x') === headPositionX &&
                        food.get('y') === headPositionY) {
                        return maxLength + 1;
                    }
                    return maxLength;
                })
                .updateIn(['score'], (score) => {
                    const food = state.get('food');
                    if (food.get('x') === headPositionX &&
                        food.get('y') === headPositionY) {
                        return score + 1;
                    }
                    return score;
                });
        }

        case SET_SNAKE_DIRECTION: {
            return state.updateIn(['snake', 'direction'], (dir) => {
                if (!direction[action.payload]) {
                    return dir;
                }
                if (dir.get('x') * -1 === direction[action.payload].x &&
                    dir.get('y') * -1 === direction[action.payload].y) {
                    return dir;
                }
                return fromJS(direction[action.payload]);
            });
        }

        case SET_SNAKE_GAME_START: {
            return initialState
                .set('isStartGame', true);
        }

        default: {
            return state;
        }
    }
}

const updatePosition = (position) => {
    if (position > GAME_WIDTH) {
        return 0;
    } else if (position < 0) {
        return GAME_WIDTH;
    }
    return position;
}

export default snakeGameReducer;
