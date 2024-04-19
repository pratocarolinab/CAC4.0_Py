
const container = document.getElementById("userContainer");

function addElements() {
    const originalElement = container.querySelector(".home");
    const clonedElement = originalElement.cloneNode(true);
    container.appendChild(clonedElement);
}

window.onload = function() {
    addElements();
}

container.addEventListener("scroll", function() {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        addElements();
    }
});