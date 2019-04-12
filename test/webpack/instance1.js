require('./a')
require('./b')
require('exports-loader')
interface Person {
  firstname: string;
  lastname: string;
}
function greeter (person: Person) {
  
}
function a () {
  return 'a'
}
function b () {
  return 'b'
}