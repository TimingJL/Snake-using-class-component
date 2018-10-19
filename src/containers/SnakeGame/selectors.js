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

const makeSelectIsStartGame = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isStartGame'),
    );

const makeSelectScore = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('score'),
    );

const makeSelectIsPause = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isPause'),
    );

const makeSelectIsSpeedModified = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isSpeedModified'),
    );

export {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectFood,
    makeSelectIsStartGame,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
};
