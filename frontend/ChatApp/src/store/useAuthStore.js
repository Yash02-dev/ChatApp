import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
export const useAuthStore = create((set) => ({
    //set is a callback function and here we are returning an object set is the setter function
    authUser: null,//initially this is null as we dont know user is authenticated or not 
    isSignigUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,//as soon as we refresh our page we'll check user is authenticated or not

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUser: res.data });
        } catch (error) {
            console.log("error in the checkAuth:", error)
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSignigUp: true })
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({ authUser: res.data })
            toast.success("Account Created Succesfully")
        } catch (error) {
            toast.error(error.response.data.message);

        } finally {
            set({ isSignigUp: false })
        }

    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout")
            set({ authUser: null });
            toast.success("Logged out successfully")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
}))