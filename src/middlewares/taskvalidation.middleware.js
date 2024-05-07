const { body, validationResult } = require('express-validator');

// Validation rules for task creation
const taskValidationRules = () => {
  return [
    body('title')
         .notEmpty()
         .withMessage('Title is required'),
    body('description')
         .exists({ checkFalsy: true })
         .withMessage('Description is required'),
    body('due_date')
         .exists({ checkFalsy: true })
         .withMessage('Due date is required')
         .isISO8601()
         .withMessage('Due date must be in ISO8601 format (YYYY-MM-DD)'),
    body('priority')
         .notEmpty()
         .withMessage('Priority is required')
         .isIn(['Low', 'Medium', 'High'])
         .withMessage('Priority must be either Low, Medium, or High'),
    body('status')
         .notEmpty()
         .withMessage('Status is required')
         .isIn(['Pending', 'In Progress', 'Completed'])
         .withMessage('Status must be either Pending, In Progress, or Completed'),
  ];
};

// Middleware function to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorMessages = errors.array().map(error => error.msg);
  // Return validation errors
  return res.status(400).json({ errors: errorMessages });
};

module.exports = {
  taskValidationRules,
  validate
};
