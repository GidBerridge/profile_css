import { menuFade } from "./menuFade.js";
import { scroll } from "./smoothScrolling.js";
import { revealSections } from "./revealSections.js";
import { gallery } from "./gallery.js";
import { bg } from "./bg.js";

import { hamburgerMenu } from "./hamburger.js";

Splitting();

bg()

// gallery
gallery();

// Smooth scrolling
scroll();

// Menu fade animation
menuFade(); 

// Reveal sections
revealSections();

// Hamburger
hamburgerMenu()



