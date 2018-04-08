module.exports = (opName) => {
    return `https://travis-ci.org${opName.slice("github.com".length)}`;
}