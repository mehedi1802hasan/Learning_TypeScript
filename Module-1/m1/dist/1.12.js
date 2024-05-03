"use strict";
{
    //nullable types / unknown types
    const searchName = (value) => {
        if (value) {
            // console.log("searching");
        }
        else {
            // console.log("There is nothing to search")
        }
    };
    searchName(null);
    // unknown types
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is-1- ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(' ');
            // console.log(result)
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is-2-  ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong input ');
        }
    };
    getSpeedInMeterPerSecond(33);
    getSpeedInMeterPerSecond(`33 kmh^-1`);
    getSpeedInMeterPerSecond(true);
    /// Never type ...
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('erorr hogaya bro..');
}
