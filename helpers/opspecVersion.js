module.exports = (opspecVersion) => {
    // use explicit version or fallback to last version not supporting opspec property
    return opspecVersion? opspecVersion : '0.1.5';
}