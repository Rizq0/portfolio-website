# Portfolio Website

<br/>
<img src="docs/demo.gif" title="Main Demo">
</a>
<br/>

## Hosted Version

[Deployed Version (Click Me)](https://joedev.co.uk/)

## Project Summary

This project is a personal portfolio website designed to showcase my skills, experience, and projects in a clean and engaging way.

### What went well:

- The website effectively showcases my skills and projects in a structured and visually appealing manner.

- Smooth navigation and responsive design ensure a user-friendly experience across devices.

### Challenges faced:

- Framer Motion animations, while functional, didn’t meet my initial expectations in terms of visual impact. Fine-tuning the animations for better consistency and fluidity proved challenging. The final product was not up to standards, so it has been shelved for now. The next step would be to use a lightweight & easy-to-integrate animation library, bringing me to React Transition Group / React Intersection Observer.

- Deploying the website introduced some hurdles, particularly due to import errors due to assets in /src that were not built with the production build that required debugging. Imports were changed and now follow Vite / React best practices.

## Setup

Create an https://www.emailjs.com/ account and follow the documentation to setup an email service, this should provide you with the following:

- Public ID
- Service ID
- Template ID

### Local Production Setup

<br> 1. Clone the repository.

```
git clone https://github.com/Rizq0/portfolio-website.git
cd portfolio-website
```

<br> 2. Create a .env file in the root directory with the EmailJS items.

```
VITE_EMAILJS_PUBLIC_KEY="PUBLIC KEY HERE"
VITE_EMAILJS_SERVICE_ID="SERVICE ID HERE"
VITE_EMAILJS_TEMPLATE_ID="TEMPLATE ID HERE"
VITE_BASE_URL=/
```

**NOTE**: Remember to also add these as repository secrets on GitHub.

<br> 3. Build and run the docker container.

```
docker compose up --build
```

<br> 4. Access the application.

The application will be available at:

```
http://localhost
```

### GitHub Container Registry

If you want to pull and run the Docker image from GitHub Packages, follow these instructions:

**NOTE**: Please bear in mind that the EmailJS will not work due to Vite env's being injected at build time, rather than runtime.

Prerequisites:

- Docker installed and running.
- A GitHub account with access to the repository and the GitHub Packages registry.

<br> 1. Pull latest docker image from registry.

- https://github.com/Rizq0/portfolio-website/pkgs/container/portfolio-website

```
docker pull ghcr.io/rizq0/portfolio-website:latest
```

<br>2. Run the docker container with the EmailJS env's.

```
docker run -it -p 80:80 ghcr.io/rizq0/portfolio-website:latest
```

<br> 3. Access the application.

The appication will be available at:

```
http://localhost
```

## Summary

This project not only strengthened my technical skills in web development and deployment but also taught me valuable lessons in troubleshooting and refining design elements to meet user expectations.

### Tech Stack

- React
- TypeScript
- TailwindCSS
- Vite
- EmailJS
- React Hot Toast
- Mantine
- Tabler Icons
- GitHub Pages (Hosting)
- Framer Motion (Functions Created - Not Used)

### Planned Features

- React Transition Group / React Intersection Observer Implementation
- Improvement of dark / light mode colours, specifically shading on components
