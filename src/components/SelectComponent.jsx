import React from "react";
import { Select, Option } from "@material-tailwind/react";

function SelectComponent(
  { field, data = [], isValid, label, size = "lg" },
  ref
) {
  return (
    <Select
      label={label}
      size={size}
      color={isValid ? "red" : "blue"}
      onChange={(v) => v !== "-1" && field.onChange(v)}
      ref={ref}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      {data.length > 0 ? (
        data.map(({ id, name }) => {
          return (
            <Option key={id} value={name}>
              {name}
            </Option>
          );
        })
      ) : (
        <Option value="-1">Not Available</Option>
      )}
    </Select>
  );
}

export default React.forwardRef(SelectComponent);
