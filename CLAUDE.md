# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 starter template called "moe-app" featuring:
- **App Router** (not Pages Router) with TypeScript
- **Clerk Authentication** with protected routes
- **shadcn/ui** components with New York style variant
- **Tailwind CSS v4** with dark/light theme support
- **Turbopack** for development and build
- **pnpm** as package manager
- Pre-configured tooling (ESLint, Prettier, Husky, commitlint)

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (uses Turbopack)
pnpm dev

# Build for production (uses Turbopack)
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Format code (runs automatically via lint-staged)
prettier --write .
```

## Architecture & Structure

### Authentication Flow
- Uses Clerk for authentication with middleware protection
- Public routes: `/`, `/sign-in/*`, `/sign-up/*`
- All other routes require authentication
- Environment variables validated via `env.ts` using Zod

### Component Architecture
- **src/app/providers.tsx**: Wraps app with ClerkProvider and ThemeProvider
- **src/middleware.ts**: Route protection using Clerk middleware
- **src/components/ui/**: shadcn/ui components (button, card, input, sonner)
- Uses `@/` path aliases for imports

### Environment Configuration
Required environment variables (see `.env.local.example`):
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` (optional, defaults to `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` (optional, defaults to `/sign-up`)

### Tooling Setup
- **Husky**: Pre-commit hooks run `lint-staged`
- **lint-staged**: Auto-formats files with Prettier
- **commitlint**: Enforces conventional commit messages
- **ESLint**: Next.js + TypeScript rules with flat config
- **Prettier**: Code formatting with Tailwind plugin

## Key Configuration Files

- **components.json**: shadcn/ui config with New York style, neutral base color
- **next.config.ts**: Basic Next.js configuration
- **eslint.config.mjs**: Flat config extending Next.js rules
- **env.ts**: Zod-based environment variable validation

## Development Notes

- Uses Turbopack for faster builds and development
- Theme switching enabled via next-themes
- Route groups used for auth pages: `(auth)/sign-in`, `(auth)/sign-up`
- Protected dashboard route requires authentication