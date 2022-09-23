"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
