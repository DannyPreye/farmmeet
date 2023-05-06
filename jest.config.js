/** @type {import('@ts-jest/dist/types').initialOptionsTsJest} */

module.exports = {
    preset: "ts-jest",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
        },
    },
    clearMocks: true,
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
