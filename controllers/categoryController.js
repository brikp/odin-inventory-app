const Item = require('../models/item');
const Category = require('../models/category');

const validator = require('express-validator');

// Displays a list of categories
exports.categories = (req, res, next) => {
  res.send('/categories Not implemented yet');
};

// Displays category create form on GET
exports.category_create_get = (req, res, next) => {
  res.render('category_form', { title: 'Create a category' });
};
// Displays category create form on POST
exports.category_create_post = [
  validator
    .body('name', 'Category name is required')
    .trim()
    .isLength({ min: 1 }),

  validator
    .body('description', 'Description is required')
    .trim()
    .isLength({ min: 1 }),

  validator.body('name').trim().escape(),
  validator.body('description').trim().escape(),

  (req, res, next) => {
    const errors = validator.validationResult(req);

    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    if (!errors.isEmpty()) {
      // There are errors. Rerender the form with values provided by the user and error messages
      res.render('genre_form', {
        title: 'Create a category',
        category,
        errors: errors.array(),
      });
      return;
    } else {
      // Data is valid. Check if category exists, if not add it to the db
      Category.findOne({ name: req.body.name }).exec((err, found_category) => {
        if (err) return next(err);

        if (found_category) {
          // Category exists, redirect to its details page
          res.redirect(found_category.url);
        } else {
          category.save((err) => {
            if (err) return next(err);

            res.redirect(category.url);
          });
        }
      });
    }
  },
];

// Displays category delete form on GET
exports.category_delete_get = (req, res, next) => {
  res.send('/category/:id/delete GET Not implemented yet');
};

// Displays category delete form on POST
exports.category_delete_post = (req, res, next) => {
  res.send('/category/:id/delete POST Not implemented yet');
};
// Displays category update form on GET
exports.category_update_get = (req, res, next) => {
  res.send('/category/:id/update GET Not implemented yet');
};

// Displays category update form on POST
exports.category_update_post = (req, res, next) => {
  res.send('/category/:id/update POST Not implemented yet');
};

// Displays detail page of an category with a list of items in this category
exports.category_detail = (req, res, next) => {
  res.send('/category/:id Not implemented yet');
};
