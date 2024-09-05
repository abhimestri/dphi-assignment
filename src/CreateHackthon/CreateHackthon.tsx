import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DefaultDataContext } from "../context";
import { ReactComponent as ImageIcon } from "../assets/icons/bi_image-fill.svg";
import { ReactComponent as RightIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/bxs_cloud-upload.svg";

import moment from "moment";
import { formFields } from "../utility";
import FormField from "../components/Form";
import { getStatus } from "../components/HackthonCard/HackthonCard";

const CreateHackthon = () => {
  const navigate = useNavigate();
  const isEditPage = useLocation()?.pathname?.split("/")[1] === "edit-hackthon";
  const params = useParams();
  const { hackthonList, setHackthonList }: any = useContext(DefaultDataContext);

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (data: any) => {
    const { name, value } = data?.target;
    if (name === "imageUrl") {
      const file = data.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader?.result });
      };
    } else if (name === "level") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value, level: "easy" });
    }
  };

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      if (isEditPage) {
        const updatedHackthonList = hackthonList?.map((data: any) => {
          if (data?.id === params?.id) {
            return {
              ...formData,
              status: getStatus(formData?.startDate, formData?.expiryDate)
                ?.title,
            };
          } else {
            return {
              ...data,
              status: getStatus(formData?.startDate, formData?.expiryDate)
                ?.title,
            };
          }
        });
        setHackthonList([...updatedHackthonList]);
      } else {
        setHackthonList([
          ...hackthonList,
          {
            ...formData,
            id: `${hackthonList?.length + 1}`,
            status: getStatus(formData?.startDate, formData?.expiryDate)?.title,
          },
        ]);
      }
      navigate("/");
    }
  };

  useEffect(() => {
    if (params?.id) {
      const editData = hackthonList?.filter(
        (data: any) => data?.id === params?.id
      )[0];
      setFormData({ ...editData });
    }
  }, [params?.id, hackthonList]);

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
          <div className="w-full sm:w-[300px]">
            {formFields?.map((field) => {
              return (
                <FormField
                  formData={formData}
                  formFieldData={field}
                  onChange={handleChange}
                />
              );
            })}
          </div>
          <div className="mb-4">
            <p className="mb-4">Image</p>
            <div className="mb-4 bg-[#F8F9FD] rounded-[5px] w-fit px-2 py-[3px]">
              {isEditPage ? (
                <div className="px-3 py-4">
                  <img
                    src={formData?.imageUrl}
                    alt=""
                    className="w-full h-[124px] mb-4 rounded-[15px]"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-x-3">
                      <ImageIcon />
                      <p>Change image</p>
                      <RightIcon />
                    </div>
                  </label>
                </div>
              ) : (
                <>
                  <label
                    className="px-20 py-[14px] cursor-pointer"
                    htmlFor="file-upload"
                  >
                    <div className="flex justify-center items-center gap-x-2">
                      <p>Upload</p>
                      <UploadIcon />
                    </div>
                  </label>
                  <Form.Control
                    id="file-upload"
                    type="file"
                    hidden
                    name="imageUrl"
                    onChange={handleChange}
                    required
                    accept="image/png, image/gif, image/jpeg"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a image.
                  </Form.Control.Feedback>
                </>
              )}
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
              <option selected value="easy">
                Easy
              </option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </div>
          <Button
            className="py-[12px] font-medium px-8 mt-4 mb-6 bg-darkgreen border-0 rounded-[10px] hover:bg-darkgreen"
            type="submit"
          >
            {params?.id ? "Save changes" : "Create Challenge"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateHackthon;
