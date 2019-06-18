(function (scope) {
  'use strict';

  function ajax(url) {
    if (scope.fetch) {
      return fetch(url)
        .then(response => response.json())
        .then(data => data );
    } else {
      return makeRequest(url);
    }
  }

  function makeRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          return resolve(JSON.parse(xhr.responseText));
        } else {
          return resolve(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
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
