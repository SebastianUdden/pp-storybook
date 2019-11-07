import React from "react";
import styled, { css } from "styled-components";

const RippleWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  cursor: pointer;
  margin: 0rem 0.2rem;
  height: auto;
  ${p =>
    p.fab &&
    css`
      margin: ${p => (p.noMargin ? 0 : "0.3rem")};
      border-radius: 50%;
      margin: 0;
    `};
`;

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${p => p.color}66;
    animation: ripple 750ms;
  }
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

class Ripple extends React.Component {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    };
  };
  state = this.initializeState();

  /* Debounce Code to call the Ripple removing function */
  callCleanUp = (cleanup, delay) => {
    return function() {
      clearTimeout(this.bounce);
      this.bounce = setTimeout(() => {
        cleanup();
      }, delay);
    };
  };

  showRipple = e => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - size / 2;
    const y = e.pageY - pos.y - size / 2;

    const spanStyles = {
      top: y + "px",
      left: x + "px",
      height: size + "px",
      width: size + "px"
    };
    const count = this.state.count + 1;
    this.setState({
      spanStyles: { ...this.state.spanStyles, [count]: spanStyles },
      count: count
    });
  };

  cleanUp = () => {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  };

  renderRippleSpan = () => {
    const { spanStyles = {} } = this.state;
    const spanArray = Object.keys(spanStyles);
    if (spanArray && spanArray.length > 0) {
      return spanArray.map((key, index) => {
        return (
          <span
            key={"spanCount_" + index}
            className=""
            style={{ ...spanStyles[key] }}
          ></span>
        );
      });
    } else {
      return null;
    }
  };

  render() {
    const {
      children = null,
      classes = "",
      onClick = null,
      fab = false,
      noMargin = false,
      color = "#ffffff"
    } = this.props;
    return (
      <RippleWrapper
        ref="targetElement"
        className={classes}
        onClick={onClick}
        fab={fab}
        noMargin={noMargin}
      >
        {children}
        <RippleContainer
          onMouseDown={this.showRipple}
          onMouseUp={this.callCleanUp(this.cleanUp, 2000)}
          color={color}
        >
          {this.renderRippleSpan()}
        </RippleContainer>
      </RippleWrapper>
    );
  }
}

export default Ripple;
