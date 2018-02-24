module.exports = function (inputs, options) {
    const isAnyOptionalInputs = Object.values(inputs).find(value => {
        if (value.array) return value.array.default;
        if (value.dir) return value.dir.default;
        if (value.file) return value.file.default;
        if (value.number) return value.number.default;
        if (value.object) return value.object.default;
        if (value.socket) return value.socket.default;
        if (value.string) return value.string.default;
    });

    if (isAnyOptionalInputs) {
        return options.fn(this);
    }
};