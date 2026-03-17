export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sphere 1 */}
      <div className="absolute top-20 right-[15%] w-20 h-20 rounded-full bg-gradient-to-br from-sky/30 to-sky/10 animate-float blur-[1px]" />
      {/* Sphere 2 */}
      <div className="absolute top-[40%] left-[8%] w-14 h-14 rounded-full bg-gradient-to-br from-yellow/30 to-lime/10 animate-float-slow" />
      {/* Sphere 3 */}
      <div className="absolute bottom-[20%] right-[10%] w-10 h-10 rounded-full bg-gradient-to-br from-red/20 to-blush/20 animate-float" />
      {/* Ring */}
      <div className="absolute top-[30%] right-[25%] w-32 h-32 rounded-full border-2 border-sky/10 animate-spin-slow" />
      {/* Glass rectangle */}
      <div className="absolute bottom-[30%] left-[15%] w-24 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-float-slow rotate-12" />
      {/* Small dot grid */}
      <div className="absolute top-[60%] right-[30%] grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/10" />
        ))}
      </div>
    </div>
  );
}

export function BackgroundBlobs({ variant = 'default' }) {
  const variants = {
    default: (
      <>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky/10 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow/10 rounded-full blur-[120px] animate-blob [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blush/10 rounded-full blur-[130px] animate-blob [animation-delay:5s]" />
      </>
    ),
    dark: (
      <>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red/8 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky/8 rounded-full blur-[120px] animate-blob [animation-delay:3s]" />
      </>
    ),
    vibrant: (
      <>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-sky/15 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow/15 rounded-full blur-[130px] animate-blob [animation-delay:2s]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-red/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-lime/10 rounded-full blur-[100px] animate-blob [animation-delay:6s]" />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variants[variant]}
    </div>
  );
}
