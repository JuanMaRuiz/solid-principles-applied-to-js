(function(scope){

  function ajax(url) {
    return fetch(url, {
      mode: 'no-cors'})
      .then(function(response) {
        response.json();
      })
      .then(data => JSON.stringify(data))
  }



  scope.jq = scope.jq || {};
  scope.jq.ajax = ajax;
})(window);
