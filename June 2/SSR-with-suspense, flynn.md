# Splitting the Work: Streaming Server Rendering with Suspense, Shaundai Person
AI written jokes, hyuck hyuck. 

It's about improvements brought to apps/developers by React 18's server rendering. She's from Netflix! I won't cancel her.

Table d'toddler: When you're in the restaurant and you get your toddler food first, regardless of when anyone else's is ready.

The parallels to breaking apart your react app should be obvious.

### CSR vs SSR:
CSR means that everything that your site needs to render is sent to the client, and the client takes the data, JS, and DOM instructions and turns that into a website. 

SSR fetches data, renders html to browser, loads the JS, hydrates your DOM. While it's an optimization, in some ways, the fact that it's your whole application at every step can cause issues.

Pre React 18:
"**Fetch Everything** before you can **Show Anything**" 
You could leave out high cost data display entirely in the initial load, but then not only is the user left without the likely crucial data, but you have to initiate that high cost data from the client.

"**Load Everything** before you can **Hydrate Anything**"
This isn't ideal, as you can see things before it's hydrated, which leads to a non-interactive site until the high cost data came in. You can also do code splitting, but that's not ideal because you have to have something client side to anchor it.

"**Hydrate Everything** before you can **Interacte with Anything**"
You can go wild clicking, but without your highest cost data nothing is interactive. 

So, specifically, suspense wrapping something enables you to not only provide a placeholder, but it also allows it to deliver the rest of the page while your high cost data! 😱

This way, your user sees an indicator that something more is coming, and things can be displayed around it accurately. Then, once your data comes in, it replaces your fallback with the fully generated HTML, so users can see it.

It even hydrates your non-suspense components if they're loaded! And your content is interactive even if you're waiting for suspense'd components. 

If you have multiple suspense'd components, react will prioritize hydrating the parts users interact with, rather than putting it in an immutable render queue. 