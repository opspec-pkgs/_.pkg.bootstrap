const _isInputRequired = require('./_isInputRequired')

module.exports = function (inputs, options) {
    const isAnyRequiredInputs = Object.values(inputs||{}).find(input => _isInputRequired(input));

    if (!isAnyRequiredInputs) {
        return options.fn(this);
    }
};