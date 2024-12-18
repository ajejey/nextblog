# Next.js Markdown Blog

A simple, static blog built with Next.js that uses Markdown files for content. Perfect for developers who want to maintain their blog posts in Markdown format.

## Features

- Write blog posts in Markdown
- Styled with Tailwind CSS
- Static site generation
- Responsive design
- SEO friendly

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/nextblog.git
cd nextblog
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

## Adding Blog Posts

Add your Markdown files to the `src/app/posts` directory. Each post should include frontmatter with:

```markdown
---
title: Your Title
date: YYYY-MM-DD
author: Your Name
---

Your content here...
```

## Deployment

This blog is configured for GitHub Pages deployment using GitHub Actions. Just push to the main branch, and your changes will be automatically deployed.

## License

MIT
