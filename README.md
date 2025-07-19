# CBI-Frontend
This is the frontend application for the CBI (Central Bank of) project, built with React and Zustand for state management. The application provides interfaces for both admin and staff users to manage community members, contributions, loans, nominees, and documents. It is designed to be responsive and user-friendly, with a focus on performance and maintainability.


## Features
- **Admin Interface**: Manage users, view statistics, and configure settings.
- **Staff Interface**: Handle member contributions, loans, nominees, and document uploads.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **State Management**: Utilizes Zustand for efficient state management across the application.
- **API Integration**: Communicates with the backend API for data retrieval and submission.
## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Zustand**: Lightweight state management library for React.
- **Axios**: Promise-based HTTP client for making API requests.
- **Vite**: Fast build tool and development server for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **React Router**: Declarative routing for React applications.
- **dotenv**: Module to load environment variables from a `.env` file.
- **ESLint**: Tool for identifying and fixing problems in JavaScript code.
- **Prettier**: Code formatter to maintain consistent code style.
- **Jest**: JavaScript testing framework for unit and integration tests.
- **React Testing Library**: Library for testing React components with a focus on user interactions.    

---

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- Basic understanding of React and Zustand for state management.
### Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd CBI-Frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add your environment variables (e.g., API base URL, authentication tokens).
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to `http://localhost:5173` (or the port specified in your `.env` file).

---

/CBI-Frontned
├── public/
├── src/
│   ├── assets/                  # Images, logos, icons
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Buttons, Input, Modal etc.
│   │   ├── admin/               # Admin-specific components
│   │   └── staff/               # Staff-specific components
│   ├── layouts/                 # Layouts with sidebar/navbar etc.
│   │   ├── AdminLayout.jsx
│   │   └── StaffLayout.jsx
│   ├── pages/
│   │   ├── admin/                          # Admin pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── UsersManagement.jsx
│   │   │   └── Settings.jsx
│   │   ├── staff/                          # Staff pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Members/
│   │   │   │   ├── List.jsx
│   │   │   │   ├── AddMember.jsx
│   │   │   │   └── MemberDetails.jsx
│   │   │   ├── Contributions/                        
│   │   │   │   ├── AddContribution.jsx
│   │   │   │   └── ContributionHistory.jsx
│   │   │   ├── Loans/
│   │   │   │   ├── ApplyLoan.jsx
│   │   │   │   ├── LoanList.jsx
│   │   │   │   └── LoanDetails.jsx
│   │   │   ├── Nominees/
│   │   │   │   ├── NomineeForm.jsx
│   │   │   │   └── NomineeList.jsx
│   │   │   └── Documents/
│   │   │       ├── UploadDocs.jsx
│   │   │       └── DocsList.jsx
│   ├── router/
│   │   └── AppRoutes.jsx        # Route management for Admin & Staff
│   ├── store/
│   │   └── zustandStores.js     # Zustand stores for auth, data, etc.
│   ├── services/
│   │   └── api.js               # Axios instance with token handling
│   ├── utils/
│   │   ├── formatDate.js
│   │   └── validators.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── vite.config.js
└── package.json

## file structure explanation   

- **public/**: Contains static assets like the favicon and index.html.
- **src/**: Main source code directory.
    - **assets/**: Images, logos, and icons used in the application.
    - **components/**: Reusable UI components.
        - **common/**: Generic components like buttons, inputs, modals.
        - **admin/**: Components specific to the admin interface.
        - **staff/**: Components specific to the staff interface.
    - **layouts/**: Layout components that include sidebars and navigation bars.
        - **AdminLayout.jsx**: Layout for admin pages.
        - **StaffLayout.jsx**: Layout for staff pages.
    - **pages/**: Contains all the pages for both admin and staff.
        - **admin/**: Admin-specific pages like dashboard, user management, and settings.
        - **staff/**: Staff-specific pages including member management, contributions, loans, nominees, and document handling.
    - **router/**: Manages routing for the application.
        - **AppRoutes.jsx**: Defines routes for both admin and staff interfaces.    
    - **store/**: Zustand stores for state management.
        - **zustandStores.js**: Contains Zustand stores for authentication and data management.
    - **services/**: Contains services like API calls.
        - **api.js**: Axios instance configured for API requests with token handling.
    - **utils/**: Utility functions.
        - **formatDate.js**: Functions for formatting dates.
        - **validators.js**: Functions for validating form inputs.
    - **App.jsx**: Main application component that sets up the router and layout.   
    - **main.jsx**: Entry point for the React application, rendering the App component.
- **.env**: Environment variables for the application.
- **vite.config.js**: Configuration file for Vite, the build tool used in this project.
- **package.json**: Contains project metadata and dependencies.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.     
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your commit message"
    ```
4. Push your changes to your fork:
    ```bash
    git push origin feature/your-feature-name   
    ```
5. Create a pull request to the main repository.    