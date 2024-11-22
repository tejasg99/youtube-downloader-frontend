import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        loading: false,
        progress: 0,
        videoInfo: null,
    },
    reducers: {
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

export const { startLoading, setProgress, setVideoInfo, stopLoading } = videoSlice.actions;
export default videoSlice.reducer;