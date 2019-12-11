//import _ from 'lodash';
import { about } from './about'
import { menu } from './menu'
import { contact } from './contact'

function tabClick(id) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (let i = 0; i < 3; i++) {
        let thisTab = document.getElementById(`tab${i}`);
        if (id == i) {
            thisTab.style.backgroundColor = '#490900';
            thisTab.style.color = '#EEE8AA';
        } else {
            thisTab.style.backgroundColor = '#EEE8AA';
            thisTab.style.color = '#490900';
        }
    }

    if (id == 0) { about(); }
    else if (id == 1) { menu(); }
    else { contact(); }
}

let tab0 = document.getElementById('tab0');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let content = document.getElementById('content');

tab0.addEventListener("click", function () { tabClick(0); });
tab1.addEventListener("click", function () { tabClick(1); });
tab2.addEventListener("click", function () { tabClick(2); });

tabClick(0);
