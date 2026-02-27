import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <div className="relative w-full h-screen flex justify-center">
            {/* Hero Image */}
            <img src="/images/resort-image.jpg" alt="Hero"
                className="absolute inset-0 w-full h-full object-cover" />

            {/* Text Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-white text-xl font-bold tracking-widest py-25 mb-30" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.3em' }}>
                    WELCOME TO
                </h1>
                <h1 className="text-white text-8xl mb-2" style={{ fontFamily: 'Great Vibes, cursive' }}>
                    The Crystal
                </h1>
                <h1 className="text-white text-2xl font-medium ml-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    RESORT & SPA HOTEL
                </h1>

                <div className="flex gap-4 justify-center mt-20">
                    <Link to="/learn-more">
                        <button className="bg-white text-xs font-bold text-black px-8 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            LEARN MORE
                        </button>
                    </Link>

                    <Link to="/accommodations">
                        <button className="bg-white text-xs font-bold text-black px-8 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            ACCOMMODATIONS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
