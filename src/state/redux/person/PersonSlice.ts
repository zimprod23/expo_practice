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
  status: "idle", // Initially, the status is idle
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
  // `createSlice` will infer the state type from the `initialState` argument
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
        state.status = "loading"; // Set status to loading while removing
      })
      .addCase(removePersonAsync.fulfilled, (state, action) => {
        state.status = "idle"; // Set status to idle after removing
        state.persons = state.persons.filter(
          (person) => person.phoneNumber !== action.payload
        ); // Remove person by phoneNumber
      })
      .addCase(removePersonAsync.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed if there's an error
        state.error = action.error.message ?? "Failed to remove person";
      });
  },
});

export const { addPerson, removePerson } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPersons = (state: RootState) => state.person.persons;

export default counterSlice.reducer;
