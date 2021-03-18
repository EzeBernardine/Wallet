import { Styles } from "./styles";
import { Flex, Frame } from "../../../../UI_Components/Box/styles";
import { Span, Paragraph } from "../../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { UploadIcon } from "../../../../assest/svg";

const AccountVerification = () => {
  const validationSchema = yup.object().shape({
    idCard: yup.string().required("Provide a file"),
  });

  return (
    <Styles className="App">
      <Formik
        initialValues={{
          idCard: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async () => []}
      >
        {({ handleChange, values: { idCard } }) => (
          <Form>
            <Flex margin="0 0 30px 0" justify="flex-start" warning>
              <Paragraph color="#2c2d2d" spacing=".015rem" lineHeight="22px">
                Uploading your ID card will enable you perform transactions on
                the site.
              </Paragraph>
            </Flex>

            <div>
              <Flex
                className="input-wrap"
                align="stretch"
                justify="flex-start"
                margin="50px 0"
              >
                <label htmlFor="idCard">Choose a file</label>

                <Flex flexDir="column" margin="0 0 0 20px" width="200px">
                  <Flex className="upload" width="200px" height="150px">
                    <Field
                      type="file"
                      name="idCard"
                      placeholder="Choose a file"
                      id="idCard"
                      value={idCard}
                      onChange={handleChange}
                    />
                    <Flex width='max-content' flexDir='column'>
                      <Frame>
                        <UploadIcon
                          color="#e1d9d4"
                          width="40px"
                          height="40px"
                        />
                      </Frame>
                      <Span color="#e1d9d4">
                        {idCard ? idCard : "Choose a file"}
                      </Span>
                    </Flex>
                  </Flex>
                  <ErrorMessage
                    name="idCard"
                    component="div"
                    className="error"
                  />
                </Flex>
              </Flex>

              {/* ------------------button section-------------- */}
              <Flex justify="flex-start" margin="50px auto 0 0" className="btn">
                <button type="submit" padding="15px 30px" onClick={() => []}>
                  <Span lineHeight="15px" color={"#fff"} className="drawerText">
                    Upload
                  </Span>
                </button>
              </Flex>
            </div>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default AccountVerification;
