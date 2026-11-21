import CatalogView from "@/components/catalog/CatalogView/CatalogView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Catalog | RentalCar',
  description: 'Reliable and budget-friendly rentals for any journey.',
  openGraph: {
      title: `Catalog | Find your perfect rental car`,
      description: 'Reliable and budget-friendly rentals for any journey.',
      url: 'https://rental-car-xi-six.vercel.app/',
      siteName: 'RentalCar',
      images: [
        {
          url: '@/public/images/Banner.png',
          width: 1200,
          height: 630,
          alt: 'Image of a car',
        },
      ],
      type: 'article',
    },
};

export default function Catalog() {

    return <CatalogView />
}