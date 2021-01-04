module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/client/modules',
    '.+\\.(svg|jpg)': '<rootDir>/utils/jest-assets-stub.js',
    '.+\\.(less|css)$': '<rootDir>/utils/jest-assets-stub.js',
  },

  // Automatically reset mock state between every test
  resetMocks: true,

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/client'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/client/modules/**/?(*.)+(test).ts?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.json$': '<rootDir>/utils/json-transform.js',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
};
