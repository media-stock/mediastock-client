export const getPercentData = (start, end) => {
    let diff = null;
    if (start > end) {
        diff = true;
    }
    if (start < end) {
        diff = false;
    }

    let color = '#000';
    if (diff === true) {
        color = 'red';
    }
    if (diff === false) {
        color = 'blue';
    }

    const percent = Math.floor((Math.abs(start - end) / start) * 100);

    return {
        diff,
        color,
        percent,
    };
};
