module.exports = {
  root: true,
  globals: {
    JSX: true,
  },
  extends: ["@kwai-explore/eslint-config/preset/react-ts"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
};
