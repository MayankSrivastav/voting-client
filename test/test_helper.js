// helper file for tests

import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView();

// Set the global document as doc
global.document = doc;
global.window = win;