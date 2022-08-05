import axios from "axios";

export default function Afetch() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

function Delete(id) {
  alert(id);
  return axios({
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    method: "DELETE"
  });
}

function AddData(title, status) {
  return axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    data: {
      title,
      status
    }
  });
}

function Toggle({ id, newStatus }) {
  return axios({
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
}

export { Delete, AddData, Toggle };
