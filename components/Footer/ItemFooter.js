export default function ItemFooter(props) {
  return (
    <div>
      <h5 className="font-medium text-sTitle">{props.title}</h5>
      {props.children}
    </div>
  );
}
