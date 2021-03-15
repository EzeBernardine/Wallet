import { Styles } from "./styles";
// import { useState } from "react";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Header2,
  Paragraph,
  Header5,
  Span,
  Header3,
} from "../../../UI_Components/FontSize/styles";
// import { Link } from "react-router-dom";
import Layout from "../../../UI_Components/Layout";
import CustomTable from "../../../UI_Components/Table";

const Deposite = () => {
  const tableContent = [
    {
      firstCol: "smds",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "hbb",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
    {
      firstCol: "smds",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "hbb",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
    {
      firstCol: "smds",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "kfkskkn",
    },
    {
      firstCol: "hbb",
      secondCol:
        "this is the description for each column and i hope it can populate the entire page with information",
      thirdCol: "8/21/2018",
      fourthCol: "02/07/2020",
      fothCol: "flkkskfknk",
    },
  ];
  const tableHead = [
    "Deposit",
    "Withdrawal",
    "Withdrawal Comments",
    "Transfer  ",
    "Transfer  COmments",
  ];
  return (
    <Layout>
      <Styles className="App">
        <Flex margin="0 0 30px 0" justify="flex-start" >
          <Flex margin="0 0 30px 0" justify="flex-start">
            <Header5 color="#de8430" spacing=".4rem" bold>
              Transfers
            </Header5>
          </Flex>

          <Paragraph color="#2b180d" spacing=".025rem" lineHeight="25px">
            Transfers on this platform can be either directly, ie to another
            account user, or to the bank. Just fill in the form and you are good
            to go.
          </Paragraph>
        </Flex>

        <CustomTable
          theadBkColor="white"
          bottomGap="5px"
          tableHead={tableHead}
          tableBody={tableContent}
          rowHovColor="#d2ccc626"
          theadColor="#864b26"
          tbodyColor="#5b5551"
          handleReadAll={() => []}
          pageSize={5}
          paginator
        />
      </Styles>
    </Layout>
  );
};

export default Deposite;
