export default function ItemPaket(props) {
  return (
    <li className="flex items-center gap-3">
      {props.checklist ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" fill="#DB202C"></circle>
          <path
            fill="#F0D9DB"
            fillRule="evenodd"
            stroke="#F0D9DB"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.109 6.975a.625.625 0 010 .884l-9.167 9.166a.625.625 0 01-.884 0L3.891 12.86a.625.625 0 01.884-.884L8.5 15.7l8.725-8.725a.625.625 0 01.884 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : (
        <div className="w-6"></div>
      )}
      <p className={`${props.checklist ? "text-white" : "text-[#ABACAF]"}`}>
        {props.children}
      </p>
    </li>
  );
}
