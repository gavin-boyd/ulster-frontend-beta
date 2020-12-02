//https://github.com/foundation/foundation-zurb-template/blob/818f31ff2a22ff51a5c35de00e9148a0618e1b51/src/assets/js/lib/foundation-explicit-pieces.js

import $ from 'jquery';

import { Foundation } from 'foundation-sites/js/foundation.core';
import { Tabs } from 'foundation-sites/js/foundation.tabs';
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';

Foundation.addToJquery($);

Foundation.plugin(Tabs, 'Tabs');
Foundation.plugin(OffCanvas, 'OffCanvas');

export { Foundation };
