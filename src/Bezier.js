class Bezier {
  constructor(x1 = 0.25, y1 = 0.1, x2 = 0.25, y2 = 1, config = {}) {
    // precision is the amount of points which are stored in this.coords
    const { precision = 120 } = config;
    this.controlPoints = [x1, y1, x2, y2];
    this.initialPoints = [0, 0, 1, 1];
    this.coords = null;
    this.this.getCoordAmount(precision);
  }

  /**
   * get a point's coord on the basis of bezier curve
   * @param {*} t ratio in the definition of bezier curve
   */
  getCoord(t) {
    let _t = 1 - t;
    const [x1, y1, x2, y2] = this.controlPoints;
    const coefficient1 = 3 * t * Math.pow(_t, 2);
    const coefficient2 = 3 * _t * Math.pow(t, 2);
    const coefficient3 = Math.pow(t, 3);
    const px = coefficient1 * x1 + coefficient2 * x2 + coefficient3;
    const py = coefficient1 * y1 + coefficient2 * y2 + coefficient3;
    return [parseFloat(px.toFixed(3), 10), parseFloat(py.toFixed(3), 10)];
  }

  /**
   * input the x-axis coord
   * output the y-axis coord
   * @param {*} x x-axis coord, scope: [0, 1]
   */
  getY(x) {
    if (x >= 1) {
      return 1;
    }
    if (x <= 0) {
      return 0;
    }
    let startX = 0;
    for (let i = 0; i < this.coords.length; i++) {
      if (this.coords[i][0] >= x) {
        startX = i;
        break;
      }
    }
    const axis1 = this.coords[startX];
    const axis2 = this.coords[startX - 1];
    const k = (axis2[1] - axis1[1]) / (axis2[0] - axis1[0]);
    const b = axis1[1] - k * axis1[0];
    return k * x + b;
  }

  /**
   * get some point on bezier curve
   * @param {*} num the amount of point
   */
  getCoordAmount(num) {
    const step = 1 / (num + 1);
    const result = [];
    for (let t = 0; t <= num + 1; t++) {
      result.push(this.getCoord(t * step));
    }
    this.coords = result;
    return result;
  }
}

export default Bezier;
