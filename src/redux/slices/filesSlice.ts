import axios from "axios";
import Urls from "../Urls";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface FileTypes {
    _id: string;
    fileName: string;
    fileUrl: string;
    isDeleted: boolean;
    userId: string;
    updatedAt: Date;
    createdAt: Date;
}

// Define a type for the slice state
interface FilesInitialState {
    files: {
        data: FileTypes[];
        loading: boolean;
    };
}

// Define the initial state using that type
export const initialState: FilesInitialState = {
    files: {
        data: [],
        loading: false,
    },
};

// async thunk to get events
export const getFiles = createAsyncThunk(
    "events/getFiles",
    async (searchParams: { search?: string }) => {
        const res = await axios.get(Urls.baseUrl + Urls.files, {
            withCredentials: true,
            params: {
                search: searchParams.search,
            },
        });

        return res.data?.files || [];
    }
);

export const eventsSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<FileTypes[]>) => {
            state.files.data = action.payload;
        },
        clearFiles: state => {
            state.files.data = [];
        },
    },

    extraReducers: builder => {
        builder.addCase(getFiles.fulfilled, (state, action) => {
            state.files.data = action.payload;
            state.files.loading = false;
        });
        builder.addCase(getFiles.pending, state => {
            state.files.loading = true;
        });
        builder.addCase(getFiles.rejected, state => {
            state.files.loading = false;
        });
        builder.addCase(HYDRATE, (state, action) => {
            return {
                ...state,
            };
        });
    },
});

export const { setFiles, clearFiles } = eventsSlice.actions;

export default eventsSlice.reducer;
