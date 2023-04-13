export function tspan() {

    const spans = document.querySelectorAll('span');
    const rotations = [];

    for (let i = 0; i < spans.length; i++) {
        rotations[i] = 10 * Math.random() - 5;
        spans[i].setAttribute('rotate', rotations[i]);
    }

    setTimeout(() => {
        for (let i = 0; i < spans.length; i++) {
            spans[i].setAttribute('rotate', 0);
        }
    }, 5000);

}