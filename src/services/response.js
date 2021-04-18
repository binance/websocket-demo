export function handleResponse(response) {
  return response.data ? response.data : response;
}

export function handleError(error) {
  return error.data ? error.data : error;
}
