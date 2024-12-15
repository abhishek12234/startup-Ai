// scrollSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScrollRefs= {
    homeRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
}

const initialState: ScrollRefs = {
    homeRef: null,
    aboutRef: null,
    contactRef: null,
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollRefs(state, action: PayloadAction<ScrollRefs>) {
            state.homeRef = action.payload.homeRef;
            state.aboutRef = action.payload.aboutRef;
            state.contactRef = action.payload.contactRef;
        },
    },
});

export const { setScrollRefs } = scrollSlice.actions;
export default scrollSlice.reducer;
