import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set) => ({
    //set is a callback function and here we are returning an object set is the setter function
    authUser: null,//initially this is null as we dont know user is authenticated or not 
    isSignniggIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,//as soon as we refresh our page we'll check user is authenticated or not

    checkAuth : async () => {
        try {
            const res = await axiosInstance.get("/auth/check")

            set({ authUser: res.data });
        } catch (error) {
            console.log("error in the checkAuth:", error)
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    }
}))