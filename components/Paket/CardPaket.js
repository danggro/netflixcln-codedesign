export default function CardPaket(props) {
  return (
    <div className="bg-[#1F2127] w-4/12 rounded-[30px] text-center py-9 px-6 bg-gradient-to-br from-[3%] via-[48%] to-[97%] from-[#1F2127] hover:via-[#373A43] to-[#1F2127] border border-transparent hover:border-white/70">
      <p className="font-semibold">{props.paket}</p>
      <div className="flex items-center justify-center my-6">
        <h5 className="font-semibold text-[32px] text-[#DB202C]">
          Rp {props.harga}
        </h5>
        <p className="pt-1 text-xs text-white">/bulan</p>
      </div>
      <ul className="space-y-[14px]">{props.children}</ul>
      <button
        className={`px-7 mt-[49px] py-[9px] border border-white font-semibold hover:border-transparent text-lg rounded-[15px] hover:shadow-[0px_5px_25px_0_rgba(192,30,41,0.5)] bg-gradient-to-r hover:from-[#bc0e19] from-[8%] hover:to-[#db202c] to-[92%] `}
      >
        Pilih Paket
      </button>
    </div>
  );
}
