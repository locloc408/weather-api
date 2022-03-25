import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HoChiMinhCordinate } from "../../data/geocordinate";
import { WeatherResponseType } from "../../type";
import { RootState } from "../store";
export interface initialState {
  data: WeatherResponseType | null;
  Temptype: string;
  isLoading: boolean;
}
const initialState: initialState = {
  data: null,
  Temptype: "C",
  isLoading: false,
};

export const getData = createAsyncThunk("users/fetchByIdStatus", async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${HoChiMinhCordinate.latitude}&lon=${HoChiMinhCordinate.longitude}&exclude=minutely&appid=${process.env.REACT_APP_apikey}`
  );
  return response.data;
});
const Store = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<WeatherResponseType>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTempType: (state, action: PayloadAction<string>) => {
      state.Temptype = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getData.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default Store.reducer;

export const { setData, setLoading, setTempType } = Store.actions;

export const Data = (state: RootState) => state.StoreReducer.data;
export const TempType = (state: RootState) => state.StoreReducer.Temptype;
export const IsLoading = (state: RootState) => state.StoreReducer.isLoading;
