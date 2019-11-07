import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  button {
    position: relative;
    border: none;
    outline: none;
    background: #89669b;
    color: white;
    padding: 18px 60px;
    border-radius: 2px;
    font-size: 22px;
  }

  .fab {
    border-radius: 50%;
    margin: 0;
    padding: 20px;
  }

  .material {
    position: relative;
    color: white;
    margin: 20px auto;
    height: 400px;
    width: 500px;
    background: #f45673;
  }

  ${p =>
    p.ripple &&
    css`
      overflow: hidden;
    `}

  ${p =>
    p.rippleEffect &&
    css`
      position: absolute;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: #ffffff66;

      animation: ripple-animation 2s;

      @keyframes ripple-animation {
        from {
          transform: scale(1);
          opacity: 0.4;
        }
        to {
          transform: scale(100);
          opacity: 0;
        }
      }
    `}
`;

const RippleWrapper = styled.div`
  height: ${p => p.height};
  width: ${p => p.width};
`;

const Ripple = ({ children }) => {
  const [ripple, setRipple] = useState(false);
  const createRipple = e => {
    const left = e.target.offsetLeft;
    const top = e.target.offsetTop;
    const xPos = e.pageX - left;
    const YPos = e.pageY - top;

    console.log({ left });
    console.log({ top });
    console.log({ xPos });
    console.log({ YPos });

    setRipple(!ripple);
    // this.setState(
    //   state => {
    //     return {
    //       rippleStyle: {
    //         ...state.rippleStyle,
    //         left,
    //         top,
    //         opacity: 1,
    //         transform: "translate(-50%, -50%)",
    //         transition: "initial",
    //         backgroundColor: color
    //       }
    //     };
    //   },
    //   () => {
    //     this.timer = setTimeout(() => {
    //       this.setState(state => ({
    //         rippleStyle: {
    //           ...state.rippleStyle,
    //           opacity: 0,
    //           transform: `scale(${size / 9})`,
    //           transition: `all ${during}ms`
    //         }
    //       }));
    //     }, 50);
    //   }
    // );
    // (function(window, $) {
    //   $(function() {
    //     $(".ripple").on("click", function(event) {
    //       event.preventDefault();

    //       var $div = $("<div/>"),
    //         btnOffset = $(this).offset(),
    //         xPos = event.pageX - btnOffset.left,
    //         yPos = event.pageY - btnOffset.top;

    //       $div.addClass("ripple-effect");
    //       var $ripple = $(".ripple-effect");

    //       $ripple.css("height", $(this).height());
    //       $ripple.css("width", $(this).height());
    //       $div
    //         .css({
    //           top: yPos - $ripple.height() / 2,
    //           left: xPos - $ripple.width() / 2,
    //           background: $(this).data("ripple-color")
    //         })
    //         .appendTo($(this));

    //       window.setTimeout(function() {
    //         $div.remove();
    //       }, 2000);
    //     });
    //   });
    // })(window, jQuery);
  };

  return (
    <Wrapper onClick={createRipple} ripple={ripple} rippleEffect={ripple}>
      {ripple && <RippleWrapper height={50} width={50} />}
      {children}
    </Wrapper>
  );
};

export default Ripple;
