import { animate } from '../../libs/animejs/modules/animation/animation.js';
import { splitText } from '../../libs/animejs/modules/text/split.js';
import { stagger } from '../../libs/animejs/modules/utils/stagger.js';
const { chars } = splitText('#Htitle', { words: false, chars: true });
const driver = window.driver.js.driver;

// id = Htitle

$(document).ready(function() {
    animate(chars, {
        y: [
            { to: '-2.75rem' , ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        rotation: {
            from: '-1turn',
            delay: 0
        },
        delay: stagger(50),
        ease: 'inOutSine',
        loopDelay: 1000,
        loop: true
    });

    $('#sweetalert2-button').click(function() {
        Swal.fire({
            title: 'SweetAlert2',
            text: 'This is a SweetAlert2 popup!',
            icon: 'success',
            confirmButtonText: 'Cool',
            theme: 'bootstrap-5-dark'
        });
    });

    $('#driver-button').click(function() {
        const driverObj = driver({
            showProgress: true,
            animate: true,
            steps: [
                { element: '#Htitle', popover: { title: 'Title', description: 'This is the main title of the page.', position: 'bottom' } },
                { element: '#sweetalert2-button', popover: { title: 'SweetAlert2 Button', description: 'Click this button to see a SweetAlert2 popup.', position: 'right' } },
                { element: '#driver-button', popover: { title: 'Driver.js Button', description: 'Click this button to start the Driver.js tour.', position: 'left' } }
            ]
        });

        driverObj.drive();
    });
});