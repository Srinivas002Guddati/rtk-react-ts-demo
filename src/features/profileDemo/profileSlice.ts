import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profileUI',
    initialState: { showDetails: false },
    reducers: {
        toggleDetails: (state)=>{
            state.showDetails = !state.showDetails;
        }
    }
});

export const { toggleDetails } = profileSlice.actions;
export default profileSlice.reducer;