import { Styles } from "./styles";
import { Flex } from "../../UI_Components/Box/styles";
import {
  Header2,
  Paragraph,
  Header4,
} from "../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Registration = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    email: yup.string().min(2).email().required("Provide valid email"),
  });
  return (
    <Styles className="Registration">
      <Flex margin="20px auto" maxWidth="600px" justify="flex-start">
        <Link to="./">
          <Header4 color="#673a1e">Wallet</Header4>
        </Link>
      </Flex>

      <Flex align="stretch" margin="70px 0">
        {/* <Flex width='30%' height='100%' className='image'>
          <Frame width="100%" height="auto">
            <img src={Image} alt="" />
          </Frame>
        </Flex> */}

        <Flex width="100%">
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async () => {}}
          >
            {({}) => (
              <Form>
                <Header2 color="#3e3936" lineHeight="5rem">
                  Register
                </Header2>
                <Paragraph
                  color="#2b180d"
                  size="14px"
                  lineHeight="24px"
                  spacing="1.02px"
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

                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Account Number"
                    />
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

export default Registration;
