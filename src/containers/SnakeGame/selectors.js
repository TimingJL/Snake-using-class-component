import { createSelector } from 'reselect';

const selectSnakeGame = state => state.get('snakeGame');

const makeSelectSnake = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('snake'),
    );

const makeSelectBlocks = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('blocks'),
    );

const makeSelectFood = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('food'),
    );

export {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectFood,
};
