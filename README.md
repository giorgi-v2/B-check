# BCheckProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## About Project

# B-Check — Financial Tracker

B-Check is a personal finance application for tracking income, expenses, payment cards, and transactions.

## Main Sections

- **Dashboard:** Account balance, monthly income and expenses, a green/red donut chart, cards, and recent transactions.
- **My Cards:** Card details, expiration date, account number, GEL/USD/EUR balances, and the five latest transactions. Card numbers and CVVs remain hidden until selected.
- **Transactions:** Transaction history with card filters, date-range selection, search, and spending totals for the selected period.

## Design

A modern light interface with green accents, rounded panels, matching header/footer colors, and reusable components organized for HTML and SCSS implementation.

## Status

The Figma design includes three screens and navigation/card-reveal interactions. Filtering and financial calculations require application logic.

All displayed financial information is fictional demo data.

# Change log

## Lesson 03

- created 2 pages component `src/app/features/my-card-page` `src/app/features/transactions-page`
- added switch it chooses components in navigation and currency signs, used event binding for class so elements will have their own colors. `components: navigation, header, app.ts` used `input` and `output` props for it.
- i'm using <a> so as i cant use `disabled` for it i added accessibility feature in _navigation_ component.
- used `for` so it can take elements from array by id to render it, used `empty` so if there is no information it can show a message. used in _transactions-page_ component.
- used `if` so it can choose icons or symbols what it has to add. used in _transactions-page_ component.
- used `let` to keep method in it. used in _transactions-page_ component.
- validated _build_ and _start_.
