import { MAIN_DOMAIN } from './constants';

interface ISource {
    url: string;
    filter?: object;
}

interface IURLParams {
    [key: string]: any;
}

function fetchData(source: ISource): Promise<any> {
    let urlParams: string = ''; 
    if (source.filter) {
        const RES_OBJ: IURLParams = {};
        for (const key of Object.keys(source.filter)) {
            RES_OBJ[key] = (source.filter as IURLParams)[key];
        }
        urlParams = '?' + new URLSearchParams(RES_OBJ);
    }

    return fetch(MAIN_DOMAIN + source.url + urlParams, {method: 'GET'})
        .then((res) => res.json());
}

export {
    fetchData
};