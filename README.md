# Matt Meyer

### _King & Partners Code Assessment_

---

#### to load project:

clone or downlaod the Github repo I have stored the code in, at this url - **https://github.com/matt-meyer-nyc/king-and-partners-code-assessment**

From root directory of project in terminal
run '**npm install**'

once installed, run
run '**npm run dev**'

project should load locally on
http://localhost:3000/

default Next.js boilerplate instructions also included at bottom of this file

---

## PROJECT NOTES

### General Notes:

--since feedback was provided that using a framework for this project would be a nice-to-have, I decided to work with Next.js to challenge myself (in my prior interviews I've discussed that working with JS is something I'm learning about every day, and I'm passionate about growing as a developer utilizing this framework with WP)
Next configurations have been incorporated:
-- project utilizes next/font utilized (in place of static Google font files provided via link to use as CDN); this approach adds optimization since font file doesn't need to be called repeatedly
-- given that best practice would be to scope the CSS to each component, my overall styling approach utilizes CSS modules; however in globals.css, towards the bottom, I have included BEM CSS (per the project requirements) related to the accordion component to demonstrate knowledge about this CSS approach (and for this component utilized dynamic css class prefixes appended to the classes in BEM style)
-- for simplicity, files are being served locally as part of code base, but in a production app, a better option would be something like using CDN for the images so that they can be cached
-- project was created using 
-- project was created using npx create-next-app@latest; certain boiler plate files have been left in place (like Home.modules.css) but were not necessary to execute the project


### Assumptions being made

--hero h1 is a relative of all other headings, and therefore, as specified with all other headings, line-spacing should be set to -2%
--assumption being made that opening and closing of nav should be tied to the tab with the paw on it (and close would not be triggered by clicking background of entire nav modal)
--wasn't sure which way this should go, so made decision to have the accordion image dictate the size of the accordion (could easily be swapped such that the accordion container recievees precise dimension to dictate the size of the container instead)

### Outstanding questions/concerns

--very much appears that, Intro and Accordion components sit within a 2 column layout that should stack to 1 column in mobile. However, the heading (desktop) for Intro is broken into 2 separate text boxes in Figment design (i.e. it is not 1 whole heading), and similarly the headings for Accordion (desktop, tablet) are broken into two separate text boxes. This is inconsistent with the mobile design where all headings are 1 consistent text box in Figma. Though it possible to workaround this injecting HTML via JavaScript, this is highly atypical, and not best practice, therefore it is uncertain as to whether this is possibly a Figment error, or an intentional decision. If it's intentional, I'm happy to discuss workarounds in more detail (as an example, for Intro desktop, there is a possible insinuation this text is being floated, however, this would be illogical if the component is intended to utilize a 2 column layout)
--not sure why certain h1, h2 are decimals and not integers in Figma (ex. line-height)
--the padding for the button was inconsistent with centering the text (ex. in mobile the top padding is 15px and bottom is 14px), so decision made to keep padding even and choose one of those numbers so top/bottom padding is even, as well as left right padding
--for the accordion header, the font-size (40px) did not work with the 24px padding specified, so intentional decision made to reduce font-size to 38px;
--font-size in Figma for the hero header in tablet (90px) caused line break, font-size reduced to 86px to match design (same for desktop font size reduced from 176px to 172px)--tried adjusting letter-spacing to consistently be 0.02em based on parameters noted in Figma, but was complex to discern given I'm not familiar with how Mixed type works in Figma (and which one should be referenced of the Mixed details)
--assumption being made that opening and closing of nav should be tied to the tab with the paw on it (and close would not be triggered by clicking background of entire nav modal)
--intentionally kept tab absolutely positioned relative to the hero, though arguably fixed positioning might be desired such that a user is always able to access the nav regardless of where they are on the page
--the ul width of the pages listed in the footer are slightly different (ex. left pages ul is 160px and right is 162px in mobile), for consistency, decision made to make the uls the same width
--tried for a while to find the border-radius for the footer, but could not find it in Figma file, so matched it to the border radius used for the images and accordion buttons/tabs (30px)

### Other notes

--for simplicity sake, since this is more of a design oriented project, wrapping a tags for links (<Link> elements in Next.js) have been discluded with the excption of the navigation modal

## Challenging Aspects / Aspects that could be improved

--for the footer, although the pages listed in the ul (under the heading) are detailed in Figma in mobile as having a line-height of 30px, when rendered, this caused way too much vertical distance between the li items. to split the difference and attempt to match the design I reduced the line-height to 15px. Despite this, the height of the main footer component (in my design) is 398px, while the design has the height at 364px; the cat's meow logo, the social logos, and the font-sizes of all the pages listed are correct, and the padding surrounding them appears to be correct, so I'm wasn't exactly sure how to resolve this.
--for the accordion, I'm aware that the JS approach to the click handling is not DRY, and should be optimized by mapping over an array (or arrays) that hold the content for the accordion headings and accordion text. I, admittedly, could use some guidance as far as learning how to handle what I'd imagine is the equivalent to using 'this' (or something along those lines) when using .map() (having come from coding largely with jQuery prior)
--I decided to go (on the whole) with a mobile first approach, with media queries increasing as the page size increases. However, the hero required a mix of media queries I'm pretty certain there's a cleaner way to handle this, and would learn to learn more about what might be a better approach
--for desktop sizes wasn't sure how to handle the hero heading text breaking to 3 lines and the line-height specified in Figma (213px) causing this to make the hero text expand outside it's container (wasn't sure whether you might be looking for a dynamic responsive font size, or if the line-height should be reduced, etc.), I added a media query between 768px and 955px to handle this be reducing the line-height between certain dimensions (and kept the text broken into 3 lines) ...same for tablet where I added a media query between 376px and 461px to account for the text breaking to 3 lines and having too large a line height. Along these lines, in addition, I wasn't sure whether the larger text denoted in Figma for desktop should persist through the tablet breakpoint (when it approaches being closer to the tablet breakpoint, the text feel very large).
However, conversely, if the text size for tablet persists up until the desktop breakpoint, the text feels way too small at sizes closer to desktop (1080px+ etc.)

## Nex.js boiler plate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
