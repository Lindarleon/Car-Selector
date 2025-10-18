# Car Selection App

## Overview
A simple car carousel web application built with vanilla HTML, CSS, and JavaScript. Users can browse through a collection of 10 different cars, viewing their details (name, year, price, and image) and navigate using Previous/Next buttons.

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Server**: Python HTTP Server (for serving static files)
- **Port**: 5000

## Project Structure
```
.
├── index.html          # Main HTML file with carousel structure
├── style.css           # Styling for the carousel interface
├── script.js           # JavaScript logic for carousel functionality
├── images/             # Car images (car1.png - car10.png)
└── .gitignore          # Python-specific ignore patterns
```

## Features
- Display car information (name, year, price, image)
- Navigate between cars using Previous/Next buttons
- Responsive carousel interface
- 10 different car models to browse

## Car Data
The app includes information for 10 cars:
1. Toyota Corolla (2022) - $20,000
2. Honda Civic (2021) - $21,000
3. Ford Mustang (2023) - $35,000
4. Chevrolet Camaro (2022) - $33,500
5. Tesla Model 3 (2023) - $42,000
6. BMW X5 (2022) - $60,000
7. Audi Q7 (2021) - $65,000
8. Jeep Wrangler (2023) - $45,000
9. Porsche 911 (2023) - $120,000
10. Mercedes-Benz G-Class (2022) - $130,000

## Workflow
- **Server**: Runs Python HTTP server on port 5000 to serve static files
- Command: `python -m http.server 5000`

## Recent Changes
- **Oct 18, 2025**: Initial setup with workflow configuration and documentation
  - Installed Python 3.11
  - Created .gitignore for Python
  - Configured Server workflow
  - Created project documentation

## User Preferences
None specified yet.

## Project Architecture
- **Static Site**: No backend required, all data is hardcoded in JavaScript
- **Single Page Application**: All functionality on one page with dynamic content updates
- **Simple Navigation**: Circular carousel (wraps around at both ends)
