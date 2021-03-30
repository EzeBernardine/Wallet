import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import { Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { InputStyles } from "../../../../UI_Components/Input/styles";
// import API from "../../../../../lib/api";
// import useLocalStorageHook from "../../../../../lib/customHook";
import { useState } from "react";
import ComfirmPassword from "./ConfirmPassword";

const Profile = () => {
  const [oldPassword] = useState(true);
  // const { state: token } = useLocalStorageHook("token");

  // form inputs
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //manage all vallidations state
  const [validation, setValidation] = useState({
    containsUL: false,
    containsLL: false,
    containsN: false,
    containsSC: false,
    contains8C: false,
    passwordMatch: false,
    allValid: false,
  });

  const {
    containsUL,
    containsLL,
    containsN,
    containsSC,
    contains8C,
    passwordMatch,
    allValid,
  } = validation;

  // labels and state boolean corresponding to each validation
  const validationChecks = [
    ["An uppercase letter (A-Z)", containsUL],
    ["A lowercase letter (a-z)", containsLL],
    ["A number (0-9)", containsN],
    ["A special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["Passwords match", passwordMatch],
  ];

  // handles all validation states
  const validatePassword = () => {
    // has uppercase letter
    if (createPassword.toLowerCase() !== createPassword)
      setValidation((prev) => ({ ...prev, containsUL: true }));
    else setValidation((prev) => ({ ...prev, containsUL: false }));

    // has lowercase letter
    if (createPassword.toUpperCase() !== createPassword)
      setValidation((prev) => ({ ...prev, containsLL: true }));
    else setValidation((prev) => ({ ...prev, containsLL: false }));

    // has number
    if (/\d/.test(createPassword))
      setValidation((prev) => ({ ...prev, containsN: true }));
    else setValidation((prev) => ({ ...prev, containsN: false }));

    // has special character
    // if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(createPassword))
    if (/[~`!#$%&*+=\-\]\\';,/{}|\\":<>]/g.test(createPassword))
      setValidation((prev) => ({ ...prev, containsSC: true }));
    else setValidation((prev) => ({ ...prev, containsSC: false }));

    // has 8 characters
    if (createPassword.length >= 8)
      setValidation((prev) => ({ ...prev, contains8C: true }));
    else setValidation((prev) => ({ ...prev, contains8C: false }));

    // passwords match
    if (createPassword !== "" && createPassword === confirmPassword)
      setValidation((prev) => ({ ...prev, passwordMatch: true }));
    else setValidation((prev) => ({ ...prev, passwordMatch: false }));

    // all validations passed
    if (
      containsUL &&
      containsLL &&
      containsN &&
      containsSC &&
      contains8C &&
      passwordMatch
    )
      setValidation((prev) => ({ ...prev, allValid: true }));
    else setValidation((prev) => ({ ...prev, allValid: false }));
  };

  const validationSchema_oldPassword = yup.object().shape({
    oldpassword: yup.string().min(8).required("Incorrect password"),
  });

  return (
    <Styles className="App">
      {!oldPassword ? (
        <Formik
          initialValues={{
            oldpassword: "",
          }}
          validationSchema={validationSchema_oldPassword}
          onSubmit={async ({ oldpassword }) => {}}
        >
          {({ handleChange, values: { oldpassword } }) => (
            <Form>
              <Flex margin="0 0 30px 0" justify="flex-start" warning>
                <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
                  For security reasons, provide your old password
                </Paragraph>
              </Flex>

              <Grid className="input-container" gap="18px">
                <Flex justify="space-between">
                  <Flex width="calc( 50% - 10px )">
                    <Flex
                      className="input-wrap"
                      flexDir="column"
                      align="stretch"
                    >
                      <label htmlFor="oldpassword">Old Password</label>
                      <InputStyles>
                        <Field
                          type="password"
                          name="oldpassword"
                          placeholder="oldpassword"
                          id="oldpassword"
                          value={oldpassword}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="oldpassword"
                          component="div"
                          className="error"
                        />
                      </InputStyles>
                    </Flex>
                  </Flex>
                </Flex>
              </Grid>
            </Form>
          )}
        </Formik>
      ) : null}

      {oldPassword ? (
        <ComfirmPassword
          validatePassword={validatePassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          setCreatePassword={setCreatePassword}
          createPassword={createPassword}
          validationChecks={validationChecks}
          allValid={allValid}
        />
      ) : null}
    </Styles>
  );
};

export default Profile;
