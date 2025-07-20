function take(arr, n) {
    if (arr.length === 0) {
        return [];
    } else {
        let res = [];
        for (let i = 0; i < n; i++) {
            // Also add a check to avoid pushing undefined when n > arr.length
            if (i < arr.length) {
                res.push(arr[i]);
            }
        }
        return res;
    }
}