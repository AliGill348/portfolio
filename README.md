# Ali Hamza Gill — Portfolio

React + Vite portfolio site.

## Setup (Ubuntu/WSL terminal)

1. Unzip this folder, then move it into your Ubuntu home directory so file
   watching works fast, e.g. `~/portfolio`.

2. Install Node.js (if not already installed):
   ```
   sudo apt update
   sudo apt install -y nodejs npm
   node --version
   ```
   (If this gives an old version, install via nvm instead — ask if you want
   those steps.)

3. Install dependencies:
   ```
   cd portfolio
   npm install
   ```

4. Run the dev server:
   ```
   npm run dev
   ```
   Open the printed local URL (usually http://localhost:5173) in your browser.

5. To edit content: open `src/components/*.jsx` — each file is one section
   (Hero, About, Experience, Projects, Skills, Contact). Save and the browser
   auto-refreshes.

6. To add your resume download: put a `resume.pdf` file inside the `public/`
   folder — the "Download resume" button already points to `/resume.pdf`.

## Build for deployment

```
npm run build
```

This produces a `dist/` folder you can deploy to Vercel, Netlify, or any
static host.

## Running with Docker

This turns your React app into a portable container — the same image runs
identically on your laptop, a server, or the cloud.

Build the image:
```
docker build -t ali-portfolio .
```

Run it:
```
docker run -p 8080:80 ali-portfolio
```

Open http://localhost:8080 — that's your portfolio running inside a
container, served by Nginx.

Or, do both in one step with Docker Compose:
```
docker compose up --build
```

Stop it with `Ctrl+C`, or in the background with `docker compose up -d`.

## CI/CD (GitHub Actions)

`.github/workflows/ci.yml` automatically builds the React app and the
Docker image every time you push to GitHub. If either build breaks, GitHub
shows a red ❌ on your commit — this catches mistakes before they reach
production. To use it: push this project to a GitHub repository, then check
the "Actions" tab on GitHub after your first push.
