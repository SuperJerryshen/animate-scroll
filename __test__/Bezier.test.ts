import Bezier from '../src/Bezier';

const params = [0.25, 0.1, 0.25, 1];
const config = { precision: 120 };
const bezier = new Bezier(params[0], params[1], params[2], params[3], config);

// test point for Bezier.prototype.getCoord
const testGetCoords = [
  { input: 0, output: [0, 0] },
  { input: 1, output: [1, 1] },
];

describe('Generate "Bezier" instance successfully', () => {
  test('create instance', () => {
    // test whether instance's properties are created successfully
    expect(bezier.controlPoints).toEqual(params);
    expect(bezier.initialPoints).toEqual([0, 0, 1, 1]);
    expect(bezier.coords.length - 2).toBe(config.precision);
    // test whether Constructor's prototype property are created successfully
    expect(typeof Bezier.prototype.getCoord).toBe('function');
    expect(typeof Bezier.prototype.getY).toBe('function');
    expect(typeof Bezier.prototype.getCoordAmount).toBe('function');
  });
  test('"this.getCoord" works', () => {
    testGetCoords.forEach(coord => {
      expect(bezier.getCoord(coord.input)).toEqual(coord.output);
    });
  });
});
