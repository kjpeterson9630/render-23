# Typescript - Adam Rackis @ Spotify

Structurally typed (not nominal)
- Type doesn't REALLY matter if the structure of it is the same.

`Point1 {
 x: __,
 y: __
}`

`Point2 {
 x: __,
 y: __
}`

# Module 1

(see Rachel's inclusion of the workshop repo -RIOTWR for short- @sandbox.ts)
- Coverage of type specification for functions & arguments.
- Provide type structure specification that can be applied to a function expression (`const`), not declarations tho (`let`)

# Module 2

not many notes handwritten for this but he covered:

_Interfaces!_
... (see RIOTWR @in-class.ts)
& _Generics!_

# Module 3

Unions          `|`     catORdog

Intersections   `&`     catANDdog

- Use of JS '`.in`' is good small scale, but you'll probably have way too much property overlap. Use a special (distinct)
property such as an addition of a 'TYPE' as const
- If it's simpler, can use:
`if (typeof myThing === 'string')` (or number of boolean etc.)
- If using classes:
`if (myThing instanceof A)`

# Module 4

REACT !!

- React provides FC (functional component type)
- That's all the React stuff... See RIOTWR I guess :>

# Module 5

_Advanced Stuffs_

"Type specified x, but y was provided"

_covariance_: providing something more specific (want shape, got circle)
_contravariance_: providing something less specific (want circle, got shape)

- Type inheritance:
`type Circle = Shape & { _insert new things here_ }`

- My handwritten note at this point says *_insert crazy more/less specific functions/returns here_* so this is a
great time to direct you to RIOTWR
- Conditional types:
`infer` pulls out generic type

Hold on to your butts because things got crazy with little explanation (haha who needs explanation? lame):

`type ArrayOfWHAT<T> = T extends Array<infer U> ? U : never`

`type getReturnType<T extends (...args:any) => any)> => T extends Array<infer U> ? U : never`

`T extends (...args : any[]) => infer U ? U : never`

idk if that was even all correct, he blew through it so fast

# End of talk. "Godspeed."