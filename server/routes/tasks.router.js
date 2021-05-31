const router = require('express').Router();

const Tasks = require('../models/tasks.model');

// post task /api/tasks/register

router.post('/register', async (req, res) => {
  try {
    const newTask = new Tasks({
      name: req.body.name,
      job: req.body.job,
    });

    const task = await newTask.save();

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get task /api/tasks

router.get('/', async (req, res) => {
  try {
    const allTasks = await Tasks.find();

    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete task /api/tasks/:id

router.delete('/:id', async (req, res) => {
  try {
    const deleteTask = await Tasks.findByIdAndDelete(req.params.id);

    if (!deleteTask) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// update task /api/tasks/:id

router.put('/:id', async (req, res) => {
  try {
    const updateTask = await Tasks.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
