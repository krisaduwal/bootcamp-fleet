import { request } from "../script/request.js";

const url = "https://jsonplaceholder.typicode.com/posts";

// Function to display posts
function displayPosts(data) {
    if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        return;
    }

    let rows = "";

    data.slice(0,5).forEach((post) => {
        rows +=
        `<div class="card">
            <h2 class="title">${post.blogTitle}</h2>
            <p>${post.blogDescription}</p></div>`;
    });
    document.getElementById("posts").innerHTML = rows;
}

function appendPost(post) {
    const postHTML = 
    `<div class="card">
        <h2 class="title">${post.blogTitle}</h2>
        <p>${post.blogDescription}</p></div>`;
    document.getElementById("posts").insertAdjacentHTML('beforeend', postHTML);
}

// Fetch and display posts
request(url, "GET") 
.then((data) => {
    displayPosts(data);
})
.catch((error) => {
    console.error("Error:", error);
});

// Handle form submission
document.getElementById("postForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    
    const newPost = {
        title: title,
        body: description, 
        userId: 1
    };
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log("New post added:", data);
        // Append the new post immediately
        const serializedPost = {
            blogTitle: data.title,
            blogDescription: data.body
        };
        appendPost(serializedPost);
    })
    .catch(error => {
        console.error("Error adding post:", error);
    });
});
