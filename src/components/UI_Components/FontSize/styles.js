import styled from "styled-components";

export const Header1 = styled.h1`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 66px")};
  /* letter-spacing: 1px;  */
  font-size: ${({ size }) => (size ? size : "64px")};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  @media (max-width: 700px) {
    line-height: 50px;
    font-size: 48px;
  }
`;

export const Header2 = styled.h2`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 50px")};
  font-size: ${({ size }) => (size ? size : " 48px")};
  /* letter-spacing: 1px;  */
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  @media (max-width: 700px) {
    line-height: 40px;
    font-size: 32px;
  }
`;

export const Header3 = styled.h3`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  /* letter-spacing: 1px;  */
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 34px")};
  font-size: ${({ size }) => (size ? size : " 32px")};
  font-weight: ${({ bold, weight }) => (weight ? weight : "bold")};
  @media (max-width: 700px) {
    line-height: 28px;
    font-size: 24px;
  }
`;

export const Header4 = styled.h4`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
  font-size: ${({ size }) => (size ? size : " 24px")};
  @media (max-width: 700px) {
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
    font-size: ${({ size }) => (size ? size : " 0.9rem;")};
  }
`;

export const Header5 = styled.h5`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 28px")};
  font-size: ${({ size }) => (size ? size : " 18px")};
  @media (max-width: 700px) {
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
    font-size: ${({ size }) => (size ? size : " 0.8rem;")};
  }
`;

export const Paragraph = styled.p`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 34px")};
  font-size: ${({ size }) => (size ? size : " 0.95rem;")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "normal"};
  @media (max-width: 700px) {
    line-height: 32px;
    font-size: 16px;
  }
`;
export const Bold = styled.b`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
  font-size: ${({ size }) => (size ? size : " 16px")};
  font-weight: bold;
  @media (max-width: 700px) {
    line-height: normal;
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 28px")};
  font-size: ${({ size }) => (size ? size : " 16px")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
  @media (max-width: 700px) {
    line-height: 32px;
    font-size: 14px;
    letter-spacing: 0.75px;
    font-style: normal;
    font-weight: 28px;
  }
`;

export const Small = styled.small`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
  font-size: ${({ size }) => (size ? size : " .8rem;")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;

export const Anchor = styled.a`
  letter-spacing: ${({ spacing }) => spacing && spacing};
  text-align: ${({ align, center }) => (center ? "center" : align && align)};
  color: ${({ color }) => (color ? color : "blue")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " normal")};
  font-size: ${({ size }) => (size ? size : " 1rem;")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;
