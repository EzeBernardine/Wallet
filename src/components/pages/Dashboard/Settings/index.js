import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Paragraph,
  Span,
  Header5,
} from "../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { SettingsIcon } from "../../../assest/svg";
import Layout from "../../../UI_Components/Layout";

const Settings = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    accountnumber: yup.string().min(2).required("Provide valid email"),
    CVV: yup.string().min(4).max(4).required("Provide valid CVV"),
  });
  return (
    <Layout>
      <Styles className="App">
        <Flex justify="flex-start">
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async () => {}}
          >
            {() => (
              <Form>
                <Flex margin="0 0 30px 0" justify="flex-start" warning>
                  <Header5 color="#de8430" spacing=".4rem" bold>
                    Settings
                  </Header5>
                </Flex>

                <Grid className="input-container" gap="25px">
                  <Flex justify="space-between">
                    <Flex
                      width="calc( 50% - 10px)"
                      className="input-wrap"
                      justify="space-between"
                    >
                      <label htmlFor="cardnumber">Name</label>
                      <Field
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        id="cardnumber"
                      />
                      <ErrorMessage name="amount" component="div" />
                    </Flex>
                  </Flex>

                  {/* ------------------button section-------------- */}
                  <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                    <button type="submit" padding="15px 30px">
                      <Flex>
                        <Span
                          lineHeight="15px"
                          color={"#fff"}
                          className="drawerText"
                        >
                          Save Changes
                        </Span>
                      </Flex>
                    </button>
                  </Flex>
                </Grid>
              </Form>
            )}
          </Formik>
        </Flex>
      </Styles>
    </Layout>
  );
};

export default Settings;
