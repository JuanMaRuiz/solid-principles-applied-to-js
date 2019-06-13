(function(scope){

  function ajax(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data );
  }



  scope.jq = scope.jq || {};
  scope.jq.ajax = ajax;
})(window);
