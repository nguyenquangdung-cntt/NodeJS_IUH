var d = new Date();

exports.myDateTime = function () {
    return Date();
};
exports.myGetYear = function () {
    return d.getFullYear();
};
exports.myGetDay = function () {
    return d.getDay() + 1;
};
exports.myGetDate = function () {
    return d.getDate()
};
exports.myGetMonth = function () {
    return d.getMonth() + 1;
};