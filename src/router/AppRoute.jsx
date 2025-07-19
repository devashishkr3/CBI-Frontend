// src/router/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AdminLayout from "../layouts/AdminLayout";
import StaffLayout from "../layouts/StaffLayout";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
// import UsersManagement from "../pages/admin/UsersManagement";
import Settings from "../pages/admin/Setting";

// Staff Pages
import StaffDashboard from "../pages/staff/Dashboard";
import MemberList from "../pages/staff/Members/List";
import AddMember from "../pages/staff/Members/AddMember";
import MemberDetails from "../pages/staff/Members/MemberDetail";

// import AddContribution from "@/pages/staff/Contributions/AddContribution";
// import ContributionHistory from "@/pages/staff/Contributions/ContributionHistory";

import ApplyLoan from "../pages/staff/Loans/ApplyLoan";
import LoanList from "../pages/staff/Loans/LoanList";
import LoanDetails from "../pages/staff/Loans/LoanDetails";

import NomineeForm from "../pages/staff/Nominees/NomineeForm";
import NomineeList from "../pages/staff/Nominees/NomineeList";

// import UploadDocs from "@/pages/staff/Documents/UploadDocs";
// import DocsList from "@/pages/staff/Documents/DocsList";

// Auth pages (optional)
import Login from "../auth/Login";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path="users" element={<UsersManagement />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Staff Routes */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<StaffDashboard />} />
          {/* Members */}
          <Route path="members" element={<MemberList />} />
          <Route path="members/add" element={<AddMember />} />
          <Route path="members/:id" element={<MemberDetails />} />

          {/* Contributions */}
          {/* <Route path="contributions/add" element={<AddContribution />} /> */}
          {/* <Route
            path="contributions/history"
            element={<ContributionHistory />}
          /> */}

          {/* Loans */}
          <Route path="loans/apply" element={<ApplyLoan />} />
          <Route path="loans/list" element={<LoanList />} />
          <Route path="loans/:id" element={<LoanDetails />} />

          {/* Nominees */}
          <Route path="nominees/add" element={<NomineeForm />} />
          <Route path="nominees/list" element={<NomineeList />} />

          {/* Documents */}
          {/* <Route path="documents/upload" element={<UploadDocs />} /> */}
          {/* <Route path="documents/list" element={<DocsList />} /> */}
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
