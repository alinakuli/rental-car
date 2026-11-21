import CarDetails from "@/components/car/CarDetails/CarDetails";
import { getCarById } from "@/lib/api/cars";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: Promise<{ carId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carId } = await params
  const car = await getCarById(carId)
  return {
    title: `Car: ${car.brand} ${car.model} | RentalCar`,
    description: `Reliable and budget-friendly rentals for any journey.`,
    openGraph: {
      title: `Car: ${car.brand} ${car.model} | RentalCar`,
      description: `Reliable and budget-friendly rentals for any journey.`,
      url: `https://rental-car-xi-six.vercel.app/${car.id}`,
      siteName: 'RentalCar',
      images: [
        {
          url: `${car.img}`,
          width: 1200,
          height: 630,
          alt: `Am image of ${car.brand} ${car.model}`,
        },
      ],
      type: 'article',
    },
  }
}


export default async function CarPage({ params }: Props) {
    const { carId } = await params;
    const car = await getCarById(carId);
    
    if (!car) notFound();
    
    return <CarDetails car={car} />;
};