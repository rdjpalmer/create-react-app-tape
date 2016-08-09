# `create-react-app` + `tape` test runner

Example implementation of `create-react-app`, post `eject` with the tape test runner.

Uses `tape`, `react-unit`, `extend-tape`, `tape-jsx-equal` and a few of other dependancies to work.

A small draw back is `babel-tape-runner`'s dependancy on `.babelrc`, however this is circumvented by importing this directly into `babel.dev.js` and `babel.prod.js`.
