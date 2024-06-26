import React, { useState } from "react";
import Select from "react-select";
import ingredients from "./ingredientsArray";

const customStyles = {
  control: (base, state) => ({
    ...base,
    padding: 0,
    margin: 0,
    borderRadius: 10,
    width: 400,
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
    borderRadius: 10,
  }),
  menuList: (base) => ({
    ...base,
    borderRadius: 10,
    padding: 0,
    backgroundColor: "transparent",
    "::-webkit-scrollbar": {
      width: "10px",
      margin: "20px",
      padding: "10px",
    },
    "::-webkit-scrollbar-track": {
      display: "none",
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-button": {
      height: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "20px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#6d6d6d",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "white",
      color: "black",
      ":hover": {
        backgroundColor: "gray",
        color: "black",
      },
      ":active": {
        backgroundColor: "red",
        color: "green",
      },
    };
  },
  // multi value box
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "blue",
    };
  },
  // multi value label only
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
  }),
  // multi value x box
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: "red",
      color: "black",
    },
  }),
};

export default function SelectIngredients({
  selectedIngredients,
  setSelectedIngredients,
}) {
  const [selectCurrentInput, setSelectCurrentInput] = useState("");

  function handleKeyDown(event) {
    if (!selectCurrentInput) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setSelectedIngredients((prev) => [
          ...prev,
          {
            value: selectCurrentInput,
            label: selectCurrentInput,
          },
        ]);
        setSelectCurrentInput("");
        event.preventDefault();
    }
  }

  return (
    <Select
      isMulti
      isSearchable
      isClearable
      value={selectedIngredients}
      onChange={setSelectedIngredients}
      options={ingredients}
      placeholder="Select your ingredients!"
      noOptionsMessage={({ inputValue }) =>
        inputValue ? "Press enter to add this ingredient" : "No options"
      }
      className="select-ingredients font-Quicksand"
      styles={customStyles}
      closeMenuOnSelect={false}
      inputValue={selectCurrentInput}
      onKeyDown={handleKeyDown}
      onInputChange={(newValue) => setSelectCurrentInput(newValue)}
    />
  );
}
