import type { Config } from '@jest/types';
/**
 * @jest-environment jsdom
 */
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/', './src/App.test.tsx','./__tests__/E2E'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.env.js',
  ],
};
export default config;
