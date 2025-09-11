// program + software information(Os) +hardware context+ +data=process 
//process is run , not a program
//advance feature of js6
//arrow function
//let and const
//promise
//spread and rest(...)
//filter,module,reduce
//template literal
//class
//modules
//default parameter
//destructing
//fetch


function register(login) {
  setTimeout(() => {
    console.log("hello jee");
    login()
  }, 2000);
}

function login(SendEmail) {
  setTimeout(() => {
    console.log("logging is taken place");
    SendEmail()
  }, 2000);
}

function Sendemail(getData) {
  setTimeout(() => {
    console.log("email is sending to the user");
    getData()
  }, 2000);
}
//callback hell

function getData(DisplayData) {
  setTimeout(() => {
    console.log("Data is fetching");
    DisplayData()
  }, 2000);
}

function DisplayData() {
  setTimeout(() => {
    console.log("Data is displaying on the screen ");
  }, 2000);
}

register(() => {
  Sendemail(() => {
    login(() => {
      getData(() => {
        DisplayData();
      });
    });
  });
});

