import Spinner from "@/components/spinner/spinner";
import _ from "lodash";
import React, { useState } from "react";

const UserNameInput = ({ register, error, getValues }) => {
  const [checkUsername, setCheckUsername] = useState(false);
  console.log(`${process.env.NEXT_PUBLIC_SERVER}/username-check/${"maziar"}`);

  fetch(`${process.env.NEXT_PUBLIC_SERVER}/username-check/${getValues}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (
    <div>
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=""
          id="username"
          type="text"
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: /^.{4,20}$/,
              message: "Username must be 4-20 characters",
            },
            validate: {
              notAdmin: (fieldValue: string) => {
                return fieldValue !== "admin" || "Enter a diffrent username";
              },
              usernameValidator: async (fieldValue: string) => {
                fieldValue = _.lowerCase(fieldValue);
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_SERVER}/username-check/${fieldValue}`
                );
                return res.status !== 409 || "username already exists.";
              },
            },
          })}
        />
        <label className="before:content[' '] opacity-40 peer-focus:opacity-100 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Choose a username
        </label>
      </div>
      <p className="text-red-500 pl-2 text-sm">{error}</p>
      {getValues().username.length > 6 &&
        (checkUsername ? (
          <div className="flex flex-row pl-2">
            <p>Checking the username</p>
            &nbsp;
            <Spinner size={12} />
          </div>
        ) : (
          <div className="flex text-green-500 flex-row pl-2">
            <p>Username is available</p>
            &nbsp;
            <Spinner size={12} />
          </div>
        ))}
    </div>
  );
};

export default UserNameInput;
