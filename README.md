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

## Lesson 04

- changed navigation and transactions to use signal, used input() and output() for passing data and events. used in navigation, header, transactions-page, and app components.
- added shared types for cards, accounts, transactions, currencies, and routes. src/app/data.ts, src/app/route.ts.
- created reusable card-box and card-account-box components, used computed() to choose card labels and FontAwesome icons. src/app/features/card-box, src/app/features/card-account-box.
- added card selection and displayed selected card accounts and balances, used signal and computed() for it. src/app/features/my-cards-page.
- created transaction form, used FormsModule, ngModel, signals, and output events for entering transaction details and selecting cards. src/app/features/transaction-creation-page.
- added transaction IDs, card/currency checks, balance checks, and income/outcome balance updates. used effect() and localStorage to save and load data. src/app/app.ts.
- updated dashboard placeholders, added transaction-page header and button, improved responsive styles and selected states using CSS variables. src/app/features/dashboard-page, src/app/features/transactions-page, card and transaction-creation components.

## Lesson 05

- Used `MyCardsPage` as the parent list and `CardBox` as the reusable child for each card. `src/app/features/my-cards-page`, `src/app/features/cards/card-box`.
- Passed card data through `input.required<Card>()` and used an optional `input()` for the selected state. `src/app/features/cards/card-box`.
- Emitted card clicks through `output()` so the parent can update the selected card and display its accounts. `src/app/features/cards/card-box`, `src/app/features/my-cards-page`.
- Used `signal.update()` to add a transaction by creating a new array. `src/app/app.ts`.
- Added the **All cards** dropdown with `model.required()` and two-way binding. Used `computed()` to filter transactions by card and display the newest first. `src/app/features/cards/card-select`, `src/app/features/transactions/transactions-page`.
- Created a reusable `Box` component with `ng-content` and used it to display the recent transactions table on the Dashboard. `src/app/components/box`, `src/app/features/dashboard-page`.

## Lesson 06

- created Cards service with providedIn: 'root', private signal for cards, public asReadonly() signal, and computed() card counter. src/app/features/cards/cards.ts.
- added card creation, balance updates, deletion, and input validation. used update(), map(), filter(), and spread syntax for immutable updates. src/app/features/cards/cards.ts.
- used inject() to access the shared service in app, card-add, and my-cards-page. src/app/app.ts, src/app/features/cards/card-add/card-add.ts, src/app/features/my-cards-page/my-cards-page.ts.
- connected the card form to the service and displayed user-added cards in My Cards and transaction selection. used FormsModule, ngModel, and signals. src/app/features/cards/card-add, src/app/app.ts, src/app/app.html.
- created a separate demo with local providers: [Cards]. chose root for sharing cards across the app and a local provider for independent test cards. src/app/features/cards/card-demo/card-demo.ts.
- created MAX_CARDS InjectionToken and provided the limit with useValue: 5. used inject() to read the limit and prevent adding more than five cards per service instance. src/app/features/cards/cards.ts, src/app/app.config.ts.
- kept effect() and localStorage for saving and loading shared cards and transactions. src/app/app.ts.
- added a centered dialog for the card form, masked card numbers to show the last four digits, reused card components in the demo, and styled the delete button using existing CSS variables. src/app/features/my-cards-page, src/app/features/cards/card-box/card-box.html, src/app/features/cards/card-demo.

## Lesson 07

- Added Angular Router navigation for Dashboard, My Cards, and Transactions, with active links and a nested transaction form. `src/app/app.routes.ts`, `src/app/components/navigation`, `src/app/features/transactions/transaction-layout`.
- Added card selection through `/my-cards/:id` and transaction filtering through `/transactions?cardId=...`. `src/app/features/my-cards-page`, `src/app/features/transactions/transactions-page`.
- Added a redirect from `/` to `/dashboard` and a 404 page for unknown URLs. `src/app/app.routes.ts`, `src/app/features/not-found-page`.
- Added a guard that redirects to My Cards when there are no saved cards, and lazy-loaded the transaction form. `src/app/features/transactions/has-cards.guard.ts`, `src/app/app.routes.ts`.
- Moved transaction creation and balance updates into the shared `Transactions` service. `src/app/features/transactions/transactions.ts`.
