import sendRequest from "./send-request";
const BASE_URL = '/api/activities';

export async function getAll() {
    return sendRequest(BASE_URL);
}

// this function likely won't be used in alPal, but..
// providing as a reminder to follow RESTful routing, etc.,
export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}