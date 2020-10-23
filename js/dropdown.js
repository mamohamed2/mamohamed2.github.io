function sideBar(e) {
    const x = document.getElementById("sidenav");
    const y = document.getElementById("hideOnOpen");
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden");
        x.classList.add("block");
        x.style.transition = "height 2s";
        y.classList.add("hidden");
        y.classList.remove("block");
        e.classList.add("focus:text-white");
        e.classList.remove("focus:text-yellow-400");
    } else {
        x.classList.remove("block");
        x.classList.add("hidden");
        y.classList.add("block");
        y.classList.remove("hidden");
        e.classList.remove("focus:text-white");
        e.classList.add("focus:text-yellow-400");
    }
}