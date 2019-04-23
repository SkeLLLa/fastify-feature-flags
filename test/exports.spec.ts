process.env.SUPPRESS_NO_CONFIG_WARNING = '1';

import 'jest';
import lib = require('../src/index');
const {name} = require('../package.json');

describe(name, () => {
  test('main lib file exported', async () => {
    expect(lib).toBeDefined();
  });
});
