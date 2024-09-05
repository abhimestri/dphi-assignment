import moment from "moment";
import Form from "react-bootstrap/Form";

interface FormFieldProps {
  formFieldData: any;
  formData: any;
  onChange: (data?: any) => void;
}

const FormField = ({ onChange, formFieldData, formData }: FormFieldProps) => {
  const getValue = (name: any) => {
    if (name === "expiryDate" || name === "startDate") {
      return formData[name] ? moment(formData[name]).format("YYYY-MM-DD") : "";
    } else {
      return formData[name];
    }
  };
  return (
    <div
      className={`mb-4 ${
        formFieldData?.props?.name === "description" ? "!w-[54vw]" : ""
      }`}
    >
      <label className="mb-3">{formFieldData?.label}</label>
      <Form.Control
        {...formFieldData?.props}
        onChange={onChange}
        value={getValue(formFieldData?.props?.name)}
      />
      <Form.Control.Feedback type="invalid">
        {formFieldData?.errorMessage}
      </Form.Control.Feedback>
    </div>
  );
};

export default FormField;
