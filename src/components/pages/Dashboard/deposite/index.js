import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Paragraph,
  Span,
  Header5,
} from "../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { DepositeIcon } from "../../../assest/svg";
import Layout from "../../../UI_Components/Layout";

const Deposite = () => {
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
            {({}) => (
              <Form>
                <Flex margin="0 0 30px 0" justify="flex-start" warning>
                  <Flex margin="0 0 30px 0" justify="flex-start">
                    <Header5 color="#de8430" spacing=".4rem" bold>
                      Deposite
                    </Header5>
                  </Flex>
                  <Paragraph
                    color="#2b180d"
                    spacing=".025rem"
                    lineHeight="25px"
                  >
                    Transfers on this platform can be either directly, ie to
                    another account user, or to the bank. Just fill in the form
                    and you are good to go.
                  </Paragraph>
                </Flex>

                <Grid className="input-container" gap="25px">
                  <div>
                    <Flex className="input-wrap">
                      <label htmlFor="cardnumber">
                        How much do you want to deposite
                      </label>
                      <Field
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        id="cardnumber"
                      />
                    </Flex>
                    <ErrorMessage name="amount" component="div" />
                  </div>

                  <fieldset>
                    <legend color="#2b180d" spacing="1.02px">
                      Card details
                    </legend>

                    <Grid className="input-container" gap="18px">
                      <Flex justify="flex-start">
                        <label htmlFor="cardnumber">Enter card number</label>
                        <Flex className="input-wrap">
                          <Field
                            type="text"
                            name="cardnumber"
                            id="cardnumber"
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                          <ErrorMessage name="cardnumber" component="div" />
                        </Flex>
                      </Flex>

                      <Flex justify="space-between">
                        <Flex width="calc( 50% - 10px )" justify="flex-start">
                          <label htmlFor="comment">EXP Date</label>
                          <Flex className="input-wrap">
                            <Field
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="EXP Date"
                            />
                            <ErrorMessage name="comment" component="div" />
                          </Flex>
                        </Flex>

                        <Flex width="calc( 50% - 10px )" justify="flex-start">
                          <label htmlFor="comment">CVV</label>
                          <Flex className="input-wrap">
                            <Field
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="CVV"
                            />
                            <ErrorMessage name="CVV" component="div" />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Grid>
                  </fieldset>

                  {/* ------------------button section-------------- */}
                  <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                    <button type="submit" padding="15px 30px">
                      <Flex>
                        <Span
                          lineHeight="15px"
                          color={"#fff"}
                          className="drawerText"
                        >
                          Deposite
                        </Span>

                        <Span lineHeight="15px" color={"#fff"}>
                          <DepositeIcon width="20px" height="20px" />
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

export default Deposite;
