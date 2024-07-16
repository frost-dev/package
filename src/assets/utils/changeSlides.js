import { ref } from 'vue'

export function useChangeSlides() {
    let xDown = ref(0);
    let yDown = ref(0);
    let xDiff = ref(0);
    let yDiff = ref(0);

    function getTouches(e) {
        return e.touches || e.originalEvent.touches; // For jQuery compatibility
    }

    function toNextSlide(e) {
        xDown = 0;
        yDown = 0;
        xDiff = 0;
        yDiff = 0;
        
        let prevWrapper = e.target.closest('.prev-wrapper');
        let nextWrapper = prevWrapper.nextSibling;

        prevWrapper.animate(
            { transform: ['translateY(0%)', 'translateY(-100%)'] },
            {
                duration: 600, // Animation duration in milliseconds
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Easing function (e.g., 'ease-in', 'ease-out', 'cubic-bezier(0.25, 0.1, 0.25, 1)')
                fill: 'both', // Maintain the final state of the animation
            }
        )
        nextWrapper.animate(
            { transform: ['translateY(0%)', 'translateY(-100%)'] },
            {
                duration: 600,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)', 
                fill: 'both', 
            }
        )
    }

    function toPrevSlide(e) {
        xDown = 0;
        yDown = 0;
        xDiff = 0;
        yDiff = 0;

        let nextWrapper = e.target.closest('.next-wrapper');
        let prevWrapper = nextWrapper.previousSibling;

        prevWrapper.animate(
            { transform: ['translateY(-100%)', 'translateY(0%)'] },
            {
                duration: 600, // Animation duration in milliseconds
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Easing function (e.g., 'ease-in', 'ease-out', 'cubic-bezier(0.25, 0.1, 0.25, 1)')
                fill: 'both', // Maintain the final state of the animation
            }
        )
        nextWrapper.animate(
            { transform: ['translateY(-100%)', 'translateY(0%)'] },
            {
                duration: 600,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)', 
                fill: 'both', 
            }
        )
    }

    function handleTouchStart(e) {
        const firstTouch = getTouches(e)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(e) {
        if (!xDown || !yDown) {
            return;
        }

        const xUp = e.touches[0].clientX;
        const yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    function handleSwipeUp(e) {
        
        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            // Most significant movement is vertical
            if (yDiff > 0) {
                // up swipe
                toNextSlide(e);
            }
        }

        xDown = null;
        yDown = null;
    }

    function handleSwipeDown(e) {
        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            // Most significant movement is vertical
            if (yDiff < 0) {
                // Down swipe
                toPrevSlide(e)
            }
        }

        xDown = null;
        yDown = null;
    }

   

    return {
        getTouches,
        handleTouchStart,
        handleTouchMove,
        handleSwipeUp,
        handleSwipeDown,
        toNextSlide,
        toPrevSlide,
    }
}
