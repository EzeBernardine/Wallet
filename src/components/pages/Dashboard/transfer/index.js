import { Styles } from "./styles";
// import { useState } from "react";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Paragraph,
  Header5,
  Bold,
  Span,
} from "../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TransferIcon } from "../../../assest/svg";
import Recepient from "../../../assest/black-beautiful-ladies-smiling 1.png";
import Alert from "../../../UI_Components/Alert";
import Layout from "../../../UI_Components/Layout";

const Transfer = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    accountnumber: yup.string().min(2).required("Provide valid email"),
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
                      Transfers
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

                <Flex justify="flex-start" margin="30px 0">
                  {true ? (
                    <Alert type="success">
                      <Flex justify="flex-start" className="recipient">
                        <Frame
                          height="70px"
                          width="70px"
                          className="recipient-image"
                        >
                          <img src={Recepient} alt="Anonymous" />
                        </Frame>

                        <Flex
                          width="max-content"
                          flexDir="column"
                          margin="0 0 0 10px"
                          className="recipient-more-details"
                          align="flex-start"
                        >
                          <Span color="#2b180d" size="14px">
                            You are about to transfer
                            <Bold color="#2bac20"> #20000</Bold>
                          </Span>
                          <Span color="#2b180d" size="14px">
                            Recipient:{" "}
                            <Bold color="#2bac20">Anonymous Obinna</Bold>
                          </Span>
                        </Flex>
                      </Flex>
                    </Alert>
                  ) : (
                    <Alert type="warning">
                      <Flex justify="flex-start">
                        <Paragraph>Invalid recipient</Paragraph>
                      </Flex>
                    </Alert>
                  )}
                </Flex>

                <Grid className="input-container" gap="18px">
                  <div>
                    <Flex className="input-wrap" justify="space-between">
                      <label htmlFor="cardnumber">Amount</label>
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
                    <Flex className="input-wrap"  justify="space-between">
                      <label htmlFor="accountnumber">Recepient Account</label>
                      <Field
                        type="text"
                        name="accountnumber"
                        id="accountnumber"
                        placeholder="Account Number"
                      />
                    </Flex>
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div>
                    <Flex className="input-wrap"  justify="space-between">
                      <label htmlFor="comment">Comment</label>
                      <Field
                        type="text"
                        name="comment"
                        id="comment"
                        component="textarea"
                        placeholder="Account Number"
                      />
                    </Flex>
                    <ErrorMessage name="comment" component="div" />
                  </div>

                  {/* ------------------button section-------------- */}
                  <Flex className="btn" justify="flex-end" margin="23px 0 0 0">
                    <button
                      type="submit"
                      padding="15px 30px"
                      onClick={() => []}
                    >
                      <Flex>
                        <Span
                          lineHeight="15px"
                          color={"#fff"}
                          className="drawerText"
                        >
                          Transfer
                        </Span>

                        <Span lineHeight="15px" color={"#fff"}>
                          <TransferIcon width="20px" height="20px" />
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

export default Transfer;
