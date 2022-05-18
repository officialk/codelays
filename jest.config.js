module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ["./src/**"],
    coverageThreshold: {
        global: {
            lines: 80,
        },
    },
    coverageDirectory: "<rootDir>/coverage",
};
