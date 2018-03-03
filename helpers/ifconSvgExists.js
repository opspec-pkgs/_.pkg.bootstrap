module.exports = function (contentList, options) {
    if (contentList.find(content => content.path.endsWith('icon.svg'))) {
        return options.fn(this);
    }
};