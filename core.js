const crypto = require('crypto');

function doWork(iterations = 200000) {
  let h = 'seed';
  for (let i = 0; i < iterations; i++) {
    h = crypto.createHash('sha256').update(h).digest('hex');
  }
  return h;
}

module.exports = { doWork };