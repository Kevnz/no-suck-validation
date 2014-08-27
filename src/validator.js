(function(){
  var forEach = Array.prototype.forEach;
  var log = function (message){
    var summary = document.getElementById('summary');
    summary.insertAdjacentHTML('afterend', '<br />message: ' + message);
  };
  var requiredValidator = function (el) {
    return el.value !== null;
  }
  var eventHandler = function (e) {
    log('eventhandler');
    e.preventDefault();
    var requiredItems = form.querySelectorAll('[data-val-required]');
    log(requiredItems.length);
    forEach.call(requiredItems, function( item ){
      console.log(item.getAttribute);
      log(item.value);
    });
  };
  var form = document.getElementById('mahForm');
  
  
  form.addEventListener('submit', eventHandler);
}());