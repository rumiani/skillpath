export const serverUrl = "http://localhost:5000";

interface pathType {
  title: string;
  body: string;
  tags: string[];
}
const postMethod = (path: pathType) => ({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(path),
});

export const createPath = (path: pathType) => {
  return fetch(serverUrl + "/newpath", postMethod(path));
};

export const deletePath = (pathUrl: string) => {
  return fetch(serverUrl + "/path/" + pathUrl, {
    method: "DELETE",
  });
};

export const getPath = (pathUrl:string) => fetch(pathUrl);
