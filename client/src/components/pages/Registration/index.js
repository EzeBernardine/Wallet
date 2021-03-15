import { Styles } from "./styles";
import { Flex, Grid } from "../../UI_Components/Box/styles";
import {
  // Header2,
  Paragraph,
  Header4,
} from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import API from "../../../lib/api";

const Registration = () => {
  let history = useHistory();

  const validationSchema = yup.object().shape({
    username: yup.string().min(2).required("Provide a name"),
    password: yup.string().min(2).required("Provide valid password"),
  });
  return (
    <Styles className="Registration">
      <Flex margin="20px auto" maxWidth="600px" justify="flex-start">
        <Link to="./">
          <Header4 color="#673a1e" bold>
            Wallet
          </Header4>
        </Link>
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
              await API.post("user/register", {
                username,
                password,
              });

            
              history.push("/login");
            }}
          >
            {({ handleChange, values: { username, password } }) => (
              <Form>
                <Header4 color="#3e3936" lineHeight="5rem">
                  Register
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
                  {/* <Link to="./login"> */}
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

export default Registration;
