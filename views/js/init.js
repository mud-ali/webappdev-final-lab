M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    let sidenavs = document.querySelectorAll('.sidenav');
    let i = M.Sidenav.init(sidenavs, {edge: 'right'});

    let fabs = document.querySelectorAll('.fixed-action-btn');
    i = M.FloatingActionButton.init(fabs, {direction: 'left'});

    let modals = document.querySelectorAll('.modal');
    i = M.Modal.init(modals, {
      opacity: 0.8
    });
});