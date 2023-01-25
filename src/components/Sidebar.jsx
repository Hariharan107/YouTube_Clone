import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((categorie) => (
      <button
        className="category-btn "
        onClick={() => setSelectedCategory(categorie.name)}
        style={{
          color: "#fff",
          background: categorie.name === selectedCategory && "#FC1503",
        }}
        key={categorie.name}
      >
        <span
          style={{
            color: categorie.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {categorie.icon}
        </span>
        <span>{categorie.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
