import { Styles } from "./styles";
import { Flex, Grid } from "../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { InputStyles } from "../../../../UI_Components/Input/styles";
import API from "../../../../../lib/api";
import Alert from "../../../../UI_Components/Alert";
import useLocalStorageHook from "../../../../../lib/customHook";
import { useState, useEffect } from "react";

const Profile = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().min(2),
    username: yup.string().min(2),
    city: yup.string().min(2),
    phone: yup.number().min(10),
    Address: yup.string().min(10),
  });
  const { state: token } = useLocalStorageHook("token");
  const [currentUser, setCurrentUser] = useState("");
  const [status, setStatus] = useState(false);

  const getCurrentUserData = () => {
    API.get("user/getuser", {
      headers: {
        Authorization: `${token.replace(/['"]+/g, "")}`,
      },
    })
      .then(({ data }) => setCurrentUser(data.data.username))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentUserData();
  });
  return (
    <Styles className="App">
      <Formik
        initialValues={{
          name: "",
          username: "",
          city: "",
          phone: "",
          Address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (
          { username, name, city, Address, phone },
          { resetForm }
        ) => {
          await API.post(
            "user/createProfile",
            { name, city, Address, phone },
            {
              headers: { Authorization: `${token.replace(/['"]+/g, "")}` },
            }
          )
            .then(({ data }) => {
              setStatus("");
              setStatus(data.message);
              resetForm();
            })
            .catch((err) => console.log(err));
        }}
      >
        {({
          handleChange,
          values: { username, name, city, Address, phone },
        }) => (
          <Form>
            <Flex margin="0 0 30px 0" justify="flex-start" warning>
              <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
                Transfers on this platform can be either directly, ie to another
                account user, or to the bank. Just fill in the form and you are
                good to go.
              </Paragraph>
            </Flex>

            {status ? (
              <Alert type="success" duration="5000">
                <Paragraph> {status}</Paragraph>
              </Alert>
            ) : null}

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
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="name">Username</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="username"
                        placeholder={currentUser}
                        id="username"
                        value={username}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error"
                      />
                    </InputStyles>
                  </Flex>
                </Flex>
              </Flex>

              <Flex justify="space-between">
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="city">City</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="city"
                        placeholder="City"
                        id="city"
                        value={city}
                        onChange={handleChange}
                      />
                      <ErrorMessage name="city" component="div" />
                    </InputStyles>
                  </Flex>
                </Flex>
                <Flex width="calc( 50% - 10px )">
                  <Flex className="input-wrap" flexDir="column" align="stretch">
                    <label htmlFor="phone">Phone number</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        id="phone"
                        value={phone}
                        onChange={handleChange}
                      />
                      <ErrorMessage name="phone" component="div" />
                    </InputStyles>
                  </Flex>
                </Flex>
              </Flex>

              <div>
                <Flex className="input-wrap" justify="space-between">
                  <label htmlFor="Address">Address</label>
                  <InputStyles>
                    <Field
                      type="text"
                      name="Address"
                      id="Address"
                      component="textarea"
                      placeholder="Address"
                      value={Address}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="Address" component="div" />
                  </InputStyles>
                </Flex>
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
