/*const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  let lastCommand, repoDirectoryContents;
  before(async () => {
    repoDirectoryContents = await getDirectoryContents('../sql_reference');
    lastCommand = await getLastCommand();
  });

  it('should use the "touch" command to create the correct file', async () => {
    assert(lastCommand[0] === 'touch' && /\.gitignore$/.test(lastCommand[1]) && repoDirectoryContents.indexOf('.gitignore' >= 0));
  });
});*/
