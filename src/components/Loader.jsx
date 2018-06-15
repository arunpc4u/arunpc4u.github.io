import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    background: #1e1f21;
    width: 100%;
    height: 100vh;
    z-index: 111;
    position: relative;
`;

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    position: absolute;
    bottom: 0;
    top: -20%;
    right: 0;
    left: 0;

    p {
        display: block;
        margin-top: 50px;
        font-size: 24px;
        letter-spacing: 2px;
        font-weight: 700;
        text-transform: uppercase;
    }
`;

const SpinFrame = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    border: 10px solid #1e1f21;
    border-left-color: #2ecc71;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${SpinFrame} 0.5s linear infinite;
`;

const Loading = () => (
    <Wrapper>
        <Loader>
            <Spinner />
            <p>Loading</p>
        </Loader>
    </Wrapper>
);

export default Loading;
