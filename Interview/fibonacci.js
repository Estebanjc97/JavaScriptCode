/**

To Find Fibonacci Series

*/
var code = (function(){
	return{
		fibonacci: function(num = 0){
			var fib = [];

			fib[0] = 0;
			fib[1] = 1;
			for(var i=2; i<=num; i++){
			    fib[i] = fib[i-2] + fib[i-1];

			}
			return fib;
		}
	}
})();