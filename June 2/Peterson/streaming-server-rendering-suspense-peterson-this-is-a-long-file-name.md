# Streaming Server Rendering with Suspense #

When you have a slow component....

- In React 18, you can do things separately for a slow loading component by wrapping in Suspense, given a fallback component to render in place of component.
- Server will replace the HTML in and send it into the stream, with a JS script that tells the browser where the new component needs to go.
- Gives us that which is called StreamingHTML & also Selective Hydration (which fills in the JS stuff and allows already-hydrated areas to be interacted with while the slow one is still hydrating).
- Multiple suspenses will hydrate in order of DOM appearance unless user interacts with another one waiting to hydrate. And that's the coolest bit.

example: element1 would be first to hydrate by default, but user clicks element2 because they really want to add that NFT to their cart so React decides to hydrate element2 before element1

# Did you feel the suspense #