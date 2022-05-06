import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBIoGXep-sIN04UnewrKy8ZNv8CYM3AJV8',
    authDomain: 'bwufoundation.firebaseapp.com',
    projectId: 'bwufoundation',
    storageBucket: 'bwufoundation.appspot.com',
    messagingSenderId: '894403366609',
    appId: '1:894403366609:web:c79ba52e2ae88dc0b9fff0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js';

const db = getDatabase();

function insertData(data) {
    set(ref(db, 'Events/' + data.id), {
        title: data.title,
        description: data.description,
        image: data.image,
        iframe: data.iframe,
    })
        .then(() => {
            console.log('insert done');
        })
        .catch((error) => {
            console.log('error: ', error);
        });
}

async function selectData() {
    let res = {};
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'Events/'));
    for (let key in snapshot.val()) {
        res[key] = snapshot.val()[key];
    }
    return res;
}

async function renderPortfolio() {
    let events = await selectData();

    // Event 1
    let portfolioHeading_1 = document.getElementById(
        'portfolio-caption-heading-1'
    );
    let portfolioSubheading_1 = document.getElementById(
        'portfolio-caption-subheading-1'
    );
    let portfolioImage_1 = document.getElementById('portfolio-image-1');
    let portfolioIframe_1 = document.getElementById('portfolio-iframe-1');

    portfolioHeading_1.innerHTML = events[1].title;
    portfolioSubheading_1.innerHTML = events[1].description;
    portfolioImage_1.src = events[1].image;
    portfolioIframe_1.innerHTML = events[1].iframe;

    // Event 2
    let portfolioHeading_2 = document.getElementById(
        'portfolio-caption-heading-2'
    );
    let portfolioSubheading_2 = document.getElementById(
        'portfolio-caption-subheading-2'
    );
    let portfolioImage_2 = document.getElementById('portfolio-image-2');
    let portfolioIframe_2 = document.getElementById('portfolio-iframe-2');

    portfolioHeading_2.innerHTML = events[2].title;
    portfolioSubheading_2.innerHTML = events[2].description;
    portfolioImage_2.src = events[2].image;
    portfolioIframe_2.innerHTML = events[2].iframe;

    // Event 3
    let portfolioHeading_3 = document.getElementById(
        'portfolio-caption-heading-3'
    );
    let portfolioSubheading_3 = document.getElementById(
        'portfolio-caption-subheading-3'
    );
    let portfolioImage_3 = document.getElementById('portfolio-image-3');
    let portfolioIframe_3 = document.getElementById('portfolio-iframe-3');

    portfolioHeading_3.innerHTML = events[3].title;
    portfolioSubheading_3.innerHTML = events[3].description;
    portfolioImage_3.src = events[3].image;
    portfolioIframe_3.innerHTML = events[3].iframe;
}

function updateData(data) {
    update(ref(db, 'Events/' + data.id), {
        title: data.title,
        description: data.description,
        image: data.image,
        iframe: data.iframe,
    })
        .then(() => {
            console.log('update done');
        })
        .catch((error) => {
            console.log('error: ', error);
        });
}

export { insertData, selectData, updateData, renderPortfolio };
