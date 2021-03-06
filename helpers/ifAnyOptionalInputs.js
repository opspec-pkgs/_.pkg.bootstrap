const _isInputRequired = require('./_isInputRequired')

module.exports = function (inputs, options) {
    const isAnyOptionalInputs = Object.values(inputs||{}).find(input => !_isInputRequired(input));

    if (isAnyOptionalInputs) {
        return options.fn(this);
    }
};