# Common things to check when Debugging #

- NPM dependency mismatch with node or creds
- React updates (global state, useEffect dependencies, API requests)
- Async/await (not resolving correctly, permission issues, out-of-sync microservices, data is looked at before a dependent parameter has been fetched, third party service is down)
- Data changing unexpectedly (ghost jobs _ooooooo spoooky_, microservice saving data to the wrong place, queues not processing correctly, third-party service updates)

# Get learnt #