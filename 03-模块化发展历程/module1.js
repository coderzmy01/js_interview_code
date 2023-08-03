// (function (window) {
//   let data = "coderzmy";
//   function foo () {
//     console.log(`${data}`);
//   };
//   function bar () {
//     console.log(`bar()${data}`);
//     otherFunc()
//   };
//   function otherFunc () {
//     console.log('otherFunc');
//   }
//   window.myModule = { foo, bar };
// })(window)
var singleton = (function () {
  var instance;
  function init () {
    var privateVar = "I am private";
    function privateMethod () {
      console.log("I am a private method");
    }
    return {
      publicVariable: 'I am public',
      publicMethod(){
        console.log("public");
        privateMethod()
      }
    }

  }
  return {
    getInstance () {
      if (!instance) {
        instance = init();
      }
      return instance
    }
  }
})