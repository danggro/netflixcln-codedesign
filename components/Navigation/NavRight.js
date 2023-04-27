import Button from "../Button";

export default function NavRight() {
  return (
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-2">
        <p className="text-lg font-medium">ID</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="10"
          fill="none"
          viewBox="0 0 19 10"
        >
          <path
            stroke="#FEF4F4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l8.5 8L18 1"
          ></path>
        </svg>
      </button>
      <Button>Masuk</Button>
    </div>
  );
}
