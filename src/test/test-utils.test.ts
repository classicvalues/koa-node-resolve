/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import test from 'tape';

import {squeezeHTML} from './test-utils';

test('squeezeHTML will not put inject newlines where no-spaces exist', (t) => {
  t.plan(1);
  t.equal(squeezeHTML('<h1>Hello</h1>'), '<h1>Hello</h1>');
});

test('squeezeHTML will shrink multiple spaces to single spaces', (t) => {
  t.plan(1);
  t.equal(squeezeHTML('<h1> Hello </h1>'), '<h1>\nHello\n</h1>');
});
