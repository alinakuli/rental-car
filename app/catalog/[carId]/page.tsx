import CarDetails from "@/components/car/CarDetails/CarDetails";
import { getCarById } from "@/lib/api/cars";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ carId: string }>;
};

export default async function CarPage({ params }: Props) {
    const { carId } = await params;
    const car = await getCarById(carId);
    
    if (!car) notFound();
    
    return <CarDetails car={car} />;
};