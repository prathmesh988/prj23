import React, { useState } from "react";
function NameLabel() {
  return (
    <>
      <form action="" className="flex flex-col w-full gap-2 ">
        <label htmlFor="name">Label</label>
        <input
          type="text"
          id="username"
          className="border-2 rounded-md p-1 focus:border-blue-300"
          name="username"
        ></input>
      </form>
    </>
  );
}

function Dropdown() {
  const List = ["Framer", "Sketch", "Invision Studio", "Figma", "Adobe XD"];
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-max gap-2">
      <label htmlFor="name">Dropdown</label>
      <div className="relative">
        <input
          type="text"
          id="username"
          className="border-2 rounded-md p-1 focus:border-blue-300"
          name="username"
          onClick={toggleDropdown}
          value={selectedOption}
          onChange={handleInputChange}
          autoComplete="off"
        />
        {isOpen && (
          <ul className="absolute  w-40 border flex flex-col gap-2  border-gray-300 rounded-md shadow-lg px-2 py-2">
            {List.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer px-2 rounded-md  hover:bg-gray-300 hover:text-blue-500 "
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Tags() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <p>Tags</p>
      <input
        type="text"
        id="tags-input"
        className="border-2 rounded-md p-1 focus:border-blue-300"
        name="tags"
        value={inputValue} // Display the input value, not the joined tags
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <div className="flex gap-1 ">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex gap-2 bg-slate-300 w-max px-2 rounded-md text-sm "
          >
            <span className="tag">
              {tag}{" "}
              <button
                onClick={() => removeTag(tag)}
                className="remove-tag-button text-xs text-center p-1"
              >
                x
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Website() {
  return (
    <div>
      <p>Website</p>
      <div className="flex">
        <div className="border-2 rounded-l-md p-1  text-gray-400">https://</div>
        <input type="text" className="border-2 rounded-r-md p-1" />
      </div>
    </div>
  );
}

const Profile = () => {
  return (
    <div className="flex gap-10 ">
      <div className="flex flex-col gap-7 ">
        <NameLabel />
        <Tags />
        <Website />
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Profile;
