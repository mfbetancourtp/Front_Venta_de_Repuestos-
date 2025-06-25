module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
        },
    },
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: ['src/app/**/*.ts', '!src/app/**/*.spec.ts'],
};
