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
    }
})

export const { toggleCategory } = categorySlice.actions

export default categorySlice.reducer