"use strict";

import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

// PAGE PROGRESS AT TOP
scroll(animate(".progress", { scaleY: [0, 1] }));
