import React, {useEffect, useState} from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import Success from "./Success";
import FormTabs from "./FormTabs";
import {Container,Row,Col} from 'react-bootstrap';
// import {tabData} from "../assets/Sample Data/data";

const FormSteps = () => {
  const [stepCount, setStepCount] = useState(1);
  const [formData, setFormData] = useState({
    vacancy: {},
    workExprience: {},
    personaInformation: {},
  });
  const [tabItems, setTabItems] = useState([
    {
      id: 1,
      name: "Vacancies",
      status: false,
    },
    {
      id: 2,
      name: "Job Description",
      status: false,
    },
    {
      id: 3,
      name: "Work Exprience",
      status: false,
    },
    {
      id: 4,
      name: "Personal Details",
      status: false,
    },
    {
      id: 5,
      name: "Submit Application",
      status: false,
    },
  ]);
  const screenChanged = (type = "", data = {}) => {
    setStepCount((prev) => prev + 1);
    setFormData((prev) => {
      return {...prev, [type]: {...data}};
    });
    console.log("kld", data);
  };
  const screenBacked = (index) => {
    setStepCount((prev) => prev - 1);
  };
  return (
    <Container>
      <Row className="mb-5">
        <Col xs={12} lg={4}>
          <FormTabs stepCount={stepCount} tabItems={tabItems} />
        </Col>
        <Col xs={12} lg={8}>
          <div id='form-element'>
            <div id='multiform'>
              {(stepCount === 1 && (
                <FormStepOne
                  screenChanged={screenChanged}
                  screenBacked={screenBacked}
                />
              )) ||
                (stepCount === 2 && (
                  <FormStepTwo
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                    formData={formData}
                  />
                )) ||
                (stepCount === 3 && (
                  <FormStepThree
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 4 && (
                  <FormStepFour
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 5 && (
                  <FormStepFive
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 6 && (
                  <Success
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormSteps;
