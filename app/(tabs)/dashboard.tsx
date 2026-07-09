import AdminDashboard from "@/components/admin/Dashboard";
import ResidentDashboard from "@/components/resident/Dashboard";

import { SESSION } from "../../constants/sessions";

export default function dashboard() {
  if (SESSION.role === "admin") {
    return <AdminDashboard />;
  }

  return <ResidentDashboard />;
}
