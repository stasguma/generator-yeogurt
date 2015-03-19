/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('React sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any react files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js',
        'client/app/' + react + '/' + react + '.js',
        'client/app/' + react + '/' + react + '.jsx'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any react files when using Static Jade', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js',
        'client/app/' + react + '/' + react + '.js',
        'client/app/' + react + '/' + react + '.jsx'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any react files when using Static Swig', function() {
    it('Handles defaults', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig'
      });
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js',
        'client/app/' + react + '/' + react + '.js',
        'client/app/' + react + '/' + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create react files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js',
        'client/app/' + react + '/' + react + '.js'
      ];
      var fileContentToTest = [
        ['client/app/' + react + '/' + react + '.js', /React\.createElement/i]
      ];
      var fileContentNotThere = [
        ['client/app/' + react + '/__tests__/' + react + '.spec.js', /\jsx/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useJsx: false
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          assert.noFileContent(fileContentNotThere);
          done();
        });
      });
    });
    it('Handles defaults with JSX', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js',
        'client/app/' + react + '/' + react + '.jsx'
      ];
      var fileContentToTest = [
        ['client/app/' + react + '/__tests__/' + react + '.spec.js', /React\.createFactory/i],
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/app/' + react + '/' + react + '.jsx'
      ];
      var filesNotCreated = [
        'client/app/' + react + '/__tests__/' + react + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
  });
});
