function curriedAdd(initial) {
    let currentTotal = initial || 0;

    function addTo(number) {
        if (number) {
            currentTotal += number;
            return addTo;
        }
        return currentTotal;
    }

    if (initial) {
        return addTo;
    }
    return currentTotal;
}

module.exports = { curriedAdd };
