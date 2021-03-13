import { Styles } from "./styles";
// import { useState } from "react";
import { Flex, Frame, Grid } from "../../../UI_Components/Box/styles";
import {
  Header2,
  Paragraph,
  Header4,
  Bold,
  Span,
  Header3,
} from "../../../UI_Components/FontSize/styles";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TransferIcon } from "../../../assest/svg";
import Recepient from "../../../assest/black-beautiful-ladies-smiling 1.png";

const Deposite = () => {
  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    accountnumber: yup.string().min(2).required("Provide valid email"),
  });
  return (
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
              <Flex margin="0 0 30px 0">
                <Header4
                  color="#2b180d"
                  // size="14px"
                  // lineHeight="24px"
                  spacing="1.02px"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                </Header4>
              </Flex>

              <Flex justify="flex-start" margin="30px 0" className="recipient">
                <Frame height="70px" width="70px" className="recipient-image">
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
                    You are about to transfer{" "}
                    <Bold color="#3ede30"> #20000</Bold>
                  </Span>
                  <Span color="#2b180d" size="14px">
                    Recipient: <Bold color="#3ede30">Anonymous Obinna</Bold>
                  </Span>
                </Flex>
              </Flex>

              <Grid className="input-container" gap="18px">
                <div>
                  <Flex className="input-wrap">
                    <label htmlFor="cardnumber">
                      How much do you want to deposie
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
                  <Flex className="input-wrap">
                    <label htmlFor="accountnumber">
                      Enter account number of recepient
                    </label>
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
                  <Flex className="input-wrap">
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
                  <button type="submit" padding="15px 30px">
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
  );
};

export default Deposite;
