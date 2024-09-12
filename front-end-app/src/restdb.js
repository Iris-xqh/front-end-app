const baseURL = 'http://localhost:4000/customers';

export function getAll(setCustomers) {
    const myInit = {
        method: 'GET',
        mode: 'cors'
    };
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchData(baseURL);
}

export function deleteById(id, postOpCallback) {
    const myInit = {
        method: 'DELETE',
        mode: 'cors'
    };
    const deleteRequest = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            await response.json()
            postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    deleteRequest(baseURL + '/' + id);
}

export function post(customer, postOpCallback) {
    const myInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    };

    const postRequest = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error posting data: ${response.status}`);
            }
            await response.json();
            postOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    postRequest(baseURL);
}

export function put(customer, id, putOpCallback) {
    const myInit = {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    };
    const putRequest = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error updating data: ${response.status}`);
            }
            await response.json();
            putOpCallback();
        } catch (error) {
            alert(error);
        }
    }
    putRequest(baseURL + '/' + id);
}

