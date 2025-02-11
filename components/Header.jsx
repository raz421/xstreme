import Avatar from "./Avatear";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Logo />
        <Navbar />
      </div>
      <Avatar />
    </header>
  );
}
