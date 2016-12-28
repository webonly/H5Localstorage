/**
 * HRG-localStorage v1.1.1 
 * Copyright 2015-2016 HIT ROBOT GROUP
 * Date: 2016-11-14 
 *
 */

var localStorage2=(function(){
   get=function(k){
     return JSON.parse(window.localStorage.getItem(k)); 
   },
   add=function(k, v) {
        window.localStorage[k] = JSON.stringify(v);
      },
   remove=function(k) {
        window.localStorage.removeItem(k);
      },
   clear=function(){
      window.localStorage.clear();
     },
   all=function(){
       return window.localStorage;
   }
})();



console.log(localStorage2);

// var kkkk={"name":"999","sex":"888"};
// localStorage.add("aaa",kkkk);
// //console.log(Cache.get("aaa"));

// document.getElementById("mm").innerHTML=localStorage.get("aaa");