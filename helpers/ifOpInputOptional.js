module.exports = function (input, options) {
    let isOptional;
    if (input.array) isOptional = input.array.default;
    if (input.dir) isOptional = input.dir.default;
    if (input.file) isOptional = input.file.default;
    if (input.number) isOptional = input.number.default;
    if (input.object) isOptional = input.object.default;
    if (input.socket) isOptional = input.socket.default;
    if (input.string) isOptional = input.string.default;

    if (isOptional) {
        return options.fn(this);
    }
};