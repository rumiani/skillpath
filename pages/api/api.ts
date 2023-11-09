export const serverUrl = "http://localhost:5000";

function addAuthHeaders(request) {
  if (localStorage.getItem("profile")) {
    request.headers.append(
      "Authorization",
      `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    );
  }
  return request;
}
function fetchWithAuthInterceptor(url, options = {}) {
  const request = new Request(url, options);
  const modifiedRequest = addAuthHeaders(request);
  return fetch(modifiedRequest);
}

interface pathType {
  title: string;
  body: string;
  tags: string[];
}

export const createPath = (path: pathType) => {
  return fetchWithAuthInterceptor(serverUrl + "/newpath", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(path),
  });
};

export const deletePath = (pathUrl: string) => {
  return fetchWithAuthInterceptor(serverUrl + "/path/" + pathUrl, {
    method: "DELETE",
  });
};

export const updatePath = (pathUrl: string, path: pathType) => {
  console.log(path);

  return fetchWithAuthInterceptor(serverUrl + "/path-edit/" + pathUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(path),
  });
};
export const getPath = (pathUrl: string) => fetchWithAuthInterceptor(pathUrl);

export const login = (credential) => {
  return fetchWithAuthInterceptor(serverUrl + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credential),
  });
};
