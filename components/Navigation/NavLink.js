import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-6">
      <LinkNav href="#">Movies</LinkNav>
      <LinkNav href="#">TV Shows</LinkNav>
      <LinkNav href="#">New & Popular</LinkNav>
    </ul>
  );
}
