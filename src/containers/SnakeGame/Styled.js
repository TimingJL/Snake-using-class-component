import styled from 'styled-components';
import {
    GAME_WIDTH,
    GAME_WRAPPER_SIZE,
} from './constants';

export const StyledSnakeGame = styled.div`
    .snake-game__map-wrapper {
        width: ${GAME_WRAPPER_SIZE}px;
        height: ${GAME_WRAPPER_SIZE}px;
        @media only screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vw - 20px);
        }
        display: grid;
        grid-template-columns: repeat(${GAME_WIDTH}, 1fr);
        grid-template-rows: repeat(${GAME_WIDTH}, 1fr);
        background: grey;
    }
    .snake-game__map-block-item {
        border: 1px solid black;
        box-sizing: border-box;
    }
`;
