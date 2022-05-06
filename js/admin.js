import { selectData, updateData } from './crud.js';
var events;

window.addEventListener('DOMContentLoaded', (event) => {
    process();
});

async function process() {
    let idSelect = document.getElementById('select-id');
    let titleInput = document.getElementById('input-title');
    let descriptionInput = document.getElementById('input-description');
    let imageInput = document.getElementById('input-image');
    let iframeInput = document.getElementById('input-iframe');
    let saveButton = document.getElementById('button-save');
    await getData();
    renderInput(events['1']);

    idSelect.addEventListener('change', (eventSelect) => {
        let data = events[idSelect.value];
        renderInput(data);
    });

    saveButton.addEventListener('click', (eventSaveButton) => {
        let data = {};
        data.id = idSelect.value;
        data.title = titleInput.value;
        data.description = descriptionInput.value;
        data.image = imageInput.value;
        data.iframe = iframeInput.value;
        updateData(data);
        getData();
    });
}

function renderInput(data) {
    let idSelect = document.getElementById('select-id');
    let titleInput = document.getElementById('input-title');
    let descriptionInput = document.getElementById('input-description');
    let imageInput = document.getElementById('input-image');
    let iframeInput = document.getElementById('input-iframe');
    let saveButton = document.getElementById('button-save');
    titleInput.value = data.title;
    descriptionInput.value = data.description;
    imageInput.value = data.image;
    iframeInput.value = data.iframe;
}

async function getData() {
    events = await selectData();
}
