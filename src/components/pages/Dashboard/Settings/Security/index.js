import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { InputStyles } from "../../../../UI_Components/Input/styles";

const Profile = () => {
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .min(8)
      .required("Provide a strong password"),
    confirmpassword: yup.string().min(2).required("Password does not match"),
  });

  return (
    <Styles className="App">
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
              <Paragraph color="#2b180d" spacing=".015rem" lineHeight="22px">
                Create a new strong password
              </Paragraph>
            </Flex>

            <Grid className="input-container" gap="18px">
              <Flex justify="space-between">
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
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
                  <Flex className="input-wrap" flexDir="column" align="stretch">
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
    </Styles>
  );
};

export default Profile;
