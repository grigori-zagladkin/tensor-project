const RAW_DATA: object[] = [{
    id: 0,
    title: 'First',
    date: new Date()
}, {
    id: 1,
    title: 'Second',
    date: new Date()
}, {
    id: 2,
    title: 'Third',
    date: new Date()
}, {
    id: 3,
    title: 'Fourth',
    date: new Date()
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