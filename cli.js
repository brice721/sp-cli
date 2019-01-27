#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
	Examples
	  $ --help --version
	  $ <command> [<args>]
`);