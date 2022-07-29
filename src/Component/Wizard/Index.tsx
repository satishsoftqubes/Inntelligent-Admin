import { FC, useState } from "react";

type WizardProps = {
  steps: any;
  setSteps: any;
};

const WizardView: FC<WizardProps> = ({ steps, setSteps }) => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };
  return (
    <div className="wizard-form">
      <div className="steps">
        <ul className="nav wizard-component mb-3 ">
          {steps.map((step, i) => {
            return (
              <li
                key={i}
                className={`${activeStep.key === step.key ? "active" : ""} ${
                  step.isDone ? "wizard-item done" : "wizard-item"
                }`}
              >
                <span>{step.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="step-component">{activeStep.component()}</div>
      <div className="btn-component">
        <button
          className="btn btn-primary me-2"
          type="button"
          value="Back"
          onClick={handleBack}
          disabled={steps[0].key === activeStep.key}
        >
          <i className="fa-light fa-arrow-left-long"></i>
          Back
        </button>
        <button
          className="btn btn-primary"
          type="button"
          value={steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"}
          onClick={handleNext}
        >
          {steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"}
          <i className="fa-light fa-arrow-right-long ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default WizardView;
