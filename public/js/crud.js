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
    let portfolioImage_1 = document.getElementById('portfolio-image-1');
    let portfolioIframe_1 = document.getElementById('portfolio-iframe-1');

    portfolioHeading_1.innerHTML = events[1].title;
    portfolioImage_1.src = events[1].image;
    portfolioIframe_1.innerHTML = events[1].iframe;

    // Event 2
    let portfolioHeading_2 = document.getElementById(
        'portfolio-caption-heading-2'
    );
    let portfolioImage_2 = document.getElementById('portfolio-image-2');
    let portfolioIframe_2 = document.getElementById('portfolio-iframe-2');

    portfolioHeading_2.innerHTML = events[2].title;
    portfolioImage_2.src = events[2].image;
    portfolioIframe_2.innerHTML = events[2].iframe;

    // Event 3
    let portfolioHeading_3 = document.getElementById(
        'portfolio-caption-heading-3'
    );
    let portfolioImage_3 = document.getElementById('portfolio-image-3');
    let portfolioIframe_3 = document.getElementById('portfolio-iframe-3');

    portfolioHeading_3.innerHTML = events[3].title;
    portfolioImage_3.src = events[3].image;
    portfolioIframe_3.innerHTML = events[3].iframe;

    // Event 4
    let portfolioHeading_4 = document.getElementById(
        'portfolio-caption-heading-4'
    );
    let portfolioImage_4 = document.getElementById('portfolio-image-4');
    let portfolioIframe_4 = document.getElementById('portfolio-iframe-4');

    portfolioHeading_4.innerHTML = events[4].title;
    portfolioImage_4.src = events[4].image;
    portfolioIframe_4.innerHTML = events[4].iframe;

    // Event 5
    let portfolioHeading_5 = document.getElementById(
        'portfolio-caption-heading-5'
    );
    let portfolioImage_5 = document.getElementById('portfolio-image-5');
    let portfolioIframe_5 = document.getElementById('portfolio-iframe-5');

    portfolioHeading_5.innerHTML = events[5].title;
    portfolioImage_5.src = events[5].image;
    portfolioIframe_5.innerHTML = events[5].iframe;

    // Event 6
    let portfolioHeading_6 = document.getElementById(
        'portfolio-caption-heading-6'
    );
    let portfolioImage_6 = document.getElementById('portfolio-image-6');
    let portfolioIframe_6 = document.getElementById('portfolio-iframe-6');

    portfolioHeading_6.innerHTML = events[6].title;
    portfolioImage_6.src = events[6].image;
    portfolioIframe_6.innerHTML = events[6].iframe;
}

function updateData(data) {
    update(ref(db, 'Events/' + data.id), {
        title: data.title,
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
