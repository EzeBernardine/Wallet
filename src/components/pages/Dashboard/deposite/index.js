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
import { DepositeIcon } from "../../../assest/svg";
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

              <Grid className="input-container" gap="25px">
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
                          <ErrorMessage name="comment" component="div" />
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
  );
};

export default Deposite;
