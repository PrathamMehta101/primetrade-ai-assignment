const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

router.use(protect);

router.get("/", getTasks);

router.post(
  "/",
  body("title").notEmpty().withMessage("Title is required"),
  validate,
  createTask,
);

router.put(
  "/:id",
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be boolean"),
  validate,
  updateTask,
);

router.delete("/:id", deleteTask);

module.exports = router;
