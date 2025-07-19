## file structure

```
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


```
---

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