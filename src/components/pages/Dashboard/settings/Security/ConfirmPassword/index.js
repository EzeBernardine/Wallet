import { Styles } from "./styles";
import { Flex, Grid } from "../../../../../UI_Components/Box/styles";
import {
  Span,
  Bold,
  Header4,
} from "../../../../../UI_Components/FontSize/styles";
import { InputStyles } from "../../../../../UI_Components/Input/styles";
import API from "../../../../../../lib/api";
import useLocalStorageHook from "../../../../../../lib/customHook";
import { useState, useEffect } from "react";
import Validation from "../Validation";
import { generateID } from "../../../../../../lib/generateID";

const ConfirmPassword = ({
  validatePassword,
  confirmPassword,
  setCreatePassword,
  createPassword,
  setConfirmPassword,
  validationChecks,
  allValid,
}) => {
  return (
    <Styles className="App">
      <form>
        <Flex margin="0 0 30px 0" justify="flex-start" warning>
          <Header4 color="#2c2d2d" spacing=".015rem" lineHeight="22px">
            Create a new strong password
          </Header4>
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
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyUp={validatePassword}
                    placeholder="password"
                    id="confirmpassword"
                  />
                </InputStyles>
              </Flex>
            </Flex>
          </Flex>

          {(!allValid && createPassword.length > 0)? (
            <Flex flexDir="column" align="flex-start">
              {/* create an Validation for each password  with props of label and boolean of state */}
              <Flex flexDir="column" align="flex-start" margin='10px 0'>
                <Bold color={"#de8430"} size="14px">
                  Pass must match the following confditions
                </Bold>
              </Flex>
              <ul className="validation-container">
                {/* <Validation /> */}
                {validationChecks.map((data) => (
                  <Validation data={data} key={generateID(12)} />
                ))}
              </ul>
            </Flex>
          ) : null}

          {/* ------------------button section-------------- */}
          {allValid ? (
            <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
              <button type="submit" padding="15px 30px" onClick={() => []}>
                <Flex>
                  <Span lineHeight="15px" color={"#fff"} className="drawerText">
                    Change Password
                  </Span>
                </Flex>
              </button>
            </Flex>
          ) : null}
        </Grid>
      </form>
    </Styles>
  );
};

export default ConfirmPassword;
