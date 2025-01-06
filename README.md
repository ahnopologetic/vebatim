<div align="center">
    <img src="./assets/vebatim-64.png" alt="Vebatim Logo" />
</div>
<div align="center">
    <img src="./assets/vebatim-title-white-64.png" alt="Vebatim Title" />
</div>

---

# Vebatim

> Define, track, and manage user events directly in your Figma designs - speak data, vebatim.

Vebatim is a comprehensive platform that revolutionizes how teams work with event tracking data. By providing integrated tools through both Figma and web interfaces, it streamlines the process of defining, implementing, and monitoring user events. The platform ensures that project managers, designers, engineers, and stakeholders can collaborate effectively while maintaining data quality and consistency.

## Platform Components

### 🎨 Figma Widget
- Visual event definition directly on design elements
- Implementation status tracking
- Real-time collaboration with the web platform
- Export capabilities for easy sharing

### 🌐 Web Application
- Event tracking dashboard and analytics
- Data schema management
- Implementation status monitoring
- Team collaboration features
- Project organization and management
- Export and reporting tools

### 📊 Data Contract System
- Standardized event schema definitions
- Type validation and enforcement
- Version control for event definitions
- Integration with development workflows

### 🔄 Integration Hub
- API for third-party tool integration
- CI/CD pipeline support
- Analytics platform connectors
- Development environment plugins

## Features

### For Project Managers
- Dashboard for tracking implementation progress
- Analytics and reporting tools
- Project organization by features
- Team collaboration management

### For Designers
- Visual event definition in Figma
- Real-time status updates
- Direct communication with developers
- Design-to-implementation tracking

### For Developers
- Clear event implementation specifications
- Type-safe data contracts
- Integration with development tools
- Implementation status updates

### For Data Teams
- Standardized event schemas
- Data quality validation
- Analytics platform integration
- Version control for data definitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)
- Figma Desktop App
- Modern web browser

### Installation

#### Figma Widget
1. Clone the repository:
```bash
git clone https://github.com/yourusername/vebatim.git
cd vebatim/vebatim-widget
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Import the widget in Figma:
   - Open Figma Desktop App
   - Go to Menu > Widgets > Development > Import widget from manifest
   - Select `manifest.json` from the project directory

#### Web Application
1. Navigate to web app directory:
```bash
cd vebatim/webapp
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment:
```bash
cp .env.example .env
```

4. Start development server:
```bash
pnpm dev
```

## Development

### Project Structure

```
vebatim/
├── vebatim-widget/     # Figma widget source code
├── webapp/             # Web application
├── data-contract/      # Data contract system
├── integration-hub/    # Integration services
├── docs/              # Documentation
└── packages/          # Shared packages
```

### Technology Stack

#### Figma Widget
- TypeScript
- React
- Figma Widget API
- Tailwind CSS

#### Web Application
- Next.js 13 (App Router)
- TypeScript
- Shadcn UI
- Radix UI
- Tailwind CSS

#### Data Contract System
- TypeScript
- JSON Schema
- OpenAPI

#### Integration Hub
- Node.js
- RESTful APIs
- WebSocket

### Commands

Each component has its own set of commands in their respective directories. Common commands:
- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm lint`: Run linter
- `pnpm test`: Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Figma API Documentation
- Next.js Documentation
- React Documentation
- Tailwind CSS Documentation

---

<div align="center">
Made with ❤️ by the Vebatim team
</div>



