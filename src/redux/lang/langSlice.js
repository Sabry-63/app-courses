import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang: 'en',
};

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLangEn: (state, action) => {
            state.lang = action.payload;
        },
        setLangAr: (state, action) => {
            state.lang = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLangEn, setLangAr } = langSlice.actions;

export default langSlice.reducer;
