# React (Tanstack) Query w/ @DTHOMSONDEV #

Covers:
- Queries
- Data fetching
- Refetching
- Mutation
- Cache & cache invalidation

Tanstack Query is state management w/ 0 dependencies.

Follows _stale-while-revalidate_ logic

Benefits:
- Prefetch Data
- Ease of Use
- Query Deduplication
- Auto Caching
- Stale-while-revalidate
- DevTools
- Convenient Hooks
- Error Handling

**UseQuery Hook**

Hook inputs:
- queryKey
- queryFn
- options

Hook returns:
- isLoading
- data
- isError
- isFetching

**useMutation Hook**

Will update data in cache for CRUD (CReating, Updating, Deleting records) actions.
Mutations are functions that have a side effect.

States:
- isIdle
- isPending
- isError
- isSuccess
- isComplete

**Cache & Cache Invalidation**

Invalidate if data changed.

# There you have it, you done did tanstack queried. #
