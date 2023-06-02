# Improving Data Fetching with TanStack Query, Danny Thompson
They cannot decide what to put on the screen, distracting. Another low quality host riffing, less is more people! 

Dunk on reducers, hell yeah!

Customer-centric experience; pointing out that if someone is trying to give you money, you should make it worth their time. Honestly, a nice way to think of it. 

Takeaways:
 - What is TanStack Query
 - How to use Queries
 - Data Fetching
 - Refetching
 - Mutation
 - Cache &amp; Cache Invalidation

He started in Memphis, then left wisely. 

TanStack query is a state management tool, compatible with React/Svelte/Vue/Solid and has zero dependencies. 

Tanner Linsley is creator of TanStack. Follows "Stale-While-revalidate" logic. Helps mitigate upfront loads.

Advantages for TanStack query:
- Stale-While-revalidate (basically, serves up last data until it has newer data)
- Prefetching Data
- Ease of Use
- Query Deduplication
- Automatic Caching
- DevTools
- Convenient Hooks (useQuery, useMutation)
- Error Handling (useQuery decomposition includes "isError")

useQuery takes a queryKey, a queryFn, and options; it spits out loading state, error state, and other stuff.

useMutation is basically providing CRUD operations on data; can be in "isIdle", "isPending", "isError" and "isSuccess" states. Takes a mutationFn, and callbacks; onSuccess, probably onError and such too!

There's an "invalidate cache" method you can call to force a refresh.

I'm skipping all the awful react jokes, by the way, they lack real punchlines.

Tanstack just released v5; maybe start with v4 though, until v5 is fully stable. "isPending" though comes from v5 apparently. 

FakeStore API, a good API for examples/talks apparently. 