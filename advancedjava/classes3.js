class Laptop {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.#numCPUFans); // error: private property is not accessible
