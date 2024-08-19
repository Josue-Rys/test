import { create } from "zustand";
import { getData } from "../api/product";

const useData = create((set) => ({
    data: [],
    error: false,

    getInfo: async () => {
        const data = await getData()
        if (data) {
            set((state) => ({ ...state, data, }))
        } else {
            set((state) => ({ ...state, data, error: true, }))
        }
    },
}))