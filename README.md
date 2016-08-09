# `create-react-app` + `tape` test runner

Addition of tape as a test runner to `create-react-app`'s ejected output. Major caveat is that `babel-tape-runner` requires configuration to live in `.babelrc`. Therefore it cannot read from `create-react-app`'s generated configuration files.

Choices here are:

1. Move all babel configuration into `.babelrc` (requires exploration)
2. Live with duplication configurations
3. ????