# jest --updateSnapshot
# toMatchInlineSnapshot
- sử dụng phím u trong chế độ --watch.
# exports
# Treat snapshots as code
# eslint-plugin-jest
# Tests should be deterministic
- Date.now = jest.fn(() => 1_482_363_367_071);
# Use descriptive snapshot names
# Frequently Asked Questions
# toMatchSnapshot

# it

# expect.assertions(1);
expect(user.getUserName(3)).rejects.toEqual({
    error: 'Không tìm thấy người dùng có ID 3.',
  })
# useFakeTimers
- jest.useFakeTimers({timerLimit: 100});
# jest.spyOn(global, 'setTimeout');
# toHaveBeenCalledTimes
# toHaveBeenLastCalledWith
# runAllTimers
# runOnlyPendingTimers
# jest.clearAllTimers()
# Selective Faking
# jsdom
- jest.useFakeTimers({doNotFake: ['performance']});
- expect(window.performance.mark).toBe(mockPerformanceMark);

# Mocking User Modules
- __mocks__/
# Mocking Node Modules
.
├── config
├── __mocks__
│   └── fs.js
├── models
│   ├── __mocks__
│   │   └── user.js
│   └── user.js
├── node_modules
└── views

# jest.createMockFromModule
# jest.requireActual(moduleName)
# AutomaticMock.mock.instances[index].methodName.mock.calls
# HOF
# moduleFactory
# node-fetch

import {jest} from '@jest/globals';

jest.unstable_mockModule('node:child_process', () => ({
  execSync: jest.fn(),
  // và cetera.
}));

const {execSync} = await import('node:child_process');

// và cetera.

// use strict

# mô-đun CJS
# CSS Modules
# Proxy ES6
# React Snapshot
# Puppeteer
# jest-mongodb
# Jest DynamoDB
# DOM Manipulation
# Watch Plugins
# jestHooks
# Enzyme
# React 16

# Keywords Mock
- Snapshot
- Async
- Timer
- Manual Mocks
- ES6 Class Mocks
- Bypassing module mocks
- ECMAScript Modules
- Puppeteer
- MongoDB
- DynamoDB
- DOM Manipulation
- Watch Plugins
- Migrating to Jest
- Troubleshooting


# Commands
- jest --clearCache
- jest --runInBand
- jest --maxWorkers=4

# Library
@shelf/jest-dynamodb
jest-environment-jsdom
jest-codemods
react-test-renderer
babel-jest
@testing-library/react
jest-react-native