# Art of Scripting Media w/ Randomness, Monica Powell
Mercifully short intro!

links.monica.dev, codepen collection contained in there. 

She likes artsing! Artsing good, creativing good. Creative Coding is NOT when you use weird libraries to do the wrong thing, it's using algorithms to generate visuals. Like a WMP visualizer!

You can also use data to generate art, even MORE like the visualizers of yore; basically taking the inputs and algorithming it to art.

p5.js is a library for creative coding and also making it accessible and inclusive!

You start in p5 with a ```setup``` called once to set the defaults.
Then you get a ```draw``` which is where it continuously renders at 60 fps default. 

Interesting, there's a "noLoop" you can do which appears to make a static drawing? And you can describe, presumably alt-text or whatnot. 

Fun note about true random vs pseudorandomness; true random uses something from nature, typically, so it's non-deterministic. Pseudo just uses an algorithm which is "predictable"

This all leading to how p5 can seed its random, allowing for replicable outputs. There's a nice shorthand where you can pass an array into p5 and it'll choose a random one! Nice. And, further, you can weight your randomness?!? Ah, a bit manual, where basically you generate 3 randoms and choose min or max of it.

You can seed with an emoji? 😒

lol, you gotta re-draw your background, or else clear every loop, UNLESS you want ghost snakes all over your drawing. Boo, hiss.

Huh, neat! She rendered the RenderATL logo by inspecting an image, getting color value every 12 pixels, then rendering specific characters based on how "bright" it is. 

there's a ```noise``` function to generate smoother random numbers; p5 uses an **academy award** winning algorithm. Yes, you read that right, this flipping algorithm got an oscar. Eat your heart out, pre-2016 Leo.

