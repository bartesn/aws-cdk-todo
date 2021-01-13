module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "camelcase": 0,
    "import/prefer-default-export": 0,
    "import/order": 0,
    "react/no-array-index-key": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  }
};
