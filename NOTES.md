## Install next

-   npx create-next-app@latest
    -   Yes to react
    -   Yes to JSDOM (node or client)
    -   No yto

## Install pettier locally + add prettier config

-   [config](https://prettier.io/docs/en/configuration.html)

## Install fonts

-   Fonts should always be imported in `_app.js` because we want them global to the application
    -   [docs](https://nextjs.org/docs/basic-features/font-optimization)
-   Set the fonts for the app (CSS)

    -   See example below

## TODO

-   google css float 🙁

## NextNotes

\_app wraps your whole application, which means anything set up in here will be global to all pages

---

Sample directory structure for Next

```
/components <- Shared elements that are used by pages, but aren't pages themselves
  button.css <- BEM
  button.js

  footer.css
  footer.js

  root-header.module.css
  root-header.js

/pages
  _app.js <- wrapper around ALL other files in pages
  index.js <- / route (or home)
  about.js <- /about
  /profile
    user.js <- /profile/user

/fonts

/styles
  /fonts
  globals.css  <- should be imported in _app.js

next.config.js


package.json
  - next
  - prettier
```

### Rules

-   Any file inside of `/pages` automatically becomes a route in the app
-   The `index.js` is equivalent to home or `/`
-   If you have a component that is used INSIDE a page, it should NOT be in `/pages`
-   Any file in `/pages` should be lowercase
    -   All files in a NextJS project should be lowercase
-   Top level, single use components I typically prefix with `root-` e.g. `root-nav | root-header`
    -   These should be imported and rendered in `_app.js` because we don't want to re-render them on every page
-   BEM is a CSS notation for naming classes to avoid overriding or bleeding classes across components
    -   a component has a root class, and all of its children + states get a suffix blah blah
    -   If you want to show that you know BEM, you should do `import 'file.css'`
    -   You can also demonstrate that you know modules, but doing `import styles from 'file.module.css'`

### globals.css

ALl of this is native CSS, there is zero preprocessing or any additional library at use

```scss
// when you specify width, padding + border is included in the width spec
*,
*::before,
*::after {
    box-sizing: border-box;
}

// this makes the variables available to ANY css file throughout your app
:root {
    --font-body: 'Chivo', sans-serif;
    --font-heading: 'Azul', sans-serif;

    --background: #f2ece2;
    --primary: #0b5841;
}

body {
    // set the font to the body variable aka Chivo
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 24px;
}

// style these based on mobile
h1,
h2,
h3 {
    font-family: var(--font-heading);
}

// smallest level
h1 {
    font-size: 24px;
    line-height: 30px;
}

h2 {
    font-size: 20px;
    line-height: 24px;
}

button {
	font-style: var(--font-body);
	font-size: 16px;
	line-height: 100%:
	letter-spacing: -2%;
	text-align: center;
}

// tablet
@media (min-width: 900px) {
    // scale things up
    h1 {
        font-size: 32px;
        line-height: 40px;
    }

    h2 {
        font-size: 28px;
        line-height: 36px;
    }
}
```

==

Matt Notes/questions: 4/21

-ran npm i prettier and npm install --save-dev --save-exact prettier,
\*but not seeing prettier in package.json? - added prettier.config.js

\*convention to have css import as bottom most import?`

\*is config setup properly, was auto installed with next npx installation]
prettier.config.js

\*Hero text...what tag should it be in?

*why are there multiple fonts when inspecting h1 in Figma?
*better to go off Typography or Code for info like line height?
*use % or px?
*looks like they want to use fonts not available from next library
   error - pages/_app.js
	`next/font` error:
	Unknown style `Regular` for font `Chivo`.
	Available styles: `normal`, `italic`

	*any of these with @import can be manipulated with width (even though Google says Light 300 and Figma says weight is 400)
	  *or is all that light, SemiBold really just a correlation to the weight size and can use either or?

		typically standardized Regular = 400 and so forth (really care about number)

		

  *is this how imorts should look even though using lowercase file names:
	   import { ImageHolder } from '../imageHolder'; --> change to image-holder

		 !!NEVER write components or code in index.js file!!

  *should scss module files be uppercase?		
	* with hero.module.scss for example, are media queries done correctly (as far as nesting goes)? 	

	--2 major naming conventions
	    1. camelcase IconButton
			   formatUtility
		   2. hyphentated (no caps, every space is dash)		 

	*should nested classNames references style.nameofclass from modules, or 
	  if they're nested, can they use plain className in quotes?	
==






Notes 4/22
------------














import { Chivo, Asul } from 'next/font/google';

const chivo = Chivo({ 
	subsets: ['latin'],
	style: ['Regular', ]
});
const asul = Asul({ 
	subsets: ['latin'],
	weight: ['400', '700']
});

import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
		<main className={[chivo.className, asul.className].join("")}>
			<Component {...pageProps} />
		</main>
	)
}



font-size: 16px;
line-heght: 1.5 --> multiplier of current font-size
											16 + 8 = 24
line-height: 1.5em --> em multiplier of parent font size
                     if wrapper is 20, would make this 30
line-height: 1.5rem	--> multiplier of body tag, if body 16, 24		
line-height: 22px --> explicit regardless of anythings else 			

recommended pattern matching desgin:
start with px (guaranteed line-height), once looks good, then consider rem
to make multiplier (do the math to make it match px)

rem is tied to body, and calc consistent

(rarely use plane number or em)