import {
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
} from './constants';

export const setSnakeMoving = () => ({
    type: SET_SNAKE_MOVING,
});

export const setSnakeDirection = (directionType) => ({
    type: SET_SNAKE_DIRECTION,
    payload: directionType,
});
