import { FaGlobe, FaChartPie, FaChartBar, FaHeadset, FaQrcode, FaHandshake } from "react-icons/fa";
import { FaHandHoldingDollar, FaCircleDollarToSlot } from "react-icons/fa6";

export const WelcomeEOCardContents = [
    {
        title: 'Tiket Online',
        description: 'Jual dan monitoring tiket yang kamu jual, kapan saja dan di mana saja.',
        icon: <FaGlobe size={28} className="text-white" />
    },
    {
        title: 'Manage Event',
        description: 'Manage Event kamu dengan admin dashboard untuk setiap Organizer.',
        icon: <FaChartPie size={28} className="text-white" />
    },
    {
        title: 'Report Penjualan',
        description: 'Report penjualan tiket event kamu secara real time.',
        icon: <FaChartBar size={28} className="text-white" />
    },
    {
        title: 'Biaya Rendah',
        description: 'Sekarang kamu bisa Withdraw secara otomatis hanya dalam waktu 1 hari kerja.',
        icon: <FaHandHoldingDollar size={28} className="text-white" />
    },
    {
        title: 'Tiket Check-in',
        description: 'Verifikasi secara akurat melalui sistem yang kompatibel dengan kebutuhan anda.',
        icon: <FaQrcode size={28} className="text-white" />
    },
    {
        title: 'Layanan Tiket',
        description: 'Customer Service tersedia untuk memastikan kenyamanan transaksi anda.',
        icon: <FaHeadset size={28} className="text-white" />
    },
]

export const BiayaContents = [
    {
        title: 'Event Tidak Berbayar',
        price: "0",
        description1: 'Komisi 0%',
        description2: 'Gratis',
        icon: <FaHandshake size={28} className="text-white" />,
        imageBg: "[#fe3b3b]"
    },
    {
        title: 'Event Berbayar',
        price: "2.500",
        description1: 'Harga tiket ≥ IDR 100.000',
        description2: 'Fee 2.5% per tiket',
        icon: <FaCircleDollarToSlot size={28} className="text-white" />,
        imageBg: "[#fecc25]"
    },
]

export const PartnershipImagesContents = [
    {
        image: "/DELVA-DIGITAL.jpg",
        alt: "Delva-Digital"
    },
    {
        image: "/WARNA-WARNI.jpg",
        alt: "Warna-warni"
    },
    {
        image: "/JATIM-EXPO.jpg",
        alt: "Jatim-Expo"
    },
    {
        image: "/KONSER-JATIM.jpg",
        alt: "Konser-Jatim"
    },
    {
        image: "/JEC.jpg",
        alt: "JEC"
    }
]