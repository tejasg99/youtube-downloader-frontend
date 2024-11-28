import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        url: "",
        videoInfo: null,
        fetching: false,
    },
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        startFetching: (state) => {
            state.fetching = true;
        },
        setVideoInfo: (state, action) => {
            state.videoInfo = action.payload;
        },
        stopFetching: (state) => {
            state.fetching = false;
        },
    }
})

export const { setUrl, setVideoInfo, startFetching, stopFetching } = videoSlice.actions;
export default videoSlice.reducer;