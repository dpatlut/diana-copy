var classroom = {
    'teacher': "Miss McGillucuddy",
    'class': "Grade 3",
    'students': [
        {
            'firstName': 'Joe',
            'lastName': 'Porfido',
            'age': 5,
            'hair': 'brown',
            'aspirations': ['Go to the moon', 'Meet George Clooney'],
            'grades':[100,100,100,100,100]
    },
        {
            'firstName': 'Sally',
            'lastName': 'Ray',
            'age': 6,
            'hair': 'brown',
            'aspirations': ['Eat a taco', 'Go to heaven'],
            'grades':[60,60,60,60,60]
    },
        {
            'firstName': 'Joey',
            'lastName': 'Bagadonuts',
            'age': 7,
            'hair': 'red',
            'aspirations': ['Drive a car', 'get an iPhone'],
            'grades':[0,80,80,80,80]

    },
        {
            'firstName': 'Larry',
            'lastName': 'Beans',
            'age': 10,
            'hair': 'black',
            'aspirations': ['Fly an airplane', 'Cancun for spring break'],
            'grades':[90,90,90,90,90]
    },
        {
            'firstName': 'Yvette',
            'lastName': 'Blahblahblah',
            'age': 8,
            'hair': 'brown',
            'aspirations': ['Get drunk this weekend', 'Go to General Assembly'],
            'grades':[95,95,95,95,95]

    }
 ]
}

/*WARM UP ACTIVITY
1) Add an array of grades to each student in the Classroom object you created this morning.
2) Use the Mean function to output the average grade for each student. 
3) You should use descriptive output statements, i.e. "Student name in soandso class has an average grade of XXX"

*/

/*WARM UP
    1) Add an array of grades to each student in your classroom object
    2) Use the Mean function to output the average grade of every student in the class 
    3) Make sure your output is well-formed and descriptive




*/

console.log( classroom.teacher+",  "+classroom.class);

classroom.students.forEach(
  function(item, index){
    console.log(item.firstName," ", item.lastName);
    console.log("Age: ",item.age," Hair: ",item.hair);
    console.log("Aspirations:")
    for(var  i=0; i<item.aspirations.length;i++)
        console.log("  -",item.aspirations[i]);

    var gradeList="";
    for(var i=0;i<item.grades.length-1;i++){
        gradeList+=item.grades[i]+", ";
    }

    gradeList+=item.grades[item.grades.length-1];
    console.log("Grades:", gradeList);
    console.log(" ");
  }

<<<<<<< HEAD
);
=======
/*CLASSROOM ACTIVITIES
>>>>>>> 1a7080bbf6e296d74aeb5449f69d8e02a54026b2

1) Use the map method to automatically create a 'fullname' field for each student in your class.



2) Use foreach to write two report methods: 

    a) Miss McGillucuddy, Grade 3
       Joe Porfido
       ...
       Yvette Blahblahblah


       
    b) Miss McGillucuddy, Grade 3
    
       Joe Porfido
       Age: 5  Hair: brown
       Aspirations: 
        - Go to the moon
        - Meet George Clooney
       Grades: 100, 80, 90, ...
       ...
       
       Yvette Blahblahblah
       Age: 8  Hair: brown
       Aspirations:
        - Get drunk this weekend
        - Go to General Assembly
       Grades: 100, 90, 95, ...



3) Use the filter method to create a new array of students with age grades < 8. Output the name of each of these students.



*/
