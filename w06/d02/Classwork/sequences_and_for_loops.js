/*var n = parseInt(process.argv[2]);
var firstTerm = parseInt(process.argv[3]);
var secondTerm = parseInt(process.argv[4]);

var difference = secondTerm-firstTerm;

console.log(firstTerm);
console.log(secondTerm);

prevTerm = secondTerm;
for(var i=0; i<n-2; i++){
		nextTerm = prevTerm + difference;
		console.log(nextTerm);
		prevTerm=nextTerm;
}

cur = next = 1
for 1..n:
    print cur
    last = cur
    cur = next
    next += last

var n = parseInt(process.argv[2]);
var currentTerm = 0;
var nextTerm = 1;

for(var i = 1; i<=n; i++){
	console.log(currentTerm);
	lastTerm = currentTerm;
	currentTerm = nextTerm;
	nextTerm = nextTerm + lastTerm;
}
*/

var n = parseInt(process.argv[2]);

//calculate the nth term of a Fibonacci Sequence
var fibRecursive = function fibRecursive(n){
	if(n===1) return 0;
	else if (n===2) return 1;
	else{
	   return fibRecursive(n-1) + fibRecursive(n-2);
	}
}

for(var i=1; i<n; i++){
	var start = new Date();
	var ans = fibRecursive(i);
	var finish = new Date();
	var totalTime = finish-start;
	console.log(i,"th term:",ans, "took ", totalTime/1000, "seconds" );
}




