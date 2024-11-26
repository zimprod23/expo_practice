import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store";
import { Person, persons } from "../../static/sampleData";

interface PersonState {
  persons: Person[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: PersonState = {
  persons: persons,
  status: "idle",
  error: null,
};

export const removePersonAsync = createAsyncThunk(
  "person/removePersonAsync",
  async (phoneNumber: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return phoneNumber;
  }
);

export const counterSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson(state, action: PayloadAction<Person>) {
      state.persons.push(action.payload);
    },
    removePerson(state, action: PayloadAction<string>) {
      state.persons = state.persons.filter(
        (person) => person.phoneNumber !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removePersonAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePersonAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.persons = state.persons.filter(
          (person) => person.phoneNumber !== action.payload
        );
      })
      .addCase(removePersonAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to remove person";
      });
  },
});

export const { addPerson, removePerson } = counterSlice.actions;

export const selectPerson = (state: RootState) => state.person;

export default counterSlice.reducer;
