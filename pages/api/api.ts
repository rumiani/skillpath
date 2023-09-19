
export const serverUrl = "http://localhost:5000";

interface pathType {
  title: string;
  body: string;
  tags: string[];
}


export const createPath = (path: pathType) => {
  return fetch(serverUrl + "/newpath", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(path),
  });
};

export const deletePath = (pathUrl: string) => {
  return fetch(serverUrl + "/path/" + pathUrl, {
    method: "DELETE",
  });
};

export const updatePath = (pathUrl: string, path: pathType) => {
  console.log(path);
  
  return fetch(serverUrl + "/path-edit/" + pathUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(path),
  });
};
export const getPath = (pathUrl:string) => fetch(pathUrl);



export const login = (user) => {
  return fetch(serverUrl + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};