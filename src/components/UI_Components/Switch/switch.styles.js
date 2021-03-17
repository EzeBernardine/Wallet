import styled from "styled-components";

export const SwitchWrap = styled('div')`
  width: 42px;
  height: 38px;
  display: flex;
  align-items: center;
  position: relative;
  .switch-main {
    width: 40px;
    height: 15px;
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  .switch-btn {
    width: 40px;
    margin: auto;
    height: 15px;
    border-radius: 20px;
    background: ${({ switched, color }) =>
      switched ? (color ? color : "#ff6600") : "#6a666694"};
    /* background: ${props => (props.switched ? "#ff6600" : "#6a666694")}; */
    &:hover .switch-ball {
      box-shadow: ${({ switched, color }) =>
        switched
          ? color
            ? "0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px " + color + 36
            : "0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px #ff660036"
          : " 0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 0px 10px  #6a66662b"};
    }
    transition: all 0.5s ease;
    &:focus .switch-ball,
    &:active .switch-ball {
      box-shadow: ${({ color }) =>
        color
          ? `  0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 1px 10px ${color +
              "8a"}`
          : " 0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 1px 10px #ff66008a"}
      /* box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.54), 00 1px 1px 10px #ff66008a; */
    }
  }

  .switch-check {
    position: absolute;
    z-index: 12;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    opacity: 0;
    cursor: pointer;
  }
  .switch-ball {
    transition: all 0.5s ease;
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    bottom: 0;
    right: ${props => (props.switched ? 0 : "auto")};

    left: ${props => (!props.switched ? 0 : "auto")};
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
    border: ${({ switched, color }) =>
      switched
        ? color
          ? `1px solid ${color}`
          : "1px solid #ff6600"
        : "1px solid  #6a666694"};
    margin: auto;
  }

  @keyframes yeah {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }
  @keyframes back {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
      background: transparent;
    }
  }

  .switch-overlay {
    background: #6a666654;
    position: absolute;
    z-index: 11;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    top: -11px;
    animation: ${props =>
      props.switched
        ? " yeah .5s ease-out forwards"
        : "back .5s ease-out forwards"};
    right: ${props => (props.switched ? " -9px" : "auto")};
    left: ${props => (!props.switched ? " -9px" : "auto")};
    bottom: 0;
    transition: all 0.7s ease;
  }
`;
