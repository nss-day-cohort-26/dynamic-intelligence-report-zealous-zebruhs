var navbarToggle = function navbarToggle(active){
    document.getElementById("summary").classList = "nav-item nav-link";
    document.getElementById("rap").classList = "nav-item nav-link";
    document.getElementById("news").classList = "nav-item nav-link";
    document.getElementById("financial").classList = "nav-item nav-link";
    document.getElementById("travel").classList = "nav-item nav-link";

    document.getElementById(active).classList = "nav-item nav-link active"
}
