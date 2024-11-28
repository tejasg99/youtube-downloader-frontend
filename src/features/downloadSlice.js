import { createSlice } from "@reduxjs/toolkit";

const downloadSlice = createSlice({
    name: "download",
    initialState: {
        loading: false,
        progress: 0,
    },
    reducers: {
        startDownload: (state) => {
            state.loading = true;
            state.progress = 0;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        stopDownload: (state) => {
            state.loading = false;
            state.progress = 0;
        },
    }
})

export const { startDownload, setProgress, stopDownload } = downloadSlice.actions;
export default downloadSlice.reducer;