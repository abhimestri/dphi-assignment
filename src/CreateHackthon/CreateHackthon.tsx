import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const CreateHackthon = () => {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    expiryDate: "",
    startDate: "",
    description: "",
    level: "",
    image: "",
  });

  const handleChange = (data: any) => {
    const { name, value } = data?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log({ formData });
  };

  return (
    <div>
      <div className="bg-lightgrey px-20 py-10 font-bold text-[24px]">
        Challenge Details
      </div>
      <div className="px-20 mt-10">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          noValidate
          validated={validated}
        >
          <div className="mb-4">
            <label className="mb-3">Challenge Name</label>
            <Form.Control
              required
              name="title"
              style={{
                width: "28%",
              }}
              type="text"
              value={formData?.title}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </div>
          <div className="mb-4">
            <label className="mb-3">Start Date</label>
            <Form.Control
              type="date"
              name="startDate"
              placeholder="Add start date"
              style={{
                width: "28%",
              }}
              onChange={handleChange}
              value={formData?.startDate}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Start date.
            </Form.Control.Feedback>
          </div>
          <div className="mb-4">
            <label className="mb-3">End Date</label>
            <Form.Control
              type="date"
              name="expiryDate"
              placeholder="Add start date"
              style={{
                width: "28%",
              }}
              required
              onChange={handleChange}
              value={formData?.expiryDate}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Expiry date.
            </Form.Control.Feedback>
          </div>
          <div className="mb-4">
            <label className="mb-3">Description</label>
            <Form.Control
              as="textarea"
              placeholder="Add start date"
              name="description"
              style={{
                width: "48%",
              }}
              rows={10}
              id="startDate"
              onChange={handleChange}
              value={formData?.description}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Description.
            </Form.Control.Feedback>
          </div>
          <div className="mb-4">
            <p className="mb-4">Image</p>
            <div className="mb-4 bg-[#F4F4F4] rounded-[5px] w-fit border-[1px] px-2 py-[3px] border-[#D9D9D9]">
              <label
                className="px-20 py-[14px] cursor-pointer"
                htmlFor="file-upload"
              >
                Upload
              </label>
              <Form.Control
                id="file-upload"
                type="file"
                hidden
                name="image"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a image.
              </Form.Control.Feedback>
            </div>
          </div>
          <div className="mb-4 mt-6">
            <label className="mb-3">Level Type</label>
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "17%",
                border: "1px solid #D9D9D9",
              }}
              name="level"
              onChange={handleChange}
              value={formData?.level}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </div>
          <Button
            className="py-[12px] font-medium px-8 mt-4 mb-6 bg-darkgreen border-0 rounded-[10px] hover:bg-darkgreen"
            type="submit"
          >
            Create Challenge
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateHackthon;
