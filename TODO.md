# Authentication System Update Plan

## Steps to Complete:
- [ ] Update User schema in backend/models/User.js with new fields (department, contact) and password validation
- [ ] Update signup controller in backend/controllers/authController.js to handle multiple fields and no auto-login
- [ ] Update login controller in backend/controllers/authController.js for role-based redirects
- [ ] Update AuthContext in src/context/AuthContext.jsx to handle new signup/login parameters
- [ ] Update Signup component in src/components/Signup.jsx with new fields and redirect to login
- [ ] Update Login component in src/components/Login.jsx for role-based redirects
- [ ] Create Profile page in src/pages/Profile.jsx to display user data
- [ ] Update App.jsx for new routes (/profile, /admin-dashboard, /staff-dashboard) and protected routes
- [x] Add password visibility toggle (eye icon) to Signup and Login components
- [ ] Create AdminDashboard and StaffDashboard components
- [ ] Test authentication flow: signup → login → role-based redirect → profile access
- [ ] Ensure protected routes validate JWT properly

## Current Status:
- Backend User schema updated with new fields and validation
- Signup and login controllers updated for new requirements
- AuthContext updated to handle new parameters
- Signup component updated with new fields
- Login component ready for role-based redirects
- Profile page needs to be created
- Password visibility toggle needs to be added
- Dashboards need to be created
- Testing pending

## Requirements Summary:
- Signup: Collect name, email, password, role, department, contact → redirect to login
- Login: Email/password → JWT token → role-based redirect (Higher Authority → /admin-dashboard, Staff → /staff-dashboard)
- Profile: /profile page showing user data from /api/auth/me
- Password: Min 8 chars, uppercase, lowercase, number, special char
- Protected routes: JWT validation
- Password fields: Add eye icon for visibility toggle
