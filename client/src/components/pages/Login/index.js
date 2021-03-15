import { Styles } from "./styles";
import { Flex, Grid } from "../../UI_Components/Box/styles";
import { Paragraph, Header4 } from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import axios from 'axios'


const Login = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().min(2).required("Provide a name"),
    email: yup.string().min(2).email().required("Provide valid email"),
  });
  return (
    <Styles className="Login">
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
              name: "",
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async () => {}}
          >
            {({values: {name, email, accountnumber}}) => (
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
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div>
                    <Field type="text" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                </Grid>

                <div className="btn">
                  <Link to="./dashboard">
                    <button type="submit" padding="15px 30px">
                      Submit
                    </button>
                  </Link>
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
