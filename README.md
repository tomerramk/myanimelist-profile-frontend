# MyAnimeList Profile Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the frontend for a web application that interacts with [MyAnimeList](https://yanimelist.net/) to provide an altenative UI for user profiles and anime lists.  
The project is built using React with Vite and integrates with a backend that fetches data from the MyAnimeList API.

## Features

- Search for specific user by MAL username
- Display profile page
- Display the user's anime list in a stylized infinite scroll
- Search and sort inside animelist
- Dark/Light mode

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/)

Requires the [myanimelist-profile-backend](https://github.com/tomerramk/myanimelist-profile-backend) server to be running to communicate with the MyAnimeList API.  
(Because this applicaiton isn't deployed it is only meant for local usage. deploying it will require some changes.)

### Installation

Clone the repository:

```bash
git clone https://github.com/tomerramk/myanimelist-profile-frontend.git
cd myanimelist-profile-frontend
```

Install dependencies:

```
npm install
```

## Development

Run the vite application:

```
npm run dev
```

The application will become available at http://localhost:3000
