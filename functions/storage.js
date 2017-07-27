
var Storage = {
  
  var ls = localStorage ? localStorage : null;
  
  function getJson() {
    return JSON.parse(ls);
  }
  
  put : function (key, value) {
    ls.setItem(key, value)
  },
  
  has : function (key) {
    var data = ls.getItem(key)
    
    return typeof data != 'undefined';
  },
  
  get : function (key) {
    return ls.getItem(key)
  },
  
  all : function () {
    return JSON.parse(ls.getItem('__data__');
  },
  
  forget : function (key) {
    return this;
  },
  
  flush : function () {
    ls = JSON.parse('{}');
    return this;
  }
  
}
