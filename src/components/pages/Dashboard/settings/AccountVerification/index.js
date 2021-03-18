import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { InputStyles } from "../../../../UI_Components/Input/styles";

const AccountVerification = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().min(2).required("Provide a name"),
    username: yup.string().min(2).required("Provide your username"),
    city: yup.string().min(2).required("Provide your city"),
  });

  return (
    <Styles className="App">
      <Formik
        initialValues={{
          name: "",
          username: "",
          city: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async () => []}
      >
        {({ handleChange, values: { username, name, city } }) => (
          <Form>
            <Flex margin="0 0 30px 0" justify="flex-start" warning>
              <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
                Uploading your ID card will enable you perform transactions on
                the site.
              </Paragraph>
            </Flex>

            <Grid className="input-container" gap="10px">
              <Flex justify="space-between">
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="name">Name</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </InputStyles>
                  </Flex>
                </Flex>
              
              </Flex>

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

export default AccountVerification;
