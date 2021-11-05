/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/root.css';
import './styles/global.scss';
import './styles/app.css';
import './styles/navbar.css';
import './styles/pagination.css';
import './styles/penguin.css';

require('p5/lib/p5.min')
import './js/rocket.js';
import './js/particle.js';
import './js/sketch.js';

// start the Stimulus application
import './bootstrap';


const $ = require('jquery');
require('bootstrap');

/*
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
*/