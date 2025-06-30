const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  res.send(Task.findAll());
});

// GET a single task by id
router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  res.send(Task.findByPk(taskId));
});

// Patch a task by id
router.patch("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = req.body;
  res.send(Task.update(taskId, task));
});

// Delete a task by id
router.delete("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  res.send(Task.delete(taskId));
});

// Create a new task
router.post("/", (req, res) => {
  const task = req.body;
  res.send(Task.create(task))
});

module.exports = router;