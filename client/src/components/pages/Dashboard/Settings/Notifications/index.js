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

const Settings = () => {
  const [tabType, setTabType] = useState("Profile Update");

  const validationSchema = yup.object().shape({
    title: yup.string().min(2).required("Provide title"),
    accountnumber: yup.string().min(2).required("Provide valid email"),
    CVV: yup.string().min(4).max(4).required("Provide valid CVV"),
  });

  return (
    <Styles className="App">
      
    </Styles>
  );
};

export default Settings;
