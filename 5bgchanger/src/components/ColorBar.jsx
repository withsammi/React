const colors = [
    { name: 'RED', value: 'rgb(239,68,68)', class: 'bg-red-500', shadow: 'shadow-[0_0_10px_4px_rgb(239,68,68)]' },
    { name: 'GREEN', value: 'rgb(34,197,94)', class: 'bg-green-500', shadow: 'shadow-[0_0_10px_4px_rgb(34,197,94)]' },
    { name: 'BLUE', value: 'rgb(59,130,246)', class: 'bg-blue-500', shadow: 'shadow-[0_0_10px_4px_rgb(59,130,246)]' },
    { name: 'YELLOW', value: 'rgb(234,179,8)', class: 'bg-yellow-500', shadow: 'shadow-[0_0_10px_4px_rgb(234,179,8)]' },
    { name: 'SLATE', value: 'rgb(100,116,139)', class: 'bg-slate-500', shadow: 'shadow-[0_0_10px_4px_rgb(100,116,139)]' },
    { name: 'PURPLE', value: 'rgb(168,85,247)', class: 'bg-purple-500', shadow: 'shadow-[0_0_10px_4px_rgb(168,85,247)]' },
    { name: 'ORANGE', value: 'rgb(249,115,22)', class: 'bg-orange-500', shadow: 'shadow-[0_0_10px_4px_rgb(249,115,22)]' },
    { name: 'LIME', value: 'rgb(132,204,22)', class: 'bg-lime-500', shadow: 'shadow-[0_0_10px_4px_rgb(132,204,22)]' },
    { name: 'CYAN', value: 'rgb(6,182,212)', class: 'bg-cyan-500', shadow: 'shadow-[0_0_10px_4px_rgb(6,182,212)]' },
    { name: 'ROSE', value: 'rgb(244,63,94)', class: 'bg-rose-500', shadow: 'shadow-[0_0_10px_4px_rgb(244,63,94)]' },
    { name: 'TEAL', value: 'rgb(13,148,136)', class: 'bg-teal-500', shadow: 'shadow-[0_0_10px_4px_rgb(13,148,136)]' },
    { name: 'INDIGO', value: 'rgb(99,102,241)', class: 'bg-indigo-500', shadow: 'shadow-[0_0_10px_4px_rgb(99,102,241)]' },
    { name: 'PINK', value: 'rgb(236,72,153)', class: 'bg-pink-500', shadow: 'shadow-[0_0_10px_4px_rgb(236,72,153)]' },
    { name: 'AMBER', value: 'rgb(245,158,11)', class: 'bg-amber-500', shadow: 'shadow-[0_0_10px_4px_rgb(245,158,11)]' },
    { name: 'EMERALD', value: 'rgb(16,185,129)', class: 'bg-emerald-500', shadow: 'shadow-[0_0_10px_4px_rgb(16,185,129)]' },
  ];
  
  function ColorBar({ setColor }) {
    return (
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 
        px-5 py-3 border-2 border-gray-300 bg-white/20 backdrop-blur-md 
        rounded-2xl shadow-md transition-all duration-300 overflow-x-auto whitespace-nowrap max-w-[95vw]"
      >
        {colors.map(({ name, value, class: bg, shadow }) => (
          <button
            key={name}
            onClick={() => setColor(value)}
            className={`text-white ${bg} px-4 py-3 rounded-2xl border border-white mx-2 
              hover:${shadow} hover:scale-105 transition-all duration-300 inline-block`}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
  
  export default ColorBar;
  