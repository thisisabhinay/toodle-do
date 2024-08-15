/**
 * preset: 'ts-jest': Configures Jest to work with TypeScript.
 * testEnvironment: 'jsdom': Uses a browser-like environment for tests.
 * moduleNameMapper: Maps the '@/' path alias to the 'src/' directory, matching your tsconfig.json.
 * setupFilesAfterEnv: Points to a setup file for additional test configurations.
 * testMatch: Specifies which files Jest should consider as test files.
 * transform: Configures ts-jest to transform TypeScript files.
 * moduleFileExtensions: Specifies which file extensions Jest should recognize.
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "**/__specs__/**/*.(js|ts)?(x)",
    "**/?(*.)+(spec|test).(js|ts)?(x)",
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
