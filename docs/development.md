# Development Guide

This guide provides detailed information for developers working on the Verbatim platform.

## Development Environment Setup

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)
- Git
- Figma Desktop App
- VS Code (recommended)
- Docker (for local development)

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript + JavaScript
- GitLens
- Error Lens

### Environment Setup

1. Install Node.js and pnpm:
```bash
# Using nvm (recommended)
nvm install 16
nvm use 16

# Install pnpm
npm install -g pnpm@8
```

2. Clone and setup the repository:
```bash
git clone https://github.com/yourusername/verbatim.git
cd verbatim
pnpm install
```

## Project Architecture

### Monorepo Structure

```
verbatim/
├── verbatim-widget/     # Figma widget
│   ├── src/
│   │   ├── widget/     # Widget core
│   │   └── iframes/    # Widget UI components
│   └── dist/          # Build output
├── webapp/            # Web application
│   ├── src/
│   │   ├── app/      # Next.js app
│   │   └── lib/      # Shared utilities
│   └── public/       # Static assets
├── data-contract/    # Data contract system
│   ├── src/
│   │   ├── schemas/  # JSON schemas
│   │   └── types/    # TypeScript types
│   └── dist/
├── integration-hub/  # Integration services
│   ├── src/
│   │   ├── api/     # REST API
│   │   └── ws/      # WebSocket handlers
│   └── dist/
└── packages/        # Shared packages
    ├── tsconfig/    # TypeScript configs
    ├── eslint/      # ESLint configs
    └── ui/          # Shared UI components
```

### Key Technologies

#### Figma Widget
- React for UI components
- TypeScript for type safety
- Figma Widget API for canvas interactions
- Tailwind CSS for styling

#### Web Application
- Next.js 13 with App Router
- Server Components for performance
- Shadcn UI components
- Radix UI primitives
- Tailwind CSS for styling
- Nuqs for URL state management

#### Data Contract System
- TypeScript for type definitions
- JSON Schema for validation
- OpenAPI for API documentation
- Zod for runtime validation

#### Integration Hub
- Node.js for runtime
- Express for REST API
- Socket.io for real-time communication
- PostgreSQL for data storage

## Development Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `release/*`: Release preparation

### Commit Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write unit tests for new features
- Document public APIs and components
- Use functional components in React
- Prefer named exports
- Use absolute imports

### Testing Strategy

#### Unit Tests
- Jest for testing framework
- React Testing Library for components
- Coverage threshold: 80%

#### Integration Tests
- Cypress for E2E testing
- API integration tests
- Widget integration tests

#### Performance Testing
- Lighthouse CI
- Web Vitals monitoring
- Bundle size analysis

### Build and Deploy

#### Local Development
```bash
# Start all services
pnpm dev

# Start specific component
pnpm dev:widget
pnpm dev:webapp
pnpm dev:integration
```

#### Production Build
```bash
# Build all
pnpm build

# Build specific component
pnpm build:widget
pnpm build:webapp
pnpm build:integration
```

### CI/CD Pipeline

Using GitHub Actions for:
- Code quality checks
- Test execution
- Build verification
- Automated deployments
- Version management
- Release automation

## Best Practices

### Performance
- Use React Server Components where possible
- Implement code splitting
- Optimize images and assets
- Cache API responses
- Use proper memoization

### Security
- Validate all inputs
- Sanitize user data
- Use proper authentication
- Follow OWASP guidelines
- Regular security audits

### Accessibility
- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Implement keyboard navigation
- Add proper ARIA attributes
- Test with screen readers

### State Management
- Use React Query for server state
- Zustand for client state
- URL state for shareable state
- Local state for UI state

## Troubleshooting

### Common Issues

1. Widget Development
```bash
# Reset Figma development mode
rm -rf dist/
pnpm clean
pnpm dev
```

2. Web App Development
```bash
# Clear Next.js cache
rm -rf .next/
pnpm dev
```

3. Database Issues
```bash
# Reset local database
docker-compose down -v
docker-compose up -d
```

### Debug Tools

- React DevTools
- Network tab in browser
- Figma DevTools
- VS Code debugger
- Chrome DevTools

## Additional Resources

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) 