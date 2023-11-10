function maps(x) {
    let error;

    for (let i = 0; i < x.length; i++) {
        if (!isNaN(x[i]) === true) {
        } else {
            error = false;
        }
    }

    if (error !== false) {
        for (let j = 0; j < x.length; j++) {
            x[j] *= 2;
        }

    }

return x;
}

y = [1, 1, 2, 3]
maps(y);