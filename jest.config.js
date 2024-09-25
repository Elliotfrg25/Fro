module.exports = {
    transformIgnorePatterns: ['node_modules/(?!(axios)/)'],
    transform: {
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest"
    }
};
