// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
  var happyHolidaysTo;('you')
}


function happyHolidayTo(holiday, name) {
  return "Happy $(holiday), ${name}!"
  happyHolidayTo('christmas')
  happyHolidayTo('meredith')
  
}







function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}
 




sayHelloTo('Isabel') // "Hello, Isabel!"
sayHelloTo("Jane") // "Hello, Jane!"
sayHelloTo("R2-D2") // "Hello, R2-D2!"
sayHelloTo(1) // "Hello, 1!"
 
// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"