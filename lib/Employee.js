// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(name) {
    const newName = new Employee(name);
    this.name.push(newName);
    
   
  }

  getID() {}

  getEmail() {}

  getRole() {
    const role = "Employee";
    return role;
  }
}

module.exports = Employee;
