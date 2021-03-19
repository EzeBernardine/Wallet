import styled from "styled-components";

export const TabWrapper = styled("div")`
  .tab-list {
    padding-left: 0;
    display: flex;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    height: auto;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease-out;
    overflow-x: auto;
    scrollbar-color: #e3e3e3 transparent;
    scrollbar-width: none;
  }

  .tab-list-item {
    list-style: none;
    padding: 0.8rem 0.55rem;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    height: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b9a694;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #f9f2ee;
    }
  }

  .tab-list-active {
    position: relative;
    color: #de8430;
    border-bottom: 2px solid #de8430;
    :hover {
      border-bottom: 2px solid #de8430;
    }
    ::after {
      content: "";
      width: 50%;
      height: 100%;
      border-radius: 0 4px 4px 0;
      background: #fafafa;
      opacity: 0.2;
      position: absolute;
      left: 50%;
      animation: left 0.8s ease-in-out 1 alternate forwards;
    }
    ::before {
      content: "";
      width: 50%;
      height: 100%;
      border-radius: 4px 0 0 4px;
      background: #fafafa;
      opacity: 0.2;
      position: absolute;
      right: 50%;
      animation: left 0.8s ease-in-out 1 forwards;
    }
    @keyframes left {
      0% {
        width: 0;
        opacity: 0;
      }
      50% {
        width: 50%;
        opacity: 0.4;
      }
      100% {
        width: 50%;
        opacity: 0;
      }
    }
  }

  @media (max-width: 1240px) and (min-width: 920px) {
    .tab-list {
      li {
        padding: 0.7rem 0.4rem;
        font-size: 016px;
      }
    }
  }
  @media (max-width: 920px) {
    .tab-list li {
      font-size: 14px;
      padding: 0 10px 10px;
    }
  }
`;
