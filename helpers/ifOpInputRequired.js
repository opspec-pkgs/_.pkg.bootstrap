module.exports = function (input, options) {
    let isRequired;
    if (input.array) isRequired = !input.array.default;
    if (input.boolean) isRequired = input.boolean.default !== undefined;
    if (input.dir) isRequired = !input.dir.default;
    if (input.file) isRequired = !input.file.default;
    if (input.number) isRequired = !input.number.default;
    if (input.object) isRequired = !input.object.default;
    if (input.socket) isRequired = !input.socket.default;
    if (input.string) isRequired = !input.string.default;

    if (isRequired) {
        return options.fn(this);
    }
};