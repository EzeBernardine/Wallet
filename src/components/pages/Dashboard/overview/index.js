import { Styles } from "./styles";
// import { useState } from "react";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import {
  Header4,
  Paragraph,
  Header3,
} from "../../../UI_Components/FontSize/styles";
// import { Link } from "react-router-dom";

const Overview = () => {
  const Card = [
    {
      item: "Withdrawal",
      count: 30,
    },
    {
      item: "Deposite",
      count: 20,
    },
    {
      item: "Transfer",
      count: 0,
    },
  ];
  return (
    <Styles className="App">
      <Flex justify="flex-start" margin="0 0 50px 0" className="warning">
        <Paragraph>
          Hello Anonymous, your wallet is very low at the moment, try fun it
        </Paragraph>
      </Flex>

      <Grid gridCol="repeat(auto-fill,minmax(300px ,1fr))" gap="50px 30px ">
        {Card.map(({ item, count }) => (
          <Flex className="card" flexDir="column" key={item}>
            <Header3 color="#673a1e">{count}</Header3>
            <Header4 color="#5b5551">{item}</Header4>
          </Flex>
        ))}
      </Grid>
      {/* <Flex justify="flex-start" margin=" 50px 0">
        <Header5 color="#5b5551">Your activites</Header5>
      </Flex> */}
    </Styles>
  );
};

export default Overview;
