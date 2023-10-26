import React, { useState, useEffect } from "react";
export function MailInp() {
  return (
    <div className="  inpboxesofform ">
      <span className="material-symbols-outlined pr-2 pl-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
            stroke="#64748B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 7L12 13L21 7"
            stroke="#64748B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Email"
        name=""
        id=""
        className="w-[91%] p-1.5 border-0 border-transparent text-[20px] "
      />
    </div>
  );
}
export default function ForMs({ changeemail, changepwd }) {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  useEffect(() => {
    changeemail(inputValue);
  }, [inputValue]);

  useEffect(() => {
    changepwd(inputValue2);
  }, [inputValue2]);

  return (
    <>
      <div className="inpboxesofform">
        <span className="material-symbols-outlined pr-2 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
           
          <path
          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 7L12 13L21 7"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
          </svg>
        </span>
        <input
          type="email"
          placeholder="Email"
          name=""
          id=""
          className="w-[91%] p-1.5 border-0 border-transparent text-[20px]"
        />
      </div>
      <div className="inpboxesofform">
        <span className="material-symbols-outlined pr-2 pl-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
          stroke="#64748B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
          stroke="#64748B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

          </svg>
        </span>
        <input
          type="password"
          placeholder="Password"
          name=""
          id=""
          className="h-[80%] w-[91%] border-0 border-transparent text-[20px] p-1.5"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
