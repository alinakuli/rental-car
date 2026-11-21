import Hero from "@/components/home/Hero/Hero";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'RentalCar | Find your perfect rental car',
  description: 'Reliable and budget-friendly rentals for any journey.',
  openGraph: {
      title: `RentalCar | Find your perfect rental car`,
      description: 'Reliable and budget-friendly rentals for any journey.',
      url: 'https://rental-car-xi-six.vercel.app/',
      siteName: 'RentalCar',
      images: [
        {
          url: '@/public/images/Banner.png',
          width: 1200,
          height: 630,
          alt: 'Home page image',
        },
      ],
      type: 'article',
    },
};

export default function HomePage() {
  return <Hero />
}
