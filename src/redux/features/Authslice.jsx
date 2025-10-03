import { createSlice } from '@reduxjs/toolkit'
import { User } from 'lucide-react'
import React from 'react'

export const Dummyuser = [
    { id: 1, username: "admin", email: "ladmin@example.com", password: "admin123" },
    { id: 2, username: "user", email: "user@example.com", password: "user123" },
    { id: 3, username: "guest", email: "guest@example.com", password: "guest123" },
    { id: 4, username: "test", email: "test@example.com", password: "test123" },
]

const Authslice = createSlice({
    name: 'auth',
    initialState: {
        User: null,
        error: null,
        isloggingin: false,
    },
    reducers: {
        login: (state, action) => {
            state.isloggingin = true;
            const { username, password } = action.payload || {};
            const user = Dummyuser.find((p)=> p.username === username && p.password === password)
            if (user) {
                state.User = user;
                state.error = null;
                state.isloggingin = true;
            } else {
                state.User = null;
                state.error = "Invalid password";
                state.isloggingin = false;
            }
        },

        logout: (state) => {
            state.User = null;
            state.error = null;
            // state.isloggingin = false;
        }
    }
})

export const { login, logout } = Authslice.actions
export default Authslice.reducer