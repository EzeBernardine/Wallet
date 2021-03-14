import { Styles } from "./styles";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Paragraph,
  Span,
  Header5,
} from "../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { WithdrawalIcon } from "../../../assest/svg";
import Layout from "../../../UI_Components/Layout";

const Withdraw = () => {
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
                      Withdrawal
                    </Header5>
                  </Flex>
                  <Paragraph
                    color="#2b180d"
                    spacing=".025rem"
                    lineHeight="25px"
                  >
                    Ensure you do have enought money in your wallet before you
                    can withdraw
                  </Paragraph>
                </Flex>

                <Grid className="input-container" gap="25px">
                  <Flex justify="space-between">
                    <Flex width="calc( 50% - 10px)">
                      <Flex>
                        <Grid className="input-wrap">
                          <label htmlFor="cardnumber">Amount</label>
                          <Field
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            id="cardnumber"
                          />
                        </Grid>
                        <ErrorMessage name="amount" component="div" />
                      </Flex>
                    </Flex>

                    <Flex width="calc( 50% - 10px)">
                      <Flex>
                        <Grid className="input-wrap">
                          <label htmlFor="cardnumber">Destination Account</label>
                          <Field
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            id="cardnumber"
                          />
                        </Grid>
                        <ErrorMessage name="amount" component="div" />
                      </Flex>
                    </Flex>
                  </Flex>

                  <div>
                    <Flex className="input-wrap" justify="space-between">
                      <label htmlFor="cardnumber">
                        Select account to debite
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

                  <div>
                    <Flex className="input-wrap" justify="space-between">
                      <label htmlFor="cardnumber">Enter Narration</label>
                      <Field
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        component="textarea"
                        id="cardnumber"
                      />
                    </Flex>
                    <ErrorMessage name="amount" component="div" />
                  </div>

                  {/* ------------------button section-------------- */}
                  <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                    <button type="submit" padding="15px 30px">
                      <Flex>
                        <Span
                          lineHeight="15px"
                          color={"#fff"}
                          className="drawerText"
                        >
                          Withdraw
                        </Span>

                        <Span lineHeight="15px" color={"#fff"}>
                          <WithdrawalIcon width="20px" height="20px" />
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

export default Withdraw;
