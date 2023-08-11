import Storage from "../lib/storage.js";
// console.log("hello")

const storage = new Storage();
const list = storage.get();

// [{}, {}. {}]

const createRow = (row) => `
        <tr>
            <td>${row.id}</td>
            <td><a href='./view.html?id=${row.id}'>${row.title}</a></td>
            <td>${row.writer}</td>
            <td>${row.created_at}</td>
            <td>${row.hit}</td>            
        <tr/>
    `;

const components = list.map(createRow);

const tbody = document.querySelector("tbody");
tbody.innerHTML = components.join("");
