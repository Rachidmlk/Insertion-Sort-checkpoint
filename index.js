function sortCards(arr) {
    arr.forEach(function (el, index) {
        var _a, _b;
        var i = index;
        if (arr[i] > arr[i + 1]) {
            _a = [arr[i + 1], arr[i]], arr[i] = _a[0], arr[i + 1] = _a[1];
            while (arr[i] < arr[i - 1] && i >= 1) {
                _b = [arr[i - 1], arr[i]], arr[i] = _b[0], arr[i - 1] = _b[1];
                i--;
            }
        }
    });
    return arr;
}
sortCards([0, 5, -2, 14, 9, 10]);
