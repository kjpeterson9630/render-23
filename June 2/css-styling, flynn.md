# Styling a React App: Let me Count the Ways, Leesa Ward
She is not wearing all the hats, an unrealistic expectation I now realize but still, I am disappoint. 

A fun surprise accent! (Australian)

Started with Contractor life, currently in enterprise.

*What's a BEM style?*

High level questions:
- How much do you/can you avoid anything presentational in HTML/JSX?
- Inheritance, or no?
- Frog it, Classes for everything ever. 

They need higher contrast projectors, or like...different light configurations. These rooms are not set up for dark mode.

Agenda:
- Vanilla CSS
    - Pros: Easy to transition from elsewhere, very global, easy to debug
    - Cons: Not scoped, reliance on classes, hard to name, specificity options
- CSS Modules
    - Pros: Scoped to component, still recognizable CSS, can compose styles from other selectors
    - Cons: Harder to debug, some tricky differences from CSS
- Styled Components
    - Pros: ThemeProvider gives theming without adding classes, can build javascript dynamism into the colors/sizes/things, Polished? library builds in dynamic accessibility, Typescript can enforce things to be set
    - Cons: Styled components give someone the ick, can be harder to read/maintain, steeper learning curve, tight coupling
- UI Libraries:
    - Pros: Can get you up and running much faster, built in consistency (unless your library is bad...)
    - Cons: Less flexible, have to learn someone else's code to write yours.

github.com/doubleedesign/react-styling-experiments