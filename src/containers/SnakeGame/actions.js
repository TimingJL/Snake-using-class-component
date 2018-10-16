import {
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
} from './constants';

export const setSnakeMoving = () => ({
    type: SET_SNAKE_MOVING,
});

export const setSnakeDirection = (directionType) => ({
    type: SET_SNAKE_DIRECTION,
    payload: directionType,
});

export const setGameStart = () => ({
    type: SET_SNAKE_GAME_START,
});