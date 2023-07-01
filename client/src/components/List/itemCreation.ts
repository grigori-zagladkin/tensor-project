import { MAIN_DOMAIN } from './constants';

function createItem(route: string, data: object): Promise<object> {
    return fetch(MAIN_DOMAIN + route, {
        method: 'POST',
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then((res) => res.json())
}

export {
    createItem
}