/* eslint-disable no-undef */
M.AutoInit();

document.addEventListener("DOMContentLoaded", function() {
    let sidenavs = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavs, {edge: "right"});

    let fabs = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(fabs, {direction: "left"});

    let modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {
        opacity: 0.8
    });
});