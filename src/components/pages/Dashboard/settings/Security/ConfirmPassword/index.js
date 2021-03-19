import { Styles } from "./styles";
import { Flex, Grid } from "../../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../../UI_Components/FontSize/styles";
import { InputStyles } from "../../../../../UI_Components/Input/styles";
import API from "../../../../../../lib/api";
import useLocalStorageHook from "../../../../../../lib/customHook";
import { useState, useEffect } from "react";
import Validation from "../Validation";
import { generateID } from "../../../../../../lib/generateID";

const ConfirmPassword = () => {
  // form inputs
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false); // uppercase letter
  const [containsLL, setContainsLL] = useState(false); // lowercase letter
  const [containsN, setContainsN] = useState(false); // number
  const [containsSC, setContainsSC] = useState(false); // special character
  const [contains8C, setContains8C] = useState(false); // min 8 characters
  const [passwordMatch, setPasswordMatch] = useState(false); // passwords match

  // labels and state boolean corresponding to each validation
  const mustContainData = [
    ["An uppercase letter (A-Z)", containsUL],
    ["A lowercase letter (a-z)", containsLL],
    ["A number (0-9)", containsN],
    ["A special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["Passwords match", passwordMatch],
  ];

  // checks all validations are true
  const [allValid, setAllValid] = useState(false);

  const validatePassword = () => {
    // has uppercase letter
    if (passwordOne.toLowerCase() != passwordOne) setContainsUL(true);
    else setContainsUL(false);
    // has lowercase letter
    if (passwordOne.toUpperCase() != passwordOne) setContainsLL(true);
    else setContainsLL(false);
    // has number
    if (/\d/.test(passwordOne)) setContainsN(true);
    else setContainsN(false);
    // has special character
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(passwordOne))
      setContainsSC(true);
    else setContainsSC(false);
    // has 8 characters
    if (passwordOne.length >= 8) setContains8C(true);
    else setContains8C(false);
    // passwords match
    if (passwordOne !== "" && passwordOne === passwordTwo)
      setPasswordMatch(true);
    else setPasswordMatch(false);
    // all validations passed
    if (
      containsUL &&
      containsLL &&
      containsN &&
      containsSC &&
      contains8C &&
      passwordMatch
    )
      setAllValid(true);
    else setAllValid(false);
  };

  return (
    <Styles className="App">
      <form>
        <Flex margin="0 0 30px 0" justify="flex-start" warning>
          <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
            Create a new strong password
          </Paragraph>
        </Flex>

        <Grid className="input-container" gap="18px">
          <Flex justify="space-between">
            <Flex width="calc( 50% - 10px )">
              <Flex className="input-wrap" flexDir="column" align="stretch">
                <label htmlFor="password">Create Password</label>
                <InputStyles>
                  <input
                    type="text"
                    name="password"
                    placeholder="text"
                    id="password"
                    value={passwordOne}
                    onChange={(e) => setPasswordOne(e.target.value)}
                    onKeyUp={validatePassword}
                  />
                </InputStyles>
              </Flex>
            </Flex>

            <Flex width="calc( 50% - 10px )">
              <Flex className="input-wrap" flexDir="column" align="stretch">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <InputStyles>
                  <input
                    type="text"
                    name="confirmpassword"
                    value={passwordTwo}
                    onChange={(e) => setPasswordTwo(e.target.value)}
                    onKeyUp={validatePassword}
                    placeholder="password"
                    id="confirmpassword"
                  />
                </InputStyles>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            {/* create an Validation for each password  with props of label and boolean of state */}
            <ul className="validation-container">
              {/* <Validation /> */}
              {mustContainData.map((data) => (
                <Validation data={data} key={generateID(12)} />
              ))}
            </ul>
          </Flex>

          {/* ------------------button section-------------- */}
          <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
            <button type="submit" padding="15px 30px" onClick={() => []}>
              <Flex>
                <Span lineHeight="15px" color={"#fff"} className="drawerText">
                  Change Password
                </Span>
              </Flex>
            </button>
          </Flex>
        </Grid>
      </form>
    </Styles>
  );
};

export default ConfirmPassword;
