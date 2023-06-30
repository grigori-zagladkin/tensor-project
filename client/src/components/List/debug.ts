const RAW_DATA: object[] = [{
    id: 0,
    title: 'First',
    date: new Date(),
    status: 0 // красный
}, {
    id: 1,
    title: 'Second',
    date: new Date(),
    status: 1 // желтый
}, {
    id: 2,
    title: 'Third',
    date: new Date(),
    status: 1

}, {
    id: 3,
    title: 'Fourth',
    date: new Date(),
    status: 2 //зеленый 
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