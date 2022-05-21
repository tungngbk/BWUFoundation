import { insertData, selectData, updateData } from './crud.js';
var events;

window.addEventListener('DOMContentLoaded', (event) => {
    process();
});

async function process() {
    await getData();

    $('#editButton').on('click', (event) => {
        edit();
    });

    $('#createButton').on('click', (event) => {
        create();
    });

    $('#creator').on('click', (event) => {
        openCreator();
    });
}

function renderTable() {
    let tableBody = document.getElementById('table-body');
    let HTML = ``;
    for (let i = 1; i <= 6; i++) {
        let temp = `
            <tr>
                <th scope="row">${i}</th>
                <td>${events[i].title}</td>
                <td class="d-flex flex-row justify-content-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button data-toggle="tooltip" title="Chỉnh sửa" data-id=${i} type="button" class="editor btn btn-outline-success">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button data-toggle="tooltip" title="Đẩy lên" data-id=${i} ${
            i == 1 ? 'disabled' : ''
        } type="button" class="up btn btn-outline-success">
                            <i class="fa-solid fa-arrow-up"></i>
                        </button>
                        <button data-toggle="tooltip" title="Hạ xuống" data-id=${i} ${
            i == 6 ? 'disabled' : ''
        } type="button" class="down btn btn-outline-success">
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
        HTML += temp;
    }
    tableBody.innerHTML = HTML;

    let upButtons = document.getElementsByClassName('up');
    let downButtons = document.getElementsByClassName('down');
    let editorButtons = document.getElementsByClassName('editor');
    for (let i = 0; i < 6; i++) {
        upButtons[i].addEventListener('click', (event) => {
            up(i + 1);
        });
        downButtons[i].addEventListener('click', (event) => {
            down(i + 1);
        });
        editorButtons[i].addEventListener('click', (event) => {
            openEditor(i + 1);
        });
    }
}

function up(id) {
    let base = {
        id: id,
        title: events[id - 1].title,
        image: events[id - 1].image,
        iframe: events[id - 1].iframe,
    };

    let target = {
        id: id - 1,
        title: events[id].title,
        image: events[id].image,
        iframe: events[id].iframe,
    };

    updateData(base);
    updateData(target);
    getData();
}

function down(id) {
    let base = {
        id: id,
        title: events[id + 1].title,
        image: events[id + 1].image,
        iframe: events[id + 1].iframe,
    };

    let target = {
        id: id + 1,
        title: events[id].title,
        image: events[id].image,
        iframe: events[id].iframe,
    };

    updateData(base);
    updateData(target);
    getData();
}

function openEditor(id) {
    $('#mainModal').modal('show');
    $('#mainModalLabel').html(`Chỉnh sửa sự kiện ${id}`);

    $('#editButton').show();
    $('#createButton').hide();

    $('#idInput').val(id);
    $('#titleInput').val(events[id].title);
    $('#imageInput').val(events[id].image);
    $('#iframeInput').val(events[id].iframe);
}

function edit() {
    let data = {};
    data.id = $('#idInput').val();
    data.title = $('#titleInput').val();
    data.image = $('#imageInput').val();
    data.iframe = $('#iframeInput').val();

    updateData(data);
    $('#mainModal').modal('hide');
    getData();
}

function openCreator() {
    $('#mainModal').modal('show');
    $('#mainModalLabel').html(`Thêm mới sự kiện`);

    $('#editButton').hide();
    $('#createButton').show();

    $('#idInput').val('');
    $('#titleInput').val('');
    $('#imageInput').val('');
    $('#iframeInput').val('');
}

function create() {
    refreshData();

    let data = {};
    data.id = 1;
    data.title = $('#titleInput').val();
    data.image = $('#imageInput').val();
    data.iframe = $('#iframeInput').val();

    insertData(data);

    $('#mainModal').modal('hide');
    getData();
}

function refreshData() {
    for (let i = 6; i >= 2; i--) {
        let data = {
            id: i,
            title: events[i - 1].title,
            image: events[i - 1].image,
            iframe: events[i - 1].iframe,
        };

        updateData(data);
    }
}

async function getData() {
    events = await selectData();
    renderTable();
}
