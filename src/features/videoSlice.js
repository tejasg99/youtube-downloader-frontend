import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        url: "",
        loading: false,
        progress: 0,
        videoInfo: null,
    },
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        startLoading: (state) => {
            state.loading = true;
            state.progress = 0;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        setVideoInfo: (state, action) => {
            state.videoInfo = action.payload;
        },
        stopLoading: (state) => {
            state.loading = false;
            state.progress = 0;
        },
    }
})

export const { setUrl, startLoading, setProgress, setVideoInfo, stopLoading } = videoSlice.actions;
export default videoSlice.reducer;