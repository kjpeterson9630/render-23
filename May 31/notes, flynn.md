# Making Design Systems People Actually Use
Speaker is Dan Mall, creator of Design System University (DSU) which opens on the 5th.

References for further reading:
 - DSU "Study Hall" talks
 - Design Systems, a good book by Alla Matova
 - Thinking in Systems, Donella ____
 - The most exciting design systems are boring, by Josh? Allen?
 - Do/Scale/, Ls McKeown
 - Interface Inventory, by Brad Frost?
 - Crafting Strategy, Henry Mintzberg
 - Brad Frost and Dan Mall youtube video; 2 hours of "hot potato" devsign.
 - cssStats.com, a tool to analyze the CSS your website loads
 - Evergreen, a tool to track adoption rate for a design system.
 - Measuring Design System Success, Nathan Curtis?
 - Change by Design, Tim Brown
 - How to make sense of any mess, Abby Covert
 - Interviewing Users, by Steve...portavale?
 - Drive, by Daniel Pink
 - Design Systems Slack Channel
 - DesignSystem.university/templates
    - icons for portraying design systems
    - pitch deck for design systems
    - RenderATL2023 is a code that will give you access to this course at DSU 


We'll get an online version of the content after the talk? So, these notes won't be the only thing.

Can get a certificate from DSU, to impress bosses/dates.

## Introduction to Design Systems

A design system is both every piece, and the separate pieces. (Much like if you break a big rock down, the smaller pieces are also rocks)

Have to avoid putting the work in the wrong place; don't spend a whole week mocking stuff in figma, when you could very quickly do something in actual CSS or whatnot.

Trying to do it all by yourself is going to burn you out, and probably suck; don't suck, join together design, product, and engineering.
### Parts of a design system: (There is no secret to keeping design in sync with code)
 - UI Kit
 - Component Library (A collection where you can browse examples and find code snippets to implement components in a codebase)
 - Guidelines
 - Reference Sites
 - Digital Products
 - Design Tokens too?
UI Kits help designers, Component Libraries help engineers, and Design Systems help **Product Teams.**

Where Design Systems often fail is in the interconnectivity, in people doing their own thing (Desginers, Engineers, Product)

**So, definitely seems like you want to set things up so that designers can speak into a repository which you can pull into code, seems like.**

Worked with a company who spent 11 months and 16mil to change yellow buttons to purple. No system for branding/design.

Gotta. Be. Connected!
### Q and A

*Do companies really want 3rd party libraries pushing updates to their code and whatnot?*

Less likely for a company to want updates pushed from a 3rd party, but a connected system for a **custom** design system, is very valuable.
The best use cases for a 3rd party library is for rapid prototyping, or for a startup who haven't gotten to the maturity to need their own.
Another value may be things like accessibility or localization baked in to the base, to be layered on top of.

*Most people won't have luxury of building it all out from ground zero; how best to roll out a design system for in motion development?*

The short answer is "bird by bird". Basically, one piece at a time; one component at a time. Hey, almost agileish; release smallest helpful value, then the next helpful value. The long answer will be the subject of the rest of the day.

*A question I didn't fully understand about snowflakes and different levels of design systems*

Apparently don't have time to get into that in this talk, but offered to talk over lunch or a break or some such.

## Bird by Bird: Piloting a Design System.

A group of engineers develop some components, it helps them, they share it, nobody cares because each of them were doing the same thing.

"The Design System Graveyard" is where everyone's separate efforts go to livedie.

Ideal, happy path for implementing a Design System
 1) Propose Design System
 2) Create Components
 3) Use Components
 4) Update Components

 **THIS NEVER HAPPENS**

 If you want buy in for a design system, volunteer as tribute. Not only that, but don't call it a Design System; take advantage of a rebranding, replatforming, Data migration, etc. Hitch your buy in wagon to these stars.

 Don't get technicaly when pitching, talk about effects; "can deliver changes faster" and such. Don't start with components, since if you volunteer to help with an existing effort, you have to be doing work that contributes to the effort. 

 Design System Pilots: call it that because it's a bit like a TV Show pilot, because you're seeing what works, what doesn't, and what brings value. Scale things that work, don't scale things that don't. 

 Start with what you want your design system to do; don't try and create at scale, start with a small piece of value, for YOU (or, for one team). 

 Example: ExxonMobil, they had 500 engineers and **ONE** designer, so it was the wild wild west out there! In order to unify, they didn't start with "let's make a card component" they let the components be emergent from delivering value.

They started with customer research, figured out how it was used, what would be useful for them, then wrote up a one page app that did all the things. Then, they looked around at what they made, figured out what may be useful to others.

    Components should come from products, products should not come from components.

Seems to agree, in general, that you should commit sins on the way to green, then make it pretty/abstracted AFTER the fact. Thinking about it being re-usable **prematurely** leads to over-engineering. 

    Don't build one component to rule them all; build a variant for each use case, to keep it more maintable/focused.
  
Each header created grew organically, since it wasn't pre-emptively abstracted. You should eventually stop making so many variants, but to start spin up as many as you need to meet the various needs.

*How do you determine what should be a new component, and what should be a property?*

My mans is punting on the answer, but that's because 9 years ago the idea of passing properties wasn't a thing. But, the real value to extract is treating your design system **as a product itself** which you talk to your customers (product and engineers) and iterate on. Don't build it solely to how one side of the house does things, but rather make sure engineers and design system are in sync. Or, put another way, don't design a system in a way that is "correct" but people aren't willing to use.

    Designers and engineers using a common language is of utmost importance, so that they can equally speak into the design system's creation.

*Question further drilling into how to figure out where to break out a variant and where to have a configurable component*

The holy grail of a Design System is ultimate composability; that almost never works at a real scale though. The far more realistic approach is to break variants out, overall, so that people don't have to have full knowledge of how to compose a header or whatnot.

    People can get too focused on creating an OBJECTIVELY good design system, when a SUBJECTIVELY good one is more important.

A design system has the **least** amount of components needed for success. Spoiler for after lunch session: It's easier to keep 2 things in sync than 10. 

    A design system pilot is, to summarize, a product you make, specifically chosen to feed your design system; which becomes your life cycle. Create product -> Feed Design System etc.

How to choose what to pilot? Eight starting questions.
- Are there potentially common components?
- Are there potentially common patterns?
- Are there high value elements?
- How simple is the technical implementation for this product?
- Is there someone willing/able to champion your design system?
- Is the pilot product able to be done in your timeframe given?
- Is the potential product done in a tech stack close enough to the one you use daily to keep velocity high?
- Marketing potential; similar to champion, could this pilot be exciting enough to get new pilots?

You want to score each potential product/roadmap item against one another in each of the areas, and then of course take the highest scoring one. **You may need to weight different questions, or of course customize questions, in order to accurately represent what product would be best to pilot with.** You also don't need to pilot with an entire product, but rather start with piloting a feature, probably more attainable.

Let abstraction organically grow out of subsequent iterations, rather than pre-maturely trying to design for non-specific use cases in the future that are difficult to foresee.

Design Systems are about mastering the mundane, about making "exciting" things boring. Specifically, don't put a cool exciting thing into your design system, as those are unlikely to be re-used; just put the boring things into your design system. **To be clear, boring is COMMON, not necessarily dumb/obvious.**

    General rule of thumb: if 3 teams can/are using a common component, it should go into the Design System.

Once is happenstance, twice is a coincidence, three times is a pattern. --Goldfinger, paraphrased.

*Who should be working on designing the system, determining where to break a component variant apart?*

People who don't work on product, per se, so that people in the weeds don't design a weedy component. Basically just want to make sure that while all developers can speak into the design, that only one viewpoint doesn't dominate the system.

To start implementing a design system when a bunch of stuff is already in place/there's not a lot of new dev going on; look for the best stuff that's already in place (where best is defined by your organization) and start building from there.

Start your design system with 3, just as a starting point. Take those 3 best things, scale them. Many companies are starting to trim down design systems, not having 80 components but rather 40. 
### Q and A
*Where does accessibility fit into all this?*

Hard things are hard. Don't be perfect, but find the conversation between "perfectly inclusive" and "fast but fatally flawed." Depending on how your culture/strategy is, you may need to just release "good enough for now, improve tomorrow" vs "We'll never be able to come back, gotta do it best possible now". 

*Is there a choice, as to how much you accessibilitize? What with lawsuits?*

Yes, and no; lawsuits can happen and drive change, but in general that still just drives an incremental change, since usually things aren't inaccessible due to malice, but simply some constraint on their output.

*A lot of consensus on how most of accessibility misses are due to ignorance, not being unwilling to do it. And how not having resources dedicated to usability studies can really hamper development.*

## Work, Flow: drawing new lines
Agile Transformation is the best analog to implementing a design system, in that it's not something you "buy" or "plug in" but rather a change in how you get things done.

    When it comes to making web products, front-end development is more important than visual design.

You don't **need** pretty animations to get value to the customer, though those enhance the experience; you **need** something that conveys and operates on data.

    When it comes to making web products, front-end languages are more important that back-end technology.

Design systems are exciting, because they are equally powerful for engineers AND designers, not just one or the other. How to start on a product? Open a code editor?!?! Madness!

One of the values of working in code, to start, is that it's very quick, and very quick things don't have to be good. *People are NOT having a good time with him calling a plaintext HTML page a product. His previous hot takes landed much easier. One reason why designers are on edge is because code feels more final, and it's more technical as opposed to figma which is absolutely untechnical.*

    Engineers win.

Really pulling at the thread of "what is good enough for a first pass" which he argues could be as little as raw text in HTML. In essence, it is not an immutable truth that you always need to put a pretty thing up first, OR that you need nothing more than text in a box; it's a cultural question.

*The audience points out that HTML, raw engineering is far more "actual" than Figma. And that Figma designs aren't the ten commandments.*

In six months, a designer can start contributing to Storybook; going from zero code to contributing design code. Any developer worth their salt can whiteboard in code, most are just too afraid to. 

This isn't to say that Designers don't do anything, or that they just become developers. They stop being pixel pushers, they start doing art directing by words.

Designers can start putting together pretty elements, divorced from context; engineers and designers BOTH need to get better at doing disposable, failable work. 

    Engineers finish a design; it's not finished when handed from a designer to developer, it's finished when it's published in code.

Since engineers are the ones who finish something, why not have them start something too? And, since we're giving engineers more to do...designers get to own colors, radii, etc. In essence, get JUST enough spun up on code to push CSS or whatnot to define design constants.

Designers should be "in service" to developers, in that since developers are the ones delivering the product; rather than driving the developers from delivery of design, drive the delivery of designs by developing.

Much faster getting to software if both engineers and designers are working **actually** in tandem, rather than working separately on the same thing in serial.

    What's bananas is that people are more willing to write an AI tool to take natural language into code, than sit a designer with a developer and do that same thing.

## What is the DEAL with success, anyway?

Two things that you get from design systems: Efficiency, Consistency. These two things are pretty easily trackable; measure some things before design system, then after, and maybe give the design system a few go rounds before passing judgement.

Example metrics for Efficiency:
- Speed to market
- Dev time
- QA time
- Bugs filed

Example metrics for Consistency:
- CSS Redundancy
- Negative customer feedback

All of this is driving one thing:
    
    The Holy Grail of design system metrics is adoption.

Philly.com: Launching six different sites all using a common design base. They started off by asking 3 questions:
 1) Why redesign the site?
 2) Why redesign the site NOW?
 3) How will we know if the new site is better than the old one?

 Take the responses, kind of coalesce into "Themes" then prioritize those themes based on a cross-discipline dot voting committee; this gives you a top 3 (or however many) goals that you want your design to help accomplish.

 *Should your voting be demarcated by group the voter is in?*

 No, because the idea is to produce objectives from the aggregate whole.

 John Doerr introduced google to OKRs, or ```Objectives & Key Results```

 - Objectives: Big, scary, ambitious movements.
 - Key Results: A measure and a delta. 

 JND, the Just Noticeable Difference. Time intervals are prone to a JND of between 7%-18% on average for periods with a duration of less than 30s.

    One of the biggest values of OKRs is a guide for next quarter's OKRs.

Since OKRs have measures and deltas, you can grade them; average out how much you moved the needle out of how much you wanted to.

Quantitative metrics are important, but not ALL important; the focus on them is a bit of an overcorrection from a past where only qualitative metrics were gathered.

AMP is what drives people:

A) Autonomy, the desire to direct our own lives

M) Mastery, the urge to make progress and get better at something that matters

P) Purpose, the yearning to do what we do in service of something larger than ourselves

Add third item to the efficiency/consistency success metrics: **Relief.** It should be a relief to use the design system.
- Turnover
- Job Satisfaction
- Multiply creativity and innovation
- Team Engagement

Charlie Munger said: Punishment works best to *prevent* actions, whereas incentives work best to *encourage* them.

Design system team's goal: Adoption.
Product Teams' goal: Customer value.

    Choose their goal, because they will adopt your design system if you bring customer value.

Design systems need to start by showing "millenium falcons" instead of bricks and bits. It's great to be pragmatic about results, but it's also great to have a hype man, get people excited!
