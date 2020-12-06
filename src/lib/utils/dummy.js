export const range = (start = 0, end = 12) => {
    const list = [];

    for (let i = start; i <= end; i += 1) {
        list.push(i);
    }

    return list;
};

export const createDummyList = (count, object) => {
    return range(1, count).map((index) => ({
        ...object,
        id: index,
    }));
};
