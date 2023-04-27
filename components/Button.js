export default function Button(props) {
  return (
    <button
      className={`px-7 py-[9px] hover:opacity-75 font-semibold bg-button text-lg rounded-[15px]`}
    >
      {props.children}
    </button>
  );
}
