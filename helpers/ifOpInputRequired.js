const _isInputRequired = require('./_isInputRequired')

module.exports = function (input, options) {
    if (_isInputRequired(input)) {
        return options.fn(this);
    }
};