import styled, { keyframes } from 'styled-components';
import {
    GAME_WIDTH,
    GAME_WRAPPER_SIZE,
} from './constants';

const pulse = keyframes`
    0% {
        -moz-box-shadow: 0 0 0 0 red;
        box-shadow: 0 0 0 0 red;
    }
    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
        box-shadow: 0 0 0 20px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
`;

export const StyledSnakeGame = styled.div`
    position: relative;
    .snake-game__map-wrapper {
        width: ${GAME_WRAPPER_SIZE}px;
        height: ${GAME_WRAPPER_SIZE}px;
        @media only screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vw - 20px);
        }
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(${GAME_WIDTH}, 1fr);
        grid-template-rows: repeat(${GAME_WIDTH}, 1fr);
        background: #161616;
    }
    .snake-game__map-block-item {
        border: 1px solid black;
        box-sizing: border-box;
    }
    .snake-game__draw-snake-body {
        background: white;
        transition: all 0.1s;
    }
    .snake-game__draw-snake-food {
        background: red;
        border-radius: 100%;
        animation: ${pulse} 2s infinite;
    }
    .snake-game__panel {
        width: ${GAME_WRAPPER_SIZE}px;
        height: ${GAME_WRAPPER_SIZE}px;
        @media only screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vw - 20px);
        }
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .snake-game__score {
        color: white;
        font-weight: 500;
        font-size: 1.5em;
        margin: 15px 0px;
    }
    .snake-game__start-game-btn {
        width: 100px;
        height: 40px;
        background: black;
        border: 2px solid white;
        color: white;
        border-radius: 20px;
        font-size: 1.2em;
        cursor: pointer;
        outline: none;
        &:hover {
            color: black;
            background: white;
            transition: all 0.3s;
        }
    }
    .snake-game__virtual-keyboard {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 5em;
        margin-top: 20px;
        .virtual-keyboard__button {
            cursor: pointer;
            &:hover {
                color: #ffd600;
            }
        }
        .virtual-keyboard__wrapper-bottom {
            display: flex;
        }
    }
`;
