import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as SearchIcon } from "../../assets/icons/carbon_search.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { ChallengeSectionProps } from "./ChallengeSection";
import FilterChip from "../../components/FilterChip/FilterChip";
import { filterList } from "../../utility";

const SearchSection = ({
  isFilterDropdownOpen,
  setIsFilterDropdownOpen,
  appliedFilters,
  setAppliedFilters,
  setSearchHackthon,
}: ChallengeSectionProps) => {
  const handelAddFilter = (event: any) => {
    const { name } = event?.target;
    // reason for writing two nested if-else block is because of two toggle values for sort instead of one
    if (appliedFilters.indexOf(name) >= 0) {
      let updatedFilters = [];
      if (name === "newest") {
        updatedFilters = [
          ...appliedFilters?.filter((filter: string) => filter !== "oldest"),
        ];
      } else if (name === "oldest") {
        updatedFilters = [
          ...appliedFilters?.filter((filter: string) => filter !== "newest"),
        ];
      } else {
        updatedFilters = appliedFilters?.filter(
          (filter: string) => filter !== name
        );
      }
      setAppliedFilters([...updatedFilters]);
    } else {
      if (name === "newest") {
        setAppliedFilters([
          ...appliedFilters?.filter((filter: string) => filter !== "oldest"),
          name,
        ]);
      } else if (name === "oldest") {
        setAppliedFilters([
          ...appliedFilters?.filter((filter: string) => filter !== "newest"),
          name,
        ]);
      } else {
        setAppliedFilters([...appliedFilters, name]);
      }
    }
  };

  const handleRemoveFilter = (name: string) => {
    const updatedFilters: Array<string> = appliedFilters?.filter(
      (filter: string) => filter !== name
    );
    setAppliedFilters([...updatedFilters]);
  };

  return (
    <>
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
                aria-label="search"
                aria-describedby="basic-addon1"
                className="border-none"
                onChange={(e: any) => setSearchHackthon(e?.target?.value)}
              />
            </InputGroup>

            <Dropdown
              drop="end"
              onToggle={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              show={isFilterDropdownOpen}
            >
              <Dropdown.Toggle
                id="dropdown-basic"
                className="bg-white text-black border-none border-0"
                style={{ borderRadius: "10px", width: "100px", height: "50px" }}
              >
                <div className="flex gap-x-2 items-center h-[40px] w-[80px] ml-2">
                  <p>Filter</p>
                  <ArrowDown className="cursor-pointer" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  opacity: 1,
                  zIndex: 10,
                  width: "20vw",
                  marginLeft: "-120px",
                  marginTop: "-2px",
                  borderRadius: "10px",
                }}
              >
                <div className="text-[#666666] px-3">
                  <div className="flex justify-between py-3">
                    <p>Filter</p>
                    <ArrowUp
                      onClick={() =>
                        setIsFilterDropdownOpen(!isFilterDropdownOpen)
                      }
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="w-full h-[1px] bg-[#DDE6ED]" />
                  <div className="px-2">
                    <p className="py-2">Status</p>
                    <div>
                      {filterList?.slice(0, 4)?.map((item: any) => {
                        return (
                          <Form.Check
                            {...item}
                            className="cursor-pointer w-full h-full"
                            onChange={handelAddFilter}
                            checked={appliedFilters.indexOf(item.name) >= 0}
                          />
                        );
                      })}
                    </div>
                    <div className="w-full h-[1px] bg-[#DDE6ED] my-2" />
                    <p className="py-2">Level</p>
                    <div>
                      {filterList?.slice(4, 7)?.map((item: any) => {
                        return (
                          <Form.Check
                            {...item}
                            className="cursor-pointer w-full h-full"
                            onChange={handelAddFilter}
                            checked={appliedFilters.indexOf(item.name) >= 0}
                          />
                        );
                      })}
                    </div>
                    <div className="w-full h-[1px] bg-[#DDE6ED] my-2" />
                    <p className="py-2">sort</p>
                    <Form.Check
                      type="checkbox"
                      label="Newest challenge first"
                      className="py-1 mb-2"
                      name="newest"
                      onChange={handelAddFilter}
                      checked={appliedFilters.indexOf("newest") >= 0}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Oldest challenge first"
                      className="py-1 mb-4"
                      name="oldest"
                      onChange={handelAddFilter}
                      checked={appliedFilters.indexOf("oldest") >= 0}
                    />
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="w-[60%] m-auto flex gap-x-2 gap-y-2 items-center flex-wrap">
            {appliedFilters?.map((filter: string) => {
              return (
                <FilterChip
                  title={filter}
                  onRemove={() => handleRemoveFilter(filter)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
