import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const proto = Object.getPrototypeOf;
    const Cls = proto(proto(this)).constructor;
    return new Cls();
  }
}
