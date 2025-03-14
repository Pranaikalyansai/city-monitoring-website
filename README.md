# Traffic Monitoring Dashboard

This is a React-based frontend application that visualizes traffic and pollution data using Recharts. The dashboard displays real-time-like dummy data of traffic congestion, pollution levels, and vehicle count.

## Features
- **Traffic & Pollution Monitoring:** Line chart visualization of traffic congestion and pollution levels over time.
- **Vehicle Count Display:** A list showing the number of vehicles at different times of the day.
- **Responsive Design:** Works on both desktop and mobile screens.

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm/yarn** installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/traffic-monitoring-dashboard.git
   cd traffic-monitoring-dashboard
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000`.

## Dependencies
- **React**: Frontend framework
- **Recharts**: For chart visualization (`npm install recharts`)
- **Tailwind CSS** (Optional): For styling

## File Structure
```
/src
  ├── components
  │   ├── ui
  │   │   ├── card.jsx
  ├── App.jsx
  ├── index.js
  ├── styles.css
```

## Troubleshooting
- If you get module resolution errors, ensure all dependencies are installed by running:
  ```sh
  npm install
  ```
- If `@/components/ui/card` import fails, replace it with a relative path: `./components/ui/card`.

## License
This project is open-source and free to use. Modify and expand as needed!

