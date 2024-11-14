class GamingLaptop extends Laptop {
  constructor(brand) {
    super(brand); // public property, externally available to instances
    this._hardDiskType = "SSD"; // protected props should be accessed by children, not instances
    this.#numCPUFans = 2; // error: private property is not accessible
    this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
  }
  isGaming() {
    return true;
  } // public method
}
const alienware = new GamingLaptop("Alienware");
//console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType); // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()); // better: public method for accessing protected property
