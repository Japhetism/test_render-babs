## Select Component

The Select component is a reusable component that renders a select dropdown menu.

### Props

| Name | Description |
| ---- | ----------- |
| name | The name of the select element. This is used to bind the value of the select element to a variable in your React component. |
| value | The initial value of the select element. This value will be displayed in the select element when the component first renders. |
| onChange | A callback function that is called when the value of the select element changes. This function will be passed the new value of the select element as an argument. |
| children | The children of the select element. This should be an array of option elements. Each option element should have a value attribute that specifies the value of the option. The children prop can also be a string, which will be rendered as the text of the select element.|
| id | The id of the select element. This is used to uniquely identify the select element in your React application.
| bodyClassName | A class name to be applied to the outer div of the select element. |
| selectClassName | A class name to be applied to the select element. |
| iconClassName | A class name to be applied to the dropdown icon element. |
| ...rest | Any other props that are passed to the select element. |

### Here is an example of how to use the Select component:

```tsx
import React from "react";
import Select from "@/components/Select";

const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Select
      bodyClassName="flex me-2"
      selectClassName="p-2 flex pe-7 shadow-md"
      iconClassName="w-4 top-[16px] right-[10px]"
    >
      <option
        className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
        value="city1"
      >
        Category
      </option>
    </Select>
  );
};
```
