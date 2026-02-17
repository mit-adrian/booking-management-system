frontend/
│
├── public/
│ ├── images/
│ ├── icons/
│ └── favicon.svg
│
├── src/
│
│ ├── app/ # App-level setup
│ │ ├── App.tsx
│ │ ├── routes.tsx
│ │ ├── providers.tsx
│ │ └── store.ts
│ │
│ ├── assets/ # Static assets
│ │ ├── images/
│ │ ├── icons/
│ │ └── fonts/
│ │
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # Buttons, Inputs, Modals
│ │ ├── layout/ # Navbar, Footer, Container
│ │ └── common/ # Shared generic components
│ │
│ ├── features/ # 🔥 Feature-based modules
│ │ ├── home/
│ │ │ ├── components/
│ │ │ ├── hooks/
│ │ │ ├── services.ts
│ │ │ └── HomePage.tsx
│ │ │
│ │ ├── fleet/
│ │ │ ├── components/
│ │ │ ├── hooks/
│ │ │ ├── fleetAPI.ts
│ │ │ └── FleetPage.tsx
│ │ │
│ │ ├── services/
│ │ │ ├── components/
│ │ │ └── ServicesPage.tsx
│ │ │
│ │ ├── contact/
│ │ │ ├── components/
│ │ │ └── ContactPage.tsx
│ │ │
│ │ ├── about/
│ │ │ └── AboutPage.tsx
│ │ │
│ │ ├── blog/
│ │ │ ├── components/
│ │ │ ├── blogAPI.ts
│ │ │ ├── BlogPage.tsx
│ │ │ └── BlogDetailPage.tsx
│ │
│ ├── hooks/ # Global reusable hooks
│ │ ├── useAuth.ts
│ │ ├── useDebounce.ts
│ │ └── useFetch.ts
│ │
│ ├── lib/ # Utilities & configs
│ │ ├── axios.ts
│ │ ├── constants.ts
│ │ └── helpers.ts
│ │
│ ├── types/ # Global TypeScript types
│ │ ├── user.ts
│ │ ├── fleet.ts
│ │ └── blog.ts
│ │
│ ├── styles/ # Global styles
│ │ ├── globals.css
│ │ └── variables.css
│ │
│ └── main.tsx
│
├── .env
├── vite.config.ts
├── tsconfig.json
└── package.json
