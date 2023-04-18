


const mongoose =require('mongoose');

 mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/fruitsDB" , { useNewUrlParser: true});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
 console.log("Connected");
}
const fruitSchema = new mongoose.Schema ({
  name:{
    type: String,
    required: [true, "plese check your data entry no name specified"]
  },
  rating:{
    type: Number,
    min:1,
    max:10
  },
  reveiw: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "apple",
  rating: 7,
  reveiw: "pretty good"
});

// fruit.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Guru",
  rating: 37
});

// person.save();

// const kiwi = new Fruit ({
//   name: "kiwi",
//   rating: 10,
//   reveiw: "awesome"
// });
// const orange = new Fruit ({
//   name: "orange",
//   rating: 4,
//   reveiw: "pretty sour"
// });
// const banana = new Fruit ({
//   name: "banana",
//   rating: 9,
//   reveiw: "tasty"
// });

// Fruit.insertMany([kiwi,orange, banana], function(err){
//   if(err){
//     consoli.log(err);
//   } else {
//     console.log("successfully terminated the program");
//   }
// })


// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }else {
// mongoose.connection.close();
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });

//   }
// });

Fruit.find()
.then(function (fruits) {
 
 
  fruits.forEach(function(fruit){
   console.log(fruit.name);
  });
})
.catch(function (err) {
  console.log(err);
});


Fruit.updateOne({_id: "63c8cc8dd4ae4c4a095c9ac6"}, {name:"peach"})
// {
//   if(err){
//       console.log(err);
//     } else {
//       console.log("successfully terminated the program");
//     }
// });
.then(()=>{
 console.log("happy");
})
.catch((err)=> {
  console.log(err);
});
