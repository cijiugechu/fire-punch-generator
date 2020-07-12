import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import './index.css';
import rawImg from './raw.jpg';

raw.src = rawImg;

var inputBox = document.getElementById('input');
var aimText = document.getElementById('text');
var dlButton = document.getElementById('dl-btn');

inputBox.oninput = function(){
    aimText.innerHTML = inputBox.value;
};

dlButton.onclick = function(){
    domtoimage.toBlob(document.getElementById('box'))
        .then(function(blob){
            saveAs(blob,'new-pic.png');
        });
};