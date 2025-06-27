module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['src/app/**/*.ts', '!src/app/**/*.spec.ts']
};
