# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 구조

## Nuxt 3의 표준 구조를 따르되, 확장성을 고려해 폴더를 세분화.

- 데이터의 타입 정의(types)와 실제 콘텐츠(data)를 분리하여 유지보수성 ↑
- 모든 정적 자산은 assets 폴더 내에서 관리하여 Vite의 빌드 최적화 효과 ↑

portfolio/
├── app/
│ ├── assets/ <-- 빌드가 필요한 정적 자원
│ │ ├── scss/
│ │ ├── images/
│ │ └── fonts/
│ ├── data/ <-- 실제 데이터 (.ts)
│ ├── types/ <-- 타입 정의 (.ts)
│ ├── pages/ <-- index.vue, sub.vue
│ ├── components/ <-- Header, Footer, Card 등 분리용
│ ├── composables/ <-- 데이터 처리 로직 (Auto-import 활용)
│ └── App.vue
└── public/ <-- 빌드 제외 정적 파일
└── favicon.ico
