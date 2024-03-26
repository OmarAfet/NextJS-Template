import Navigation from "./Navigation";
import UserAvatar from "./UserAvatar";
import SideMenu from "./SideMenu";
import { CMDK } from "./CMDK";
import Feedback from "../Feedback";
import TemplateMark from "@/icons/TemplateMark";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 p-4 items-center flex justify-between border-b gap-8 bg-background">
      <div className="flex items-center gap-8">
        <SideMenu className="sm:hidden" />
        <TemplateMark size={32} />
        <Navigation className="flex gap-4 max-sm:hidden" />
      </div>
      <div className="flex items-center justify-end gap-4 flex-1">
        <CMDK />
        <Feedback className="max-sm:hidden" />
        <UserAvatar />
      </div>
    </header>
  );
}
