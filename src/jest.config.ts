/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  globalSetup: "./jest.globalSetup.ts",
  globalTeardown: "./jest.globalTeardown.ts",
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  // coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts"],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  rootDir: "./",
  roots: ["<rootDir>/src"],
};

export default config;
