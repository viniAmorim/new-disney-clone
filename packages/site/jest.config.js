/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

const baseConfig = require('../../jest.config');
const pkg = require('./package.json');

delete baseConfig.projects;

module.exports = {
  ...baseConfig,
  displayName: pkg.name,
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '**/src/*.{js,ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*.test.{ts,tsx}',
    '!**/src/icons/*',
  ],
  testMatch: [join(__dirname, '**/*.test.{ts,tsx}')],
  moduleNameMapper: {
    '~/themes/(.*)': '<rootDir>/../../themes/$1',
    '~/test/(.*)': '<rootDir>/test/$1',
    '~/app/(.*)': '<rootDir>/src/$1',
    '\\.(css)$': '<rootDir>/test/genericMock.js',
  },
  setupFilesAfterEnv: [join(__dirname, 'test/config/jest.setup.ts')],
  testEnvironment: 'jest-environment-jsdom-sixteen',
};
