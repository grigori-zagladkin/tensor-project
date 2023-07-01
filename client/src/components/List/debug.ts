const RAW_DATA: object[] = [{
    id: 0,
    title: 'First',
    date: new Date(),
    status: 0, // красный
    result: [{
        color: 'Red',
        value: 1,
    }, {
        color: 'Yellow',
        value: 4,
    }, {
        color: 'Green',
        value: 13,
    }]
}, {
    id: 1,
    title: 'Second',
    date: new Date(),
    status: 1, // желтый
    result: [{
        color: 'Red',
        value: 1,
    }, {
        color: 'Yellow',
        value: 4,
    }, {
        color: 'Green',
        value: 13,
    }]
}, {
    id: 2,
    title: 'Third',
    date: new Date(),
    status: 1,
    result: [{
        color: 'Red',
        value: 1,
    }, {
        color: 'Yellow',
        value: 4,
    }, {
        color: 'Green',
        value: 13,
    }]

}, {
    id: 3,
    title: 'Fourth',
    date: new Date(),
    status: 2, //зеленый 
    result: [{
        color: 'Red',
        value: 1,
    }, {
        color: 'Yellow',
        value: 4,
    }, {
        color: 'Green',
        value: 13,
    }]
}]

function getData(): Promise<object[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(RAW_DATA);
        }, 1e3);
    })
}

export {
    getData
};