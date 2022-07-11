import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Styles = styled.div`
  .toggle-theme-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    span {
      font-size: 1rem;
    }

    .toggle-theme {
      display: flex;
      position: relative;
      padding: 0;
      margin: 0;

      input {
        visibility: hidden;
        height: 0;
        width: 0;

        &:checked + .toggler-switch {
          .circle {
            left: calc(100% - 3px);
            transform: translateX(-18px);
          }
        }
      }
      .toggler-switch {
        margin: 0;
        display: flex;
        position: relative;
        height: 25px;
        width: 60px;
        cursor: pointer;
        border: 1px solid #000000;
        background-color: #ffffff;
        border-radius: 12.5px;
        transition: background-color 0.2s;

        .switch-icon {
          position: absolute;
          transform: translateY(-50%);
          color: black;

          &.day-icon {
            top: 50%;
            right: 4px;
          }

          &.night-icon {
            top: 50%;
            left: 4px;
          }
        }

        .circle {
          position: absolute;
          height: 18px;
          width: 18px;
          background: #000000;
          border-radius: 100%;
          top: 3px;
          left: 3px;
          transition: 0.2s;
        }
      }
    }
  }
`;
const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersLight =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

const defaultLight = storedTheme === "light" || (storedTheme === null && prefersLight);

if (prefersLight) {
  setLight();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <Styles>
      <div className="toggle-theme-wrapper">
        <label className="toggle-theme" htmlFor="checkbox" defaultChecked={defaultLight}>
          <input type="checkbox" id="checkbox" onChange={toggleTheme} />
          <div className="toggler-switch">
            <span className="switch-icon night-icon">
              <i className="fa-regular fa-moon-stars"></i>
            </span>
            <span className="switch-icon day-icon">
              <i className="fa-regular fa-sun-bright"></i>
            </span>
            <span className="circle"></span>
          </div>
        </label>
      </div>
    </Styles>
  );
};

export default DarkMode;
