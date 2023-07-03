import { createSlice } from '@reduxjs/toolkit'

interface CategoryState {
    isCategoryOpen: boolean
}

const initialState: CategoryState = {
    isCategoryOpen: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        toggleCategory: (state) => {
            state.isCategoryOpen = !state.isCategoryOpen
        },
        setCategory: (state, action) => {
            state.isCategoryOpen = action.payload
        }
    }
})

export const { toggleCategory, setCategory } = categorySlice.actions

export default categorySlice.reducer