class Calc {
    add(a: number, b: number): number {
      return a + b;
    }
    sub(a: number, b: number): number {
      return a - b;
    }
    multi(a: number, b: number): number {
      return a * b;
    }
    devide(a: number, b: number): number {
      return a / b;
    }
  }
  export default new Calc();