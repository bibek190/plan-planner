import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  projects: [
    { id: "1", title: "help me to find out peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "bow ow ow o" },
    { id: "3", title: "egg huntsin with ne Bbibek tech", content: "wow wo w" },
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
