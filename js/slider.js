window.onload = function() {
    const SLIDE__IMG = [
        'assets/img/avatars-1.png',
        'assets/img/avatars-2.png',
        'assets/img/avatars-3.png',
        'assets/img/avatars-4.png',];

    let slidePosition = 0;
    function passImages() {
        if (slidePosition >= SLIDE__IMG.length - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        document.getElementById("slider_imagen").style.backgroundImage = `url(${SLIDE__IMG[slidePosition]})`;
        // document.getElementById("slider_imagen").style.backgroundPosition = "center";
    }
    passImages();
    setInterval(passImages, 2500);
}