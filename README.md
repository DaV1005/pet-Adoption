# Pet Adoption Match

## Project Overview

Pet Adoption Match is a web-based platform designed to help potential pet adopters find their perfect pet match based on personal preferences and lifestyle.

## Features

- **User Authentication:** Secure login and registration system for users.

- **Pet Matching:**: Pet matches based on user inputs.

- **User Profiles:** Users can manage their profiles and view their match history.

- **Responsive Design:** Accessible on both desktop and mobile devices.

- **Interactive UI:** Easy-to-navigate interface with an engaging user experience.

## Technologies Used

- **Frontend:** React.js, TensorFlow.js, TailwindCSS for styling

- **Backend:** Node.js with Express.js

- **Database:** MongoDB

- **Authentication:** JWT for secure authentication

- **APIs:** Petfinder API for fetching pet data; Yelp API for local services like grooming and veterinary care

## Getting Started

### Prerequisites

- Node.js and npm

- MongoDB server (local or remote)

### Installation

1\. Clone the repository: 

2\. Install dependencies: npm i

3\. Set up environment variables:

- Create a `.env` file in the root directory.

- Add the following keys:

  ```

  DB_URI=<your_mongodb_uri>

  JWT_SECRET=<your_jwt_secret>

  PETFINDER_API_KEY=<your_petfinder_api_key>

  PETFINDER_API_SECRET=<your_petfinder_api_secret>

  YELP_API_KEY=<your_yelp_api_key>

  ```

4\. Run the development server: npm run dev 
