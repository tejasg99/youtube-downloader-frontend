import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videoSlice";
import downloadReducer from "../features/downloadSlice";

const store = configureStore({
    reducer: {
        video: videoReducer,
        download: downloadReducer,
    },
});

export default store;