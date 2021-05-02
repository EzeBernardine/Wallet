import { Styles } from "./styles";
import { Flex, Frame } from "../../../../UI_Components/Box/styles";
import {
  Small,
  Bold,
  Header4,
} from "../../../../UI_Components/FontSize/styles";
import Image from "../../../../assest/Icon awesome-sim-card.png";
import Image2 from "../../../../assest/Group 810.png";
import useLocalStorageHook from "../../../../../lib/customHook";
import { useEffect, useState } from "react";
import API from "../../../../../lib/api";
import { extractInThrees } from "../../../../../lib/factory.lib";
import { generateID } from "../../../../../lib/generateID";

const Card = () => {
  const { state: token } = useLocalStorageHook("token");
  const [cardDetails, setCardDetials] = useState({
    accountNumber: [],
    accountName: "",
    amount: 0,
  });

  
  useEffect(() => {
    const getUserCardDetails = () => {
      API.get("user/myprofile", {
        headers: { Authorization: `${token.replace(/['"]+/g, "")}` },
      })
        .then(({ data }) => {
          setCardDetials((prev) => ({
            ...prev,
            accountName: data.data.username,
            accountNumber: extractInThrees(data.data._id.substring(0, 16)),
          }));
        })
        .catch((res) => console.log(res));
  
      // API.get("user/getuser", {
      //   headers: { Authorization: `${token.replace(/['"]+/g, "")}` },
      // })
      //   .then(({ data }) => {
      //     console.log(data);
      //   })
      //   .catch((res) => console.log(res));
    };
    getUserCardDetails();
  }, [token]);
  return (
    <Styles className="App">
      <Flex className="balance" align="flex-start" maxWidth="350px">
        <Flex justify="space-between">
          <Flex width="max-content">
            <Bold color="#5b5551">Wallet: </Bold>
            <Flex width="max-content" margin="0 0 0 10px">
              <Small color="#867d76"> Virtal Card</Small>
            </Flex>
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start" className="amount">
          <Frame width="35px" height="25px">
            <img src={Image} alt="icon" />
          </Frame>
          <Flex margin="0px 0 0 10px" width=" max-content" className="amount">
            <Header4 size="18px" color="#673a1e" bold>
              &#8358; {cardDetails.amount}
            </Header4>
          </Flex>
        </Flex>

        <Flex margin="5px 0 0 0" justify="space-between">
          {cardDetails.accountNumber.map((num, index) => (
            <Header4 color="#5b5551" key={generateID(16)}>
              {num}
            </Header4>
          ))}
        </Flex>

        <Flex margin="10px 0 0 0" justify="flex-start">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Small color="#5b5551"> 12/12</Small>
          </Flex>
          <Flex margin="0px 0 0 50px" width=" max-content" className="amount">
            <Small color="#5b5551"> 16/14</Small>
          </Flex>
        </Flex>

        <Flex margin="10px 0 0 0" justify="space-between">
          <Flex margin="0px 0 0 0" width=" max-content" className="amount">
            <Bold color="#673a1e">{cardDetails.accountName}</Bold>
          </Flex>
          <Frame width="80px" height="40px" object="contain">
            <img src={Image2} alt="icon" />
          </Frame>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Card;
