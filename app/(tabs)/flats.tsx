import {SESSION} from "../../constants/sessions"
import AdminFlats from "@/components/admin/Flats";
import ResidentFlats from "@/components/resident/Flats";

export default function Flats() {
  if (SESSION.role === "admin") {
    return <AdminFlats />;
  }

  return <ResidentFlats />;
}
