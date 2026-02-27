import { Link } from 'react-router-dom'

export function Accommodations() {
  return (
    <div className="min-h-screen bg-[#F4F1ED] flex flex-col items-center justify-start ">
      <h1 className="text-[#623E2A] text-5xl tracking-widest text-center leading-tight mt-12 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
        Accommodations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-4xl">

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center ">
            <img src="/images/BedImages/Deluxe-room.jpg" alt="" className="w-full h-48 object-contain" />
          </div>
          <div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 4 adults | 2 children below 7</p>
            <h1 className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>Deluxe Room</h1>
            <p className="text-xs font-medium text-[#623E2A]" >From $359 a night</p>
          </div>
        </div>

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center ">
            <img src="/images/BedImages/Deluxe-sea-view.jpg" alt="" className="w-full h-48 object-contain" />
          </div>
          <div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 2 adults | 1 child below 7</p>
            <h1 className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>Deluxe Sea View</h1>
            <p className="text-xs font-medium text-[#623E2A]" >From $459 a night</p>
          </div>
        </div>

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center">
            <img src="/images/BedImages/premium-room.jpg" alt="" className="w-full h-48 object-contain" />
          </div>
          <div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 2 adults | 1 children below 7</p>
            <h1 className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>Premium City View</h1>
            <p className="text-xs font-medium text-[#623E2A]" >From $559 a night</p>
          </div>
        </div>

        {/* second row */}

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center ">
            <img src="/images/BedImages/family-suite-final.jpg" alt="" className="w-full h-48 object-contain" />
          </div>
          <div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 4 adults | 2 children below 7</p>
            <h1 className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>The Grand Family Suite</h1>
            <p className="text-xs font-medium text-[#623E2A]" >From $759 a night</p>
          </div>
        </div>

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center ">
            <img src="/images/BedImages/Suite-room2.jpg" alt="" className="w-full h-48 object-contain" />
          </div>
          <div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 2 adults | 2 children below 7</p>
            <h1 className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>Executive Suite</h1>
            <p className="text-xs font-medium text-[#623E2A]" >From $859 a night</p>
          </div>
        </div>

        <div className="bg-transparent  shadow-lg">
          <div className="flex justify-center">
            <Link to="/Penthouse"><img src="/images/BedImages/penthouse5.jpg" alt="" className="w-full h-48 object-contain" /></Link>
          </div>
          <Link to="/Penthouse"><div className="outline-1 outline-[#623E2A] p-4 mt-2">
            <p className="text-xs font-medium text-[#623E2A]"> 4 adults</p>
            <button className="text-[#623E2A] text-lg font-medium mt-4 p-2 " style={{ fontFamily: 'Montserrat, sans-serif' }}>The Grand Penthouse</button>
            <p className="text-xs font-medium text-[#623E2A]" >From $1259 a night</p>
          </div></Link>
        </div>
      </div>
    </div>
  );
}
