# Contributing

## Basic Guidelines

Thanks for the contribution! We politely ask that all contributions meet the following requirements!

- The contribution must not hinder existing functionality.
- The contribution should be linted and styled based on our [`.eslintrc`](https://github.com/chand1012/thelinuxquiz/blob/master/.eslintrc.js) and [`.prettierrc`](https://github.com/chand1012/thelinuxquiz/blob/master/.prettierrc) files.

All contributions will be reviewed before merging.

## How can I help?

If you're not sure how you can help, but you really want to, check out our [project boards](https://github.com/chand1012/thelinuxquiz/projects). If there isn't a pull request addressing these issues, odds are no one is working on them, so feel free to fork us and submit a PR to add the issue or fix the bug!

## I want to add a distro!

Here are the rules for adding a distro:

- The distro's ratings should be added to [`ratings.js`](https://github.com/chand1012/thelinuxquiz/blob/master/src/utility/ratings.js).
  - Please follow the existing format.
  - All scores are from 1 to 5.
  - Please make sure that `displayName` and `url` are accurate.
  - Add the distro to the [default export](https://github.com/chand1012/thelinuxquiz/blob/b3366a4f73b23943f33c0d0ceced7ffd5eecbf5c/src/utility/ratings.js#L187).
- The distro must have an SVG icon added to the [SVG folder](https://github.com/chand1012/thelinuxquiz/tree/master/src/svg) as well as [`DistroIcons.jsx`](https://github.com/chand1012/thelinuxquiz/blob/master/src/components/DistroIcons.jsx).
  - The string name you give the distro's icon must match the name given to the distro in the default export of `ratings.js`.
