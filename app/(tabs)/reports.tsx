import { SESSION } from "../../constants/sessions";
import AdminReports from "@/components/admin/Reports";
import ResidentReports from "@/components/resident/Reports";

export default function Flats() {
  if (SESSION.role === "admin") {
    return <AdminReports />;
  }

  return <ResidentReports />;
}
