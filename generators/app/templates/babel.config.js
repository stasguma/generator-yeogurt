module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            {
                useBuiltIns: "usage",
                corejs: '3.0.0'
            },
        ],
    ];
    const plugins = [["add-module-exports"]];

    return {
        presets,
        plugins
    };
}
