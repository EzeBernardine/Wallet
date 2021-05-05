import { Styles } from "./styles";
import { Flex, Grid, Frame } from "../../../UI_Components/Box/styles";
import {
  Paragraph,
  Span,
  Bold,
  Header5,
} from "../../../UI_Components/FontSize/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { BuyingIcon, ArrowDownIcon } from "../../../assest/svg";
import Layout from "../../../UI_Components/Layout";
import { InputStyles } from "../../../UI_Components/Input/styles";
import GLO from "../../../assest/glo.png";
import Airtel from "../../../assest/airtel.png";
import Mobile from "../../../assest/9mobile.png";
import MTN from "../../../assest/mtn.png";

const BuyAirtime = () => {
  const validationSchema = yup.object().shape({
    amount: yup.number().required("Provide an amount"),
    network: yup.string().required("Select an option"),
  });

  const networks = {
    'Airtel': Airtel,
    'GLO': GLO,
    "9mobile": Mobile,
    'MTN': MTN,
  };

  return (
    <Layout>
      <Styles className="App">
        <Flex justify="flex-start">
          <Formik
            initialValues={{
              amount: "",
              network: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async ({ amount, network }) => {
              // console.log(network, amount);
            }}
          >
            {({ handleChange, values: { network, amount } }) => (
              <Form>
                <Flex margin="0 0 30px 0" justify="flex-start" warning>
                  <Flex margin="0 0 30px 0" justify="flex-start">
                    <Header5 color="#de8430" spacing=".4rem" bold>
                      Buy Airtime
                    </Header5>
                  </Flex>
                  <Paragraph
                    color="#2c2d2d"
                    spacing=".025rem"
                    lineHeight="25px"
                  >
                    Transfers on this platform can be either directly, ie to
                    another account user, or to the bank. Just fill in the form
                    and you are good to go.
                  </Paragraph>
                </Flex>

                <Grid className="input-container" gap="25px" gridCol="1fr 1fr">
                  <Flex className="input-wrap" align="stretch" flexDir="column">
                    <label htmlFor="cardnumber">Amount</label>
                    <InputStyles>
                      <Field
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        id="cardnumber"
                        value={amount}
                        onChange={handleChange}
                      />
                      <ErrorMessage name="amount" component="div" />
                    </InputStyles>
                  </Flex>

                  <Flex
                    className="input-wrap network"
                    align="stretch"
                    flexDir="column"
                  >
                    <label htmlFor="cardnumber">
                      Select your service provider
                    </label>
                    <InputStyles>
                      {network ? (
                        <Frame width="20px" height="20px" className="frame">
                          <img
                            src={
                              network === "Airtel"
                                ? Airtel
                                : network === "GLO"
                                ? GLO
                                : network === "9mobile"
                                ? Mobile
                                : network === "MTN"
                                ? MTN
                                : ""
                            }
                            alt="mtn"
                          />
                        </Frame>
                      ) : (
                        ""
                      )}
                      <Field
                        as="select"
                        name="network"
                        id="cardnumber"
                        value={network}
                      >
                        <option defaultValue="">Select</option>
                        <option value="MTN">MTN</option>
                        <option value="Airtel">Airtel</option>
                        <option value="GLO">GLO</option>
                        <option value="9mobile">9mobile</option>
                      </Field>
                      <ArrowDownIcon
                        width="15px"
                        height="15px"
                        color=" #b2aabd"
                      />
                      <ErrorMessage name="network" component="div" />
                    </InputStyles>
                  </Flex>
                </Grid>

                <Flex margin="20px 0 0">
                  <Paragraph color="#5b5551">
                    Your available balance is:
                    <Bold color="#673a1e"> 2000</Bold>
                  </Paragraph>
                </Flex>

                {/* ------------------button section-------------- */}
                <Flex className="btn" margin="23px 0 0 0">
                  <button type="submit" padding="15px 30px">
                    <Flex>
                      <Span
                        lineHeight="15px"
                        color={"#fff"}
                        className="drawerText"
                      >
                        BuyAirtime
                      </Span>

                      <Span lineHeight="15px" color={"#fff"}>
                        <BuyingIcon
                          width="20px"
                          height="20px"
                          color="#673a1e"
                        />
                      </Span>
                    </Flex>
                  </button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      </Styles>
    </Layout>
  );
};

export default BuyAirtime;
