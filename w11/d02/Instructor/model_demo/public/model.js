var Grocery = Backbone.Model.extend({
    urlRoot: '/groceries',
    initialize: function(){
        console.log("A new grocery has been created");
        this.on('change', function(){
        console.log('Something has changed.');
    });
    },
     defaults: {
      name: '',
      category: 'food'
  }
});

// console.log('linked it')
// var Dino = Backbone.Model.extend({
//   initialize: function(){
//     console.log("A dino was born!")
//     this.on('invalid', function(model, error){
//       console.log(error);
//     })
//   },
//   defaults: {
//     name: "New Dino",
//   },
//   validate: function(attr){
//     if (attr.type === undefined) {
//       return "Make sure to give your dino a type!"
//     }
//   },
//   showMe: function(){
//     $('body').append($('<h1>').text(this.attributes.name+" is a "+this.attributes.type))
//   }
// });


// var Grocery = Backbone.Model.extend({
//     defaults: {
//         category: 'food'
//       },
//     validate: function(attributes){
//         if(attributes.name === undefined){
//             return "Please set a name.";
//         }
//       },
//     initialize: function(){
//         console.log("A new grocery has been created");

//         this.on('change', function(){
//             console.log('Something has changed.');
//             });

//         this.on("invalid", function(model, error){
//             console.log(error);
//         });
//     }
// });