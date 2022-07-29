import styled from "styled-components";

function Loader() {
  const Styles = styled.div`
     {
      position: fixed;
      background: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1100;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    * {
      box-sizing: border-box;
    }
    *::before,
    *::after {
      box-sizing: border-box;
    }
    #container {
      position: relative;
      transform: scale(0.725);
    }
    .divider {
      position: absolute;
      z-index: 2;
      top: 65px;
      left: 200px;
      width: 50px;
      height: 15px;
      background: #fff;
    }
    .loading-text {
      position: relative;
      font-size: 3.75rem;
      font-weight: 300;
      margin: 0;
      white-space: nowrap;
    }
    .loading-text::before {
      position: absolute;
      content: "";
      z-index: 1;
      top: 40px;
      left: 115px;
      width: 6px;
      height: 6px;
      background: #151a30;
      border-radius: 50%;
      -webkit-animation: dotMove 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
      animation: dotMove 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
    }
    .loading-text .letter {
      display: inline-block;
      position: relative;
      color: #151a30;
      letter-spacing: 20.5px;
    }
    .loading-text .letter:nth-child(1) {
      transform-origin: 100% 70%;
      transform: scale(1, 1.275);
    }
    .loading-text .letter:nth-child(1)::before {
      position: absolute;
      content: "";
      top: 22px;
      left: 0;
      width: 14px;
      height: 36px;
      background: #fff;
      transform-origin: 100% 0;
      -webkit-animation: lineStretch 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
      animation: lineStretch 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
    }
    .loading-text .letter:nth-child(5) {
      transform-origin: 100% 70%;
      -webkit-animation: letterStretch 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;
      animation: letterStretch 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;
    }
    .loading-text .letter:nth-child(5)::before {
      position: absolute;
      content: "";
      top: 15px;
      left: 2px;
      width: 9px;
      height: 15px;
      background: #fff;
    }
    @-webkit-keyframes dotMove {
      0%,
      100% {
        transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg);
      }
      50% {
        transform: rotate(0deg) translate(-111px, 10px) rotate(0deg);
      }
    }
    @keyframes dotMove {
      0%,
      100% {
        transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg);
      }
      50% {
        transform: rotate(0deg) translate(-111px, 10px) rotate(0deg);
      }
    }
    @-webkit-keyframes letterStretch {
      0%,
      100% {
        transform: scale(1, 0.35);
        transform-origin: 100% 75%;
      }
      8%,
      28% {
        transform: scale(1, 2.125);
        transform-origin: 100% 67%;
      }
      37% {
        transform: scale(1, 0.875);
        transform-origin: 100% 75%;
      }
      46% {
        transform: scale(1, 1.03);
        transform-origin: 100% 75%;
      }
      50%,
      97% {
        transform: scale(1);
        transform-origin: 100% 75%;
      }
    }
    @keyframes letterStretch {
      0%,
      100% {
        transform: scale(1, 0.35);
        transform-origin: 100% 75%;
      }
      8%,
      28% {
        transform: scale(1, 2.125);
        transform-origin: 100% 67%;
      }
      37% {
        transform: scale(1, 0.875);
        transform-origin: 100% 75%;
      }
      46% {
        transform: scale(1, 1.03);
        transform-origin: 100% 75%;
      }
      50%,
      97% {
        transform: scale(1);
        transform-origin: 100% 75%;
      }
    }
    @-webkit-keyframes lineStretch {
      0%,
      45%,
      70%,
      100% {
        transform: scaleY(0.125);
      }
      49% {
        transform: scaleY(0.75);
      }
      50% {
        transform: scaleY(0.875);
      }
      53% {
        transform: scaleY(0.5);
      }
      60% {
        transform: scaleY(0);
      }
      68% {
        transform: scaleY(0.18);
      }
    }
    @keyframes lineStretch {
      0%,
      45%,
      70%,
      100% {
        transform: scaleY(0.125);
      }
      49% {
        transform: scaleY(0.75);
      }
      50% {
        transform: scaleY(0.875);
      }
      53% {
        transform: scaleY(0.5);
      }
      60% {
        transform: scaleY(0);
      }
      68% {
        transform: scaleY(0.18);
      }
    }
    @media (min-width: 48rem) {
      #container {
        transform: scale(0.725rem);
      }
    }
    @media (min-width: 62rem) {
      #container {
        transform: scale(0.85);
      }
    }
  `;
  return (
    <Styles>
      <div id="container">
        <div className="divider" aria-hidden="true"></div>
        <p className="loading-text" aria-label="Loading">
          <span className="letter" aria-hidden="true">
            L
          </span>
          <span className="letter" aria-hidden="true">
            o
          </span>
          <span className="letter" aria-hidden="true">
            a
          </span>
          <span className="letter" aria-hidden="true">
            d
          </span>
          <span className="letter" aria-hidden="true">
            i
          </span>
          <span className="letter" aria-hidden="true">
            n
          </span>
          <span className="letter" aria-hidden="true">
            g
          </span>
        </p>
      </div>
    </Styles>
  );
}

export default Loader;
