import { animate } from '../../libs/animejs/modules/animation/animation.js';
import { splitText } from '../../libs/animejs/modules/text/split.js';
import { stagger } from '../../libs/animejs/modules/utils/stagger.js';
const { chars } = splitText('#Htitle', { words: false, chars: true });

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

});