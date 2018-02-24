module.exports = (pkgName) => {
    return `https://travis-ci.org${pkgName.slice("github.com".length)}`;
}