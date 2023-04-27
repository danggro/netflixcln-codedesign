export default function CardServices(props) {
  return (
    <div className="p-6 bg-[#1F2127] rounded-[30px] w-4/12">
      {props.icon}
      <h4 className="mt-3 mb-2 font-medium text-sTitle">{props.title}</h4>
      <p className="font-light text-detail text-secondary -tracking-[0.015em]">
        {props.desc}
      </p>
    </div>
  );
}
