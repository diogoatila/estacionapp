window.onload = function () {
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#inserirbtn');
    showToastButton.addEventListener('click', function() {
      'use strict';
      var data = {message: 'Credito Inserido '};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
}
