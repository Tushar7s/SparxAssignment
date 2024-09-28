// src/api.js
const API_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export const fetchEmployees = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.map((item) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        postId: item.postId,
    }));
};
