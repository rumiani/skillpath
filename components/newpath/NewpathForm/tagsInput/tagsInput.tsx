import React, { FormEvent } from "react";
import Tags from "./tags/tags";
import _ from "lodash";

const TagsInput = ({ register, error, watch, setValue, getValues }) => {
  const tagsStoreHandler = (e: FormEvent<HTMLInputElement>) => {
    const str = e.target!.value.trim();
    
    if (_.last(str) === ',' || _.last(str) === '-') {
      const newTag = str.replace(/[^a-zA-Z0-9 ]/g, "");
      if (watch("tags.array").length < 5 && newTag.length > 3) {
        setValue("tags.array", [...getValues().tags.array, newTag]);
        setValue("tags.tag", "");
      }
    }
  };

  // if(getValues().text.length < 300) return

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
            // autoComplete={false}
            autoComplete="off"
            onChange={tagsStoreHandler}
            onKeyUp={tagsStoreHandler}
            {...register("tags.tag", {
              pattern: {
                value: /^.{4,10}$/,
                message: "The tag length must be 4-10 characters",
              },
              validate: {
                addTag: (tag: string) => {
                  return (
                    getValues("tags.array").length > 0 || watch('tags.tag') !== '' ||
                    `Please add a tag (Seperated with <code>,</code> or <code>-</code>)`
                  );
                },
                // myEmailValidate: async (tag: string) => {
                //   tag = _.capitalize(tag);
                //   const res = await fetch(
                //     `https://jsonplaceholder.typicode.com/users?email=${tag}`
                //   );
                //   const data = await res.json();
                //   return data.length === 0 || "Email already exists.";
                // },
              },
            })}
          />
        )}
      </div>
      <p
        className="text-red-500 text-sm pl-4"
        dangerouslySetInnerHTML={{ __html: error }}
      ></p>
    </div>
  );
};

export default TagsInput;
