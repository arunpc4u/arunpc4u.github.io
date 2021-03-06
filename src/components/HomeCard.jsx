import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Col } from "react-grid-system";
import { CSSTransitionGroup } from "react-transition-group";

// import comonents
import ThemeContext from "../components/Theme";

// icons
import SliderIcon from "../assets/home/slider.svg";
import CloseIcon from "../assets/home/close.svg";
import BeerPng from "../assets/home/beer.png";
import DevPng from "../assets/common/dev.png";
import ArrowDown from "../assets/home/downArrow.svg";

const Card = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    top: -20%;
    left: 0;
    right: 0;
`;

const CardCommon = styled.div`
    width: 500px;
    background: #fff;
    display: flex;
    align-items: center;
    z-index: 1;

    @media (max-width: 600px) {
        width: auto;
    }
`;

const CardHeader = CardCommon.extend`
    box-shadow: 0px 0px 3px 0px #adadad;

    .card_heading {
        display: block;
        text-align: center;
        background: #f4f4f4;
    }

    h1 {
        line-height: 125px;
        font-size: 40px;
        margin: 0;
        position: relative;
        top: -3px;
        font-weight: 700;
        color: #555;
    }

    @media (max-width: 600px) {
        width: auto;

        .card_heading {
            background: none;
        }

        h1 {
            line-height: 25px;
            font-size: 30px;
        }
    }
`;

const CardContent = styled.div`
    width: 600px;
    background: rgba(255, 255, 255, 0.39);
    padding-top: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: -60px;
    z-index: 0;
    padding-bottom: 35px;

    h2 {
        margin: 0;
        line-height: 40px;
        font-size: 34px;
        color: #555;
        margin-left: 10px;
        font-weight: 700;
        margin-right: 10px;

        span {
            color: #4a90e2;
        }
    }

    @media (max-width: 600px) {
        width: auto;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 20px;
        margin-top: -70px;

        h2 {
            font-size: 16px;
        }
    }

    @media (max-width: 400px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const CardFooter = CardCommon.extend`
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    flex-direction: column;
    width: 600px;
    padding: 30px 0;
    position: relative;

    p {
        display: block;
        margin: 0;
        line-height: 45px;
        color: #555;
        font-weight: 700;
        font-size: 22px;
    }

    input {
        width: 40px;
        margin: 0 8px;
        padding: 2px 10px;
        border: 1px solid #ddd;
        color: #555;
    }

    @media (max-width: 600px) {
        padding: 20px;

        p {
            font-size: 16px;
        }
    }

    @media (max-width: 400px) {
        p {
            font-size: 16px;
            line-height: 35px;
        }
    }
`;

const Button = styled.button`
    border: 1px solid #fff;
    background: ${props => props.colors[3]};
    color: #fff;
    padding: 8px 25px;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 3px 0px #6cae67;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: background 200ms ease-in;
`;

const ScrollAnimate = keyframes`
    0%,100% {
        bottom: 50px
    }

    50% {
        bottom: 30px
    }
`;

const ScrollEL = styled.div`
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.6);
    width: 88px;
    line-height: 50px;
    border-radius: 50% 50%;
    border: 2px solid #fff;
    right: 0;
    left: 0;
    padding-left: 2px;
    transition: all 800ms ease;
    margin: 0 auto;
    animation: ${ScrollAnimate} 4s infinite;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 600px) {
        width: 65px;
        height: 65px;

        svg {
            width: 20px;
            height: 70px;
        }
    }
`;

const EmojiImg = styled.img`
    width: 40px;
    height: 40px;
    user-select: none;
`;

const CloseButton = styled.div`
    position: absolute;
    right: 15px;
    top: -4px;
    cursor: pointer;

    @media (max-width: 600px) {
        top: -7px;
        right: 12px;

        svg {
            width: 15px;
        }
    }
`;

const SliderImg = styled(SliderIcon)`
    width: 160px;
    height: 90px;

    @media (max-width: 600px) {
        width: 70px;
    }
`;

class HomeCard extends Component {
    state = {
        flip: false
    };

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        // arrow down and right capturing
        if (event.keyCode === 39 || event.keyCode === 40) {
            this.props.updateSeen();
        }
    };

    handleClickFlip = () => {
        this.setState(prevState => ({ flip: !prevState.flip }));
    };

    cardBack() {
        return (
            <Card key={2}>
                <CardFooter>
                    <CloseButton onClick={this.handleClickFlip}>
                        <CloseIcon width={22} />
                    </CloseButton>
                    <ThemeContext.Consumer>
                        {obj => this.renderContext(obj)}
                    </ThemeContext.Consumer>
                </CardFooter>
            </Card>
        );
    }

    cardFront() {
        return (
            <Card key={1}>
                <CardHeader>
                    <Col
                        onClick={this.handleClickFlip}
                        xs={3}
                        sm={4}
                        style={{ paddingLeft: "5px", cursor: "pointer" }}
                    >
                        <SliderImg width={180} />
                    </Col>
                    <ThemeContext.Consumer>
                        {props => (
                            <Col
                                xs={9}
                                sm={8}
                                style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                                <div className="card_heading">
                                    <h1
                                        style={{
                                            color: props.colors[3]
                                        }}
                                    >
                                        Hi, {"I'm"} Vijay!
                                    </h1>
                                </div>
                            </Col>
                        )}
                    </ThemeContext.Consumer>
                </CardHeader>
                <CardContent>
                    <EmojiImg src={BeerPng} alt="Beer Png Icon" />
                    <h2>
                        / (?=Absolute) (<span>dev</span>|<span>vella</span>) /
                    </h2>
                    <EmojiImg src={DevPng} alt="Dev Png Icon" />
                </CardContent>
            </Card>
        );
    }

    renderContext = props => (
        <React.Fragment>
            <p>Website uses dynamic color palette</p>
            <p>
                Change colors every
                <input
                    type="number"
                    onChange={props.changeInterval}
                    value={props.interval}
                />
                Seconds
            </p>

            <Button colors={props.colors} onClick={props.updateCanvas}>
                Change Color
            </Button>
        </React.Fragment>
    );

    render() {
        const CardEl = this.state.flip ? this.cardBack() : this.cardFront();

        const { updateSeen } = this.props;

        return (
            <CSSTransitionGroup
                transitionName="trans"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
            >
                {CardEl}
                <ScrollEL onClick={updateSeen}>
                    <ArrowDown width={30} />
                </ScrollEL>
            </CSSTransitionGroup>
        );
    }
}

export default HomeCard;
