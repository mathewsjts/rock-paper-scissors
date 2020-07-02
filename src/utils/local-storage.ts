const set = (key: string, value: any) => {
    localStorage.setItem(
        key,
        JSON.stringify({
            value
        })
    );
};

const get = (key: string) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data).value;
    }
    return null;
};

const del = (key: string) => {
    localStorage.removeItem(key);
};

export default { set, get, del };
