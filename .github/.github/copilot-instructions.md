# Project Standards for HTML, CSS & JavaScript

## Core Principles

* Write **clean, readable, and maintainable code**.
* Follow consistent **naming conventions, formatting rules, and best practices**.
* Prefer modern, semantic, and accessible patterns.([GitHub Docs][1])

---

## HTML Guidelines

* Use **HTML5 semantic elements** (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).([Gist][2])
* Ensure pages are **accessible**:

  * Add appropriate ARIA roles when necessary.
  * Use meaningful alt text for images.
* **No inline styles**—always separate CSS from markup.
* Keep markup **well-structured and indented** for readability.

---

## CSS / Styling Conventions

* Use **external stylesheets** only; avoid inline CSS.
* Naming conventions:

  * Prefer **BEM** (Block__Element--Modifier) for class naming.
  * Utility classes may use **kebab-case** (e.g., `.text-center`).
* Prefer **modern layout systems**:

  * Use **Flexbox** and **CSS Grid** over floats.
* Use **custom properties** (`--variable-name`) for theme values and spacing scales.
* Follow consistent formatting:

  * 2 spaces for indentation.
  * One selector per line where practical.
* Include **responsive design** principles with media queries where appropriate.

---

## JavaScript / Scripting Standards

* Always follow **modern ES standards** (ES2015+).
* Use **strict mode** for scripts (`"use strict";`).
* Naming conventions:

  * Variables & functions: `camelCase`
  * Classes / constructors: `PascalCase`
  * Constants: `UPPER_SNAKE_CASE`
* Prefer **const** and **let**; avoid `var`.
* Avoid global variables; wrap code in modules or closures.
* Use **arrow functions** when binding context is not required.
* Use **async/await** instead of chained `.then()` where possible.
* Add **JSDoc comments** for public functions and complex logic.
* Validate inputs and handle possible errors gracefully.

---

## Accessibility & Best Practices

* Always consider **WCAG accessibility standards**:

  * Keyboard navigability
  * Screen reader compatibility
  * Proper labeling
* Use **semantic HTML first**, then enhance with CSS/JS.
* Ensure forms have associated labels.
* Provide **responsive, mobile-friendly layouts**.

---

## Formatting & Style

* Use consistent **indentation** (2 spaces).
* End all JavaScript statements with **semicolons**.
* Wrap multi-line blocks for readability.
* Alphabetize CSS properties within each rule when practical.

---

## General Copilot Instructions

* Follow these conventions when generating or fixing code.
* Always ask a clarifying question if the request is ambiguous.
* Prefer clear, maintainable solutions over “clever” shortcuts.([GitHub Docs][1])
