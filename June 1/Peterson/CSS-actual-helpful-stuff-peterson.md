# CSS in Real Life w/ Chris Coyier

## Layout & Logical Properties ##

dvh = dynamic viewport unit (fixes some cases of viewport getting covered up)

- inline (left->right, x, horizontal)
- block (perpendicular to text flow)

Replacements to provide more consistent semantics:
- `border-left` -> `vborder-inline-start`
- `width` -> `inline-size`
- `gap` -> `margin-inline-end`
- `margin-right` -> `margin-inline`

Grid layout has Subgrid, allowing a child element to inherit the grid of the parent for easy layouts.

## Container Queries & Units (for Fluid Typography) ##

cqmin & cqi

`container-type`: `inline-size`

`font-size`: `7cqi`

Container queries help solve for small section whereas using `@media` query for squishing/switching a layout only
works for a full-sized browser

## Cascade Layers ##
`@layer` overrides take precedence over specificity

Putting `layer` on your imports makes your styles win over the import's

## New Colors ##
LCH -> OKLCH (Ok(?), Lightness, Chroma, Hue)

SDR -> HDR

## View Transitions ##
`document.startViewTransitions(...)`

# The End #
The last 2 sections got rushed & then we got told to skedaddle bc somehow the conference had a hard deadline for when 
everyone had to leave the building and decided it was a good idea to schedule the most useful talk right up against
that cutoff...