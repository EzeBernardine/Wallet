import { Styles } from "./styles";
import { Flex, Grid } from "../../UI_Components/Box/styles";
import { Paragraph, Header4 } from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../../lib/api";
import { useHistory } from "react-router-dom";
import Alert from "../../UI_Components/Alert";
import { useState } from "react";
import useLocalStorageHook from "../../../lib/costomeHook";

const Login = () => {
  let history = useHistory();
  const { state, setState } = useLocalStorageHook("token");
  const [loginStaus, setLoginStaus] = useState("");

  const validationSchema = yup.object().shape({
    username: yup.string().min(2).required("Provide a name"),
    password: yup.string().min(2).required("Provide valid password"),
  });
  return (
    <Styles className="Login">
      <Flex margin="20px auto" maxWidth="600px" justify="flex-start">
        <Link to="./">
          <Header4 color="#673a1e" bold>
            Wallet
          </Header4>
        </Link>

        {loginStaus.length > 0 && (
          <Flex margin="20px auto 0" maxWidth="600px" justify="flex-start">
            <Alert type="error">
              <Paragraph>{loginStaus}</Paragraph>
            </Alert>
          </Flex>
        )}
      </Flex>

      <Flex align="stretch" margin="70px 0">
        <Flex width="100%">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async ({ username, password }) => {
              await API.post("user/login", {
                username,
                password,
              })
                .then(({ data }) => {
                  setState(data.token);
                  history.push("./dashboard");
                })
                .catch((err) => setLoginStaus(err.response.data.message));
            }}
          >
            {({ handleChange, values: { username, password } }) => (
              <Form>
                <Header4 color="#3e3936" lineHeight="5rem">
                  Login
                </Header4>
                <Paragraph
                  color="#2b180d"
                  size="14px"
                  lineHeight="24px"
                  spacing=".052rem"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                </Paragraph>

                <Grid className="input-container" gap="18px">
                  <div>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                </Grid>

                <div className="btn">
                  {/* <Link to="./dashboard"> */}
                  <button type="submit" padding="15px 30px">
                    Submit
                  </button>
                  {/* </Link> */}
                </div>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Login;
