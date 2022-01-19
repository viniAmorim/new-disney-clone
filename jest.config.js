module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
