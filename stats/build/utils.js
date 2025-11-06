export const dateStringToDate = (dateString) => {
    const [day, month, year] = dateString
        .split("/")
        .map((value) => parseInt(value));
    return new Date(year, month - 1, day);
};
//# sourceMappingURL=utils.js.map