(function (scope) {
  'use strict';

  function ajax(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data );
  }

  function $on(target, type, cb) {
    target.addEventListener(type, cb, false);
  }

  scope.jq = scope.jq || {};
  scope.jq = {
    ajax,
    $on
  };
})(window);
