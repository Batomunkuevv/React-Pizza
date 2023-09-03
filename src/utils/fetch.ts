const DOMAIN = "https://64eea69d219b3e2873c35f64.mockapi.io/api/react-pizza/";

const checkRequest = (res: Response) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(`Ошибка ${res.status}`);
};

export const request = (endpoint: string, options?: RequestInit) => {
    return fetch(`${DOMAIN}${endpoint}`, options).then(checkRequest);
};
