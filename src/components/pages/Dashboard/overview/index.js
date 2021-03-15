import { Styles } from "./styles";
import { Flex, Grid } from "../../../UI_Components/Box/styles";
import {
  Header4,
  Paragraph,
  Header3,
} from "../../../UI_Components/FontSize/styles";
import Layout from "../../../UI_Components/Layout";
import Alert from "../../../UI_Components/Alert";

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
            <Paragraph>
              Hello Anonymous, your wallet is very low at the moment, try fund it
            </Paragraph>
          </Alert>
        </Flex>

        <Flex className="balance" margin="0 0 50px 0" justify="flex-start">
          <Header4 color="#fff"> Your balance</Header4>
          <Flex margin="10px 0 0 0" width=" max-content">
            <Header3 color="#de8430"># 200000</Header3>
          </Flex>
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
