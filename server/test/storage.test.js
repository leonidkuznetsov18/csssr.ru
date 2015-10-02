import fs from 'fs';
import {assert} from 'chai';

import {handler, limitHandler} from '../lib/storage';

describe('storage', function() {
  it('should exists uploads folder', function(done) {
    return fs.exists('uploads', function(exists) {
      if (exists) {
        return done();
      } else {
        return done(new Error('Not found /uploads'));
      }
    });
  });

  describe('handler', function() {
    it('should return UNKNOWN error if req.file not exists', function() {
      const req = {};
      const res = {
        send: function(data) {
          assert.equal(data.result, 'fail');
          return assert.equal(data.error.code, 'UNKNOWN');
        }
      };
      return handler(req, res);
    });
  });

  describe('limit file size handler', function() {
    return it('should return FILE_LARGE error', function() {
      const err = {
        code: 'LIMIT_FILE_SIZE'
      };
      const req = {};
      const res = {
        send: function(data) {
          assert.equal(data.result, 'fail');
          return assert.equal(data.error.code, 'FILE_LARGE');
        }
      };
      const next = function() {};
      return limitHandler(err, req, res, next);
    });
  });
});
