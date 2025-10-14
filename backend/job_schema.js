import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: String, // can be Number if preferred
      required: false,
    },
    skills: {
      type: [String], // e.g., ["Node.js", "MongoDB"]
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    workType: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
      required: true,
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time"],
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
