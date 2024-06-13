// // jest.config.js
// const testEnvironment = "node";
// const testMatch = ["**/src/**/*.js"];

// export default {
//   testEnvironment,
//   testMatch,
// };

export default {
  testEnvironment: "node",
  testMatch: ["**/src/**/*.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
