# AI Atlas

A modern platform for AI news and tools aggregation, built with Next.js and N8N.

## Features

- Modern, magazine-style UI inspired by The New Yorker and The Atlantic
- Real-time AI news aggregation
- Category-based content organization
- Newsletter subscription
- Search functionality
- Responsive design

## Tech Stack

- Frontend: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- Data Scraping: N8N
- Containerization: Docker

## Getting Started

### Prerequisites

- Node.js 18 or later
- Docker (optional, for containerized deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aiatlas.git
   cd aiatlas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t aiatlas .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 aiatlas
   ```

## Project Structure

```
aiatlas/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── public/
├── Dockerfile
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 