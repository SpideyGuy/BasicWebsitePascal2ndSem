window.onload = function(event) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("sing-progress-bar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 80) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}