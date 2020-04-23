const category = require('../models/category');
const Category = require('../models/category');

// Displays a list of categories
exports.categories = (req, res, next) => {
  res.send('/categories Not implemented yet');
};

// Displays detail page of an category with a list of items in this category
exports.category_detail = (req, res, next) => {
  res.send('/category/:id Not implemented yet');
};
// Displays category create form on GET
exports.category_create_get = (req, res, next) => {
  res.send('/category/create GET Not implemented yet');
};
// Displays category create form on POST
exports.category_create_post = (req, res, next) => {
  res.send('/category/create POST Not implemented yet');
};

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
