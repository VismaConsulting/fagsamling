![Visma's logo](src/images/visma-logo-w200.png)


# Visma Consultings fagsamlingsside

Dette er en side laget i Gatsby, som er en statisk websidegenerator bygget på JavaScript og React.

## Hvordan komme i gang

Denne guiden låner noen steg fra https://www.gatsbyjs.org/docs/quick-start/

### Installer Gatsby

```sh
npm install -g gatsby-cli
```

### Klon dette repoet

```sh
git clone git@github.com:VismaConsulting/fagsamling.git
```

### Gå inn i det nyklonede repoet

```sh
cd fagsamling
```

### Start utviklingsserver

```sh
gatsby develop
```

Gatsby starter så et utviklingsmiljø med hot-reloading på localhost:8000.

_Tips: Du vil også se en annen link: _`http://localhost:8000/___graphql`_. Dette er et verktøy du kan bruke til å eksperimentere med dataene dine. Lær mer om å bruke dette verktøyet på [Gatsby-tutorialen](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Prøv å editere JavaScript-filer på src/pages, og se at siden automatisk oppdaterer seg. 

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Domenet vårt

Domenet representeres i markdown-filer som har frontmatter i toppen av fila. 

Frontmatter er metadata om filen, som sier hva slags type fil det er, tittel osv.

Alt som kommer etter frontmatter, blir gjort om til HTML i henhold til vanlige Markdown-regler.

Filene plasseres i en mappestruktur etter år og måned som fagsamlingen arrangeres i. For å skifte visning mellom feks 2019-03 og 2019-10, endre i `siteMetadata.currentFagsamling` i `gatsby-config.js`.

### Events
Under `src/pages/program` ligger markdown-filer som representerer events. Grupper filene etter hvilken måned fagsamlingen er i.

En event kan inneholde følgende:

```markdown

---
title: "Tittelen på eventen"
speaker: "Will Smith"
category: "Gruppeoppgave" 
page_type: "event"
page_subtype: "subevent"
from: "2019-03-30T14:00"
to: "2019-03-30T15:00"
location: Vika
group: "PL/Test/FA"
thumbnail: './image.png'
subevents:
  - /program/2019-03/breakout/
speakers: 
  - /speakers/2019-03/willsmith/
---

markdown-syntaks

```

* **title**: Tittelen på eventen. Hold den kort og fengende. <span style="color:red">*</span>
* **speaker**: Navnet på den som holder talken
* **category**: Feks. Gruppeoppgave, pause, Breakout session. Kan markere events på forskjellige måter iht kategory. 
* **page_type**: Viser at dette er en event. <span style="color:red">*</span>
* **page_subtype**: Hvis denne eventen skal vises som del av en annen event. Mulig verdi er "subevent".
* **from**: Starttiden på eventen. På ISO-format for datetime. <span style="color:red">*</span>
* **to**: Sluttiden på eventen. På ISO-format for datetime. <span style="color:red">*</span>
* **location**: Møterom, bydel, restaurant, osv. Hva det måtte være som viser hvor eventen finner sted.
* **group**: Man vil ofte gruppere sammen eventer basert på faggruppe eller liknende. Bruk da dette feltet.
* **thumbnail**: Legg et bilde i samme mappe, og link til det her. Vises i toppen av eventen sin side.
* **subevents**: En liste med linker til subeventer av denne eventen. I teorien kan man lage store trær med eventer, men prøv å holde det til kun to nivåer.
* **speakers**: En liste med linker til speakerbios. Disse vises nederst på siden for eventen.
* **markdown-syntaks**: Dette blir gjort om til html.

<span style="color:red">*</span> Obligatorisk felt

### Speakers
Under `src/pages/speakers` ligger markdown-filer som representerer speakers. Grupper filene etter hvilken måned fagsamlingen er i.

En speaker kan inneholde følgende:

```markdown

---
name: "Mikke Mus"
thumbnail: "./mikke.jpg"
page_type: "speaker_bio"
---

markdown-syntaks
```

* **name**: Navnet på foredragsholderen. <span style="color:red">*</span>
* **page_type**: Viser at dette er en speaker_bio. <span style="color:red">*</span>
* **thumbnail**: Legg et bilde i samme mappe, og link til det her. Vises i bioen på eventen sin side.
* **markdown-syntaks**: Dette blir gjort om til html.

<span style="color:red">*</span> Obligatorisk felt

## 💫 Deploy

Hjemmesiden bygges vha circleci og deployes på GitHub-pages automatisk. Sjekk #circleci på Slack for å se byggehistorikk.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

