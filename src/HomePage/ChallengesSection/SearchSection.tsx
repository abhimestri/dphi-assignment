import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as SearchIcon } from "../../assets/icons/carbon_search.svg";

const SearchSection = () => {
  return (
    <div className="poppinsmedium bg-primarydark px-20 py-20">
      <div>
        <p className="text-white text-center text-[28px] mb-16">
          Explore Challenges
        </p>
        <div className="flex gap-x-8 w-[60%] m-auto">
          <InputGroup
            className="mb-3 !rounded-[12px]"
            style={{
              borderRadius: "12px",
              height: "50px",
            }}
          >
            <InputGroup.Text
              id="basic-addon1"
              className="border-none !pr-0 pl-10"
            >
              <SearchIcon />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="border-none"
            />
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="bg-white text-black border-none border-0"
              style={{ borderRadius: "10px", width: "100px", height: "50px" }}
            >
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
