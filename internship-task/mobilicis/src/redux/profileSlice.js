import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isEditing: false,
  profile: {
    name: "Dikshant Solanki",
    email: "dikshant214@gmail.com",
    phone: "+91 8412687423",
    about: "Lorem ipsum dolor sit amet consectetur...",
    skills: ["Next.js"],
    certificates: [
      { name: "Certificate 1", provider: "Provider 1" },
      { name: "Certificate 2", provider: "Provider 2" }
    ],
    experience: [
      {
        totalYears: 2,
        role: "Frontend Developer",
        companyName: "ABC Inc.",
        employmentType: "Full-time"
      }
    ],
    education: [
      {
        university: "XYZ University",
        yearRange: "2018 - 2022",
        degree: "Bachelor's in Computer Science",
        details: "Graduated with honors."
      }
    ]
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    updateProfileField: (state, action) => {
      const { field, value } = action.payload;
      state.profile = { ...state.profile, [field]: value };
    }
    // Add other reducers if needed
  }
});

export const { toggleEditing, updateProfileField } = profileSlice.actions;
export default profileSlice.reducer;
