/*
 * component: Flex, Grid
 * author: Eze Bernardine May
 * Date: Feb 16th, 2021
 * Project name: NDI ULO
 */

import styled from "styled-components";

export const Flex = styled("div")`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex: ${({ flex }) => flex && flex};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  min-width: ${({ minWidth }) => minWidth && minWidth};
  min-height: ${({ minHeight }) =>  minHeight &&  minHeight};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  max-height: ${({ max, height }) => max && height};
  /* background: ${({ bgColor }) => bgColor && bgColor}; */
  margin: ${({ auto, margin }) => (auto ? 'auto' : margin ? margin : "unset")};
  & > * {
    min-width: 0;
  }
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  & > * {
    min-width: 0;
  }
`;

export const Frame = styled("div")`
  height: ${({ height }) => height || "30px"};
  min-height: ${({ height }) => height || "30px"};
  width: ${({ width }) => width || "30px"};
  min-width: ${({ width }) => width || "30px"};
  overflow: hidden;
  display: flex;
  & > * {
    height: 100%;
    width: 100%;
    object-fit: ${({ object }) => object || "cover"};
  }
`;
