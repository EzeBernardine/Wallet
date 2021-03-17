import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import {
  Span,
  Header5,
  Paragraph,
} from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";

const Profile = () => {
  const [tabType, setTabType] = useState("Profile Update");

  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    accountnumber: yup.string().min(2).required("Provide valid email"),
    CVV: yup.string().min(4).max(4).required("Provide valid CVV"),
  });

  return (
    <Styles className="App">
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async () => []}
      >
        {() => (
          <Form>
            <Flex margin="0 0 30px 0" justify="flex-start" warning>
              <Paragraph color="#2b180d" spacing=".015rem" lineHeight="22px">
                Transfers on this platform can be either directly, ie to another
                account user, or to the bank. Just fill in the form and you are
                good to go.
              </Paragraph>
            </Flex>

            <Grid className="input-container" gap="18px">
              <Flex justify="space-between">
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="cardnumber">Name</label>
                    <Field
                      type="text"
                      name="amount"
                      placeholder="Name"
                      id="cardnumber"
                    />
                  </Flex>
                  <ErrorMessage name="amount" component="div" />
                </Flex>
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="cardnumber">Username</label>
                    <Field
                      type="text"
                      name="amount"
                      placeholder="Username"
                      id="cardnumber"
                    />
                  </Flex>
                  <ErrorMessage name="amount" component="div" />
                </Flex>
              </Flex>

              <Flex justify="space-between">
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="cardnumber">City</label>
                    <Field
                      type="text"
                      name="amount"
                      placeholder="Name"
                      id="cardnumber"
                    />
                  </Flex>
                  <ErrorMessage name="amount" component="div" />
                </Flex>
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="cardnumber">Phone number</label>
                    <Field
                      type="text"
                      name="amount"
                      placeholder="Username"
                      id="cardnumber"
                    />
                  </Flex>
                  <ErrorMessage name="amount" component="div" />
                </Flex>
              </Flex>

              <div>
                <Flex className="input-wrap" justify="space-between">
                  <label htmlFor="comment">Address</label>
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
                <button type="submit" padding="15px 30px" onClick={() => []}>
                  <Flex>
                    <Span
                      lineHeight="15px"
                      color={"#fff"}
                      className="drawerText"
                    >
                      Save
                    </Span>

                    <Span lineHeight="15px" color={"#fff"}>
                      {/* <TransferIcon width="20px" height="20px" /> */}
                    </Span>
                  </Flex>
                </button>
              </Flex>
            </Grid>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default Profile;
