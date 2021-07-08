import express from "express";
const router = express.Router();

import { getAllDoctors, createDoctor, deleteDoctor, updateDoctor, updateDoctorProfile } from "../controllers/doctor.js";

router.get("/all", getAllDoctors);
router.post("/create", createDoctor);
router.put("/update/:id", updateDoctor);
router.put("/update-profile/:id", updateDoctorProfile);
router.delete("/delete/:id", deleteDoctor);

export default router;
