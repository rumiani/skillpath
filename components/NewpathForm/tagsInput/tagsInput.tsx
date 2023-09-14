import React, { FormEvent } from "react";
import Tags from "./tags/tags";
import _ from "lodash";

const TagsInput = ({ register, error, watch, setValue, getValues }) => {
  const tagsStoreHandler = (e: FormEvent<HTMLInputElement>) => {
    console.log("getValues", getValues().tags);
    const str = e.target!.value.trim();
    const lastChar = str[str.length - 1];
    if (lastChar === "," || lastChar === "-" || e.key === "Enter") {
      const newTag = e.key === "Enter" ? str : str.slice(0, -1);
      console.log(watch("tags.array"));

      if (watch("tags.array").length < 5) {
        setValue("tags.array", [...getValues().tags.array, newTag]);
        setValue("tags.tag", "");
      }
    }
  };

  // if(path.length < 300) return

  return (
    <div className="my-4">
      <div className="flex flex-wrap w-full mx-auto my-2">
        <Tags
          setValue={setValue}
          getValues={getValues}
          tags={watch("tags.array")}
        />
        {watch("tags.array").length < 5 && (
          <input
            id="inputTag"
            type="text"
            className="max-w-[200px] min-w-[100px] p-1 focus:bg-gray-100 text-xl outline outline-0 transition-all border-none   focus:outline-0 "
            placeholder="Add a tag..."
            autocomplete="off"
            onChange={tagsStoreHandler}
            onKeyUp={tagsStoreHandler}
            {...register("tags.tag", {
              pattern: {
                value: /^.{4,10}$/,
                message: "The tag length must be 4-10 characters",
              },
              validate: {
                //   notRumi: (tag:string) =>{
                //     return(
                //       tag.length < 55 ||
                //         error(`The tag length must be 4-10 characters`)                        )
                //   },
                myEmailValidate: async (tag: string) => {
                  tag = _.capitalize(tag);
                  const res = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${tag}`
                  );
                  const data = await res.json();
                  return data.length === 0 || "Email already exists.";
                },
              },
            })}
          />
        )}
      </div>
      <p className="text-red-500 text-sm pl-4">{error}</p>
    </div>
  );
};

export default TagsInput;
