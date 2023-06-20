# React Interactions with Josh Comeau

*_insert a bunch of wasted time here because a tech conference couldn't plan ahead to sort out connection of speaker laptops_*

_**JS**_

`elem.getBoundingClientRect()` takes a while so maybe don't repeat this calculation a ton. To compensate, you *could*
insert more listeners for scroll, etc.

_**React**_

Custom hooks are helpful, like `useMou[react-interactions-peterson.md](react-interactions-peterson.md)sePosition`

_**CSS**_

CSS Transitions aren't super smooth, try out `react-spring` & its `animated.group/.svg`

_**Misc.**_

Got a random blender model of a toaster you want to shove into an app? Use `three.js` & `react-three/fiber`

Wrap those rotation transforms w/ `useSpring` for some nice sweet interpolation

# The End. More info up @ joshwcomeau.com/render