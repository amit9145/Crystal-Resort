export function LearnMore() {
  return (
    <div className="min-h-screen bg-[#623E2A] flex flex-col items-center justify-center ">
      <h1 className="text-white text-5xl tracking-widest font-semibold text-center leading-tight mt-12 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
        Classic crystal meets <br /> modern elegance
      </h1>
      <div className="m-8">
        <img src="/images/BedImages/bed2.avif" alt="" className="w-60 h-90 object-cover mx-auto" />
        <div className="mt-15 mb-8">
          <h1 className="text-white text-xl tracking-[0.3em] font-semibold pl-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            IN THE HEART OF THE CITY
          </h1>
        </div>
      </div>

      <div
        className="min-h-screen min-w-screen bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/images/ResortImages/garden.jpg')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">

          <div className="bg-transparent outline-2 outline-white pt-15 pb-20 pl-10 pr-10 shadow-lg">
            <div className="flex justify-center ">
              <img src="/images/trophy.png" alt="" className="w-30 h-34 object-contain" />
            </div>
            <p className="text-white text-xl mt-5 p-3 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>2030 Hospitality Excellence Awardee</p>
          </div>

          <div className="bg-transparent outline-2 outline-white p-6 shadow-lg">
            <div className="flex justify-center ">
              <img src="/images/awards.png" alt="" className="w-40 h-44 object-contain" />
            </div>
            <p className="text-white text-xl mt-5 p-3 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Travelers' Choice 2030</p>
          </div>

          <div className="bg-transparent outline-2 outline-white p-6  shadow-lg">
            <div className="flex justify-center">
              <img src="/images/suitcase-2.png" alt="" className="w-38 h-41 object-contain" />
            </div>
            <p className="text-white text-xl mt-5 p-3 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ranked no.2 in Urban Journal's Top City Hotels</p>
          </div>
        </div>

      </div>
      <div className="min-h-screen min-w-screen bg-[#F4F1ED] flex flex-col items-center justify-center ">
        <h1 className="text-5xl tracking-widest text-center leading-tight mt-12 mb-8 text-[#623E2A]" style={{ fontFamily: 'Playfair Display, serif' }}>
          Welcome to your luxurious home <br />away from home </h1>
        <div className="m-8">
          <img src="/images/waterpool.jpg" alt="" className="w-50 h-80 object-cover mx-auto" />
          <div className="mt-15 mb-8">
            <p className="text-[#623E2A] text-m text-center font-semibold " style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About the hotel. Convince your prospective clients to choose you and your offerings by highlighting 
              the qualities that set you <br /> apart from the competition. Your audience is already on your website, 
              so push a little bit harder to seal the deal!
            </p>
            
          </div>
          
          
        </div>
        <div className="relative w-full h-screen flex justify-center">
            <img src="/images/women-in-resort2.jpg" alt="Hero"
                className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 text-center justify-end flex flex-col">
                <h1 className="text-white text-8xl mb-2" style={{ fontFamily: 'Great Vibes, cursive' }}>
                    The Crystal
                </h1>
                <h1 className="text-white text-2xl font-medium ml-10 mb-15" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    RESORT & SPA HOTEL
                </h1> </div>
                 </div>
        
      </div>


    </div>
  );
}
