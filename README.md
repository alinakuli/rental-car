# RentalCar

A car rental web application built with Next.js. Users can browse a catalog of cars, filter it by brand, price and mileage, load more listings on demand, open a car's detail page and submit a rental booking.

**Live demo:** [https://rental-car-xi-six.vercel.app/](https://rental-car-xi-six.vercel.app/)

## Key Features

- **Home page** with a hero banner and a **View Catalog** button that leads to the catalog.
- **Catalog page** with a list of cars fetched from the backend.
- **Backend filtering** by:
  - brand (one value),
  - price (one value),
  - mileage ("from" and "to", set separately or together).
- **Load More pagination:** extra cards are loaded with the currently active filters applied.
- **Clear filters** button and a "No cars found" state with a filter reset.
- **Car cards** with a **Read more** button that opens the car's page in a new browser tab.
- **Car details page** with a photo, full vehicle information and a rental form.
- **Rental form** that sends its data to the backend and shows a notification after a successful booking.
- Loading, error and "not found" states.
- Desktop layout, built from the provided design mock-up.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, no `src` directory)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [TanStack Query](https://tanstack.com/query) (`useInfiniteQuery` for paginated, filtered requests)
- Deployed on [Vercel](https://vercel.com/)

## Installation

### Prerequisites

- Node.js 18.18 or newer
- npm (or yarn / pnpm)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root, using `.env.example` as a template:

   ```env
   NEXT_PUBLIC_API_URL=https://your-backend-url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. On the home page, click **View Catalog**.
2. In the catalog, choose a brand, a price and/or a mileage range, then click **Search**. Use **Clear filters** to reset.
3. Click **Load more** to show additional cars. The active filters stay applied.
4. Click **Read more** on a card to open the car's page in a new tab.
5. On the car page, fill in the rental form and submit it. A notification confirms a successful booking.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
app/                  Routes: home, /catalog, /catalog/[carId], layout, error and not-found pages
components/           UI components (layout, home, catalog, car)
hooks/                Data hooks (useCars, useCarFilters)
lib/                  API functions, constants and utilities
types/                TypeScript types
public/               Static assets (images, icons)
```

## API

The app expects a backend that provides:

| Method | Endpoint        | Purpose                                                            |
| ------ | --------------- | ------------------------------------------------------------------ |
| GET    | `/cars`         | Paginated car list; supports brand, price, mileage, page and limit |
| GET    | `/cars/filters` | Available brands and price range                                   |
| GET    | `/cars/:id`     | A single car                                                       |
| POST   | `/orders`       | Rental booking submission                                          |

Adjust the endpoint names above to match your backend.

## Author

**Alina Kulichenko**

- GitHub: [@alinakuli](https://github.com/alinakuli)
- LinkedIn: [your-profile](https://www.linkedin.com/in/alina-kulichenko/)
- Email: alinakulichenko1@gmail.com
