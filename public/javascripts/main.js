import {signInHandler} from './signIn/signIn.js';
import {mainHtml} from './mainHtml.js';

document.body.innerHTML = mainHtml;

signInHandler();