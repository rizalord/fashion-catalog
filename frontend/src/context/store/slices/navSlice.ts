import { createSlice } from '@reduxjs/toolkit'

interface NavState {
    isNavOpen: boolean
    isSearchOpen: boolean
}

const initialState: NavState = {
    isNavOpen: false,
    isSearchOpen: false,
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen
            state.isSearchOpen = false
        },
        toggleSearch: (state) => {
            state.isSearchOpen = !state.isSearchOpen
            state.isNavOpen = false
        }
    }
})

export const { toggleNav, toggleSearch } = navSlice.actions

export default navSlice.reducer