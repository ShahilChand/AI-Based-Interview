import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    phone: { 
      type: String, 
      required: true, 
      trim: true 
    },
    college: { 
      type: String, 
      trim: true 
    },
    skills: { 
      type: [String], 
      default: [] 
    },
    interests: { 
      type: [String], 
      default: [] 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
    password: { 
      type: String, 
      required: true 
    }
  },
  {
    timestamps: true 
  }
);

export default mongoose.model("Student", studentSchema);
