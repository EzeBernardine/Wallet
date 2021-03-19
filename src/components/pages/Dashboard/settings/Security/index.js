import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { InputStyles } from "../../../../UI_Components/Input/styles";
import API from "../../../../../lib/api";
import useLocalStorageHook from "../../../../../lib/customHook";
import { useState, useEffect } from "react";

const Profile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const { state: token } = useLocalStorageHook("token");

  const validationSchema = yup.object().shape({
    password: yup.string().min(8).required("Provide a strong password"),
    confirmpassword: yup.string().min(2).required("Password does not match"),
  });
  const validationSchema_oldPassword = yup.object().shape({
    oldpassword: yup.string().min(8).required("Incorrect password"),
  });

  const getOldPassword = async () => {
    await API.get("user/myprofile", {
      headers: { Authorization: `${token.replace(/['"]+/g, "")}` },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getOldPassword()
  }, [])

  return (
    <Styles className="App">
      {oldPassword.length <= 0 ? (
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

                {/* ------------------button section-------------- */}
                <Flex
                  className="btn oldPassword"
                  justify="flex-end"
                  margin="23px 0 0 0"
                >
                  <button type="submit" padding="15px 30px" onClick={() => []}>
                    <Flex>
                      <Span
                        lineHeight="15px"
                        color={"#fff"}
                        className="drawerText"
                      >
                        Submit
                      </Span>
                    </Flex>
                  </button>
                </Flex>
              </Grid>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            password: "",
            confirmpassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async () => []}
        >
          {({ handleChange, values: { password, confirmpassword } }) => (
            <Form>
              <Flex margin="0 0 30px 0" justify="flex-start" warning>
                <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
                  Create a new strong password
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
                      <label htmlFor="password">Create Password</label>
                      <InputStyles>
                        <Field
                          type="password"
                          name="password"
                          placeholder="password"
                          id="password"
                          value={password}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                      </InputStyles>
                    </Flex>
                  </Flex>
                  <Flex width="calc( 50% - 10px )">
                    <Flex
                      className="input-wrap"
                      flexDir="column"
                      align="stretch"
                    >
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      <InputStyles>
                        <Field
                          type="password"
                          name="confirmpassword"
                          value={confirmpassword}
                          placeholder="password"
                          id="confirmpassword"
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="confirmpassword"
                          component="div"
                          className="error"
                        />
                      </InputStyles>
                    </Flex>
                  </Flex>
                </Flex>

                {/* ------------------button section-------------- */}
                <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                  <button type="submit" padding="15px 30px" onClick={() => []}>
                    <Flex>
                      <Span
                        lineHeight="15px"
                        color={"#fff"}
                        className="drawerText"
                      >
                        Change Password
                      </Span>
                    </Flex>
                  </button>
                </Flex>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </Styles>
  );
};

export default Profile;
