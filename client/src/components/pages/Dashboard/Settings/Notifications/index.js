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
import Switch from "../../../../UI_Components/Switch";

const Notifications = () => {
  return (
    <Styles className="App">
      <Flex margin="50px 0">
        <Header5 color="#5b5551">
          Get email notifications for all your transactons?
        </Header5>
        <Flex width="max-content" margin="0 0 0 20px">
          <Switch
            initialState={true}
            color="#de8430"
            click={(checked) => console.log(checked)}
          />
        </Flex>
      </Flex>
    </Styles>
  );
};

export default Notifications;
