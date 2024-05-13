import Image from "next/image";
import AboutWelcomeEOcard from "@/components/About/AboutWelcomeEOCard";
import AboutBiayaCard from "@/components/About/AboutBiayaCard";
import { WelcomeEOCardContents, PartnershipImagesContents, BiayaContents } from "@/constants/About/Contents";

export default function AboutPage() {
    return (
        <div className="bg-[#fbfbfb] min-h-screen">
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(/ABOUT-BANNER-HERO.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="mb-5 text-5xl font-bold text-white">About Us</div>
                    </div>
                </div>
            </div>
            <div className="py-[50px] mx-[20px] lg:mx-[100px]">
                <div className="flex flex-col text-center gap-2">
                    <div className="text-[35px] font-bold text-[#002744]">
                        Welcome Event Organizer
                    </div>
                    <div className="text-[#7e7e82] text-[16px]">
                        Solusi sistem pemesanan Tiket event secara online hingga manajemen kunjungan di lokasi.
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 py-[50px]">
                    {WelcomeEOCardContents.map((item, index) => (
                        <AboutWelcomeEOcard key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className="py-[70px] mx-[20px] lg:mx-[100px]">
                <div className="flex flex-col text-center gap-2">
                    <div className="text-[35px] font-bold text-[#002744]">
                        Biaya
                    </div>
                    <div className="text-[#7e7e82] text-[16px]">
                        Berikut ketentuan biaya untuk layanan event ticketing di platform Tiket event
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 py-[50px]">
                    {BiayaContents.map((item, index) => (
                        <AboutBiayaCard key={index} type={item.title} price={item.price} description1={item.description1} description2={item.description2} icon={item.icon} imageBg={item.imageBg} />
                    ))}
                </div>
            </div>
            <div className="py-[70px] mx-[20px] lg:mx-[100px]">
                <div className="flex flex-col text-center gap-2">
                    <div className="text-[35px] font-bold text-[#002744]">
                        Partnership
                    </div>
                    <div className="text-[#7e7e82] text-[16px]">
                        Ada beberapa Partner yang telah bergabung dengan kami. Mulai dari Lokasi Event, Ads & Media
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 py-[50px]">
                    {PartnershipImagesContents.map((item, index) => (
                        <Image key={index} src={item.image} className="w-[200px] h-[200px]" width={1000} height={1000} alt={item.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}