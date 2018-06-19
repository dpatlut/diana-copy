//Callback_demo.js


/*
This first section of code declares a function
and uses it like an object
*/
function outputMary(){
        console.log("Mary Had a Little Lamb");

}//end of outputMary() declaration

console.log("data type of the procedure variable:", outputMary());
console.log("data type of the procedure variable:", typeof(procedure));
console.log("contents of the procedure variable:", procedure);
console.log("name of the procedure referenced by the procedure variable:", procedure.name);
procedure();




/*
This next section of code declares a function
that expects another function as an argument
*/
function doStuff(externalFunction){
    console.log(" ");
    console.log("Hello!");
    console.log("This function is doing a bunch of stuff");
    console.log("And whenever you want");
    console.log("you can invoke the function");
    console.log("passed as an argument");

    externalFunction();//callback is the temporary name given to the argument
    console.log(externalFunction.name, "was passed as an argument to this function");
    console.log(" ");
}//end of doStuff() declaration





doStuff(procedure); //invoke the doStuff function 
                    //with procedure as an argument




/*
This last section of code demonstrates
that function arguments might be used in 
a generic way i.e. you can pass any function as an argument
*/

var procedure2 = function outputHumpty(){
        console.log("Humpty Dumpty Sat on a Wall");
}//end of outputHumpty() declaration

doStuff(procedure2);//invoke the doStuff function 
                    //with procedure2 as an argument



var newFunction = function outputDiddle(){
        console.log("Hey diddle diddle");
}//end of outputHumpty() declaration

doStuff(newFunction);


doStuff(
    function(){
        console.log("Twinkle twinkle little star");
    }
);



