# Irfaan Khan Tutoring

Modern single-page site for [Irfaan Khan Tutoring](https://www.irfaankhantutoring.com/) — online and in-person math & science private tutoring based in New York and Metro Atlanta, GA.

Built with React + Vite. Deployed on Fly.io behind nginx.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
```

## Deploy

```sh
fly deploy
```

## Intake form

The intake form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/irfaankkhan@gmail.com`) — no backend required. The first submission sends a one-time activation email to that address; click the link inside it once and all subsequent submissions are delivered to the inbox.
