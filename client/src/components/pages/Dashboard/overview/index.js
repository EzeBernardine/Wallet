import { Styles } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import {
  Header4,
  Span,
  Header3,
} from "../../../UI_Components/FontSize/styles";
import Layout from "../../../UI_Components/Layout";
import Alert from "../../../UI_Components/Alert";
import BalanceCard from "./Card";

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
    <Layout>
      <Styles className="App">
        <Flex justify="flex-start" margin="0 0 50px 0" className="warning">
          <Alert>
            <Span>
              Hello Anonymous, your wallet is very low at the moment, try fund
              it
            </Span>
          </Alert>
        </Flex>

        <Flex justify="flex-start" margin="0 0 50px 0">
          <BalanceCard />

          <Flex
            justify="space-between"
            minWidth="max-content"
            maxWidth="400px"
            className="transaction-dates"
            margin="0 0 0 30px"
          >
            <Flex
              flexDir="column"
              align="flex-start"
              width="calc( 50% - 25px)"
              miWidth="max-content"
            >
              <Span color="#5b5551">Last Transfer</Span>
              <Span color="#5b5551">Last Deposit</Span>
              <Span color="#5b5551">Last Withdrawal</Span>
            </Flex>
            <Flex
              flexDir="column"
              align="flex-start"
              width="calc( 50% - 25px)"
              margin="0 0 0 15px"
            >
              <Span color="#5b5551"> 1-12-2021</Span>
              <Span color="#5b5551"> 1-12-2021</Span>
              <Span color="#5b5551"> 000000000</Span>
            </Flex>
          </Flex>
        </Flex>

        <Flex margin="0 0 50px 0" justify="flex-start">
          <Header4 color="#5b5551">Overview of your transactions</Header4>
        </Flex>
        <Grid gridCol="repeat(auto-fill,minmax(300px ,1fr))" gap="50px 30px ">
          {Card.map(({ item, count }) => (
            <Flex className="card" flexDir="column" key={item}>
              <Header3 color="#673a1e">{count}</Header3>
              <Header4 color="#5b5551">{item}</Header4>
            </Flex>
          ))}
        </Grid>
      </Styles>
    </Layout>
  );
};

export default Overview;
