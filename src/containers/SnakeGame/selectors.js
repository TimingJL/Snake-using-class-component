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

const makeSelectisGameStart = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isGameStart'),
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
    makeSelectisGameStart,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
};
