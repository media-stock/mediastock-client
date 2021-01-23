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

export const getPercent = ({ curPrice, lastPrice }) => {
    const diff = curPrice - lastPrice || 0;
    const percent = curPrice / lastPrice || 0;
    let status = 1;
    if (diff === 0) status = 0;
    if (diff < 0) status = -1;

    return {
        diff,
        percent,
        status,
    };
};
