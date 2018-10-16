import { createSelector } from 'reselect';
// import { fromJS } from 'immutable';

const selectSnakeGame = state => state.get('snakeGame');

const makeSelectSnake = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('snake'),
    );

const makeSelectBlocks = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('blocks'),
    );

export {
    makeSelectSnake,
    makeSelectBlocks,
};
