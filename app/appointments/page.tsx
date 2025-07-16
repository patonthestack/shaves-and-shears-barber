import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Appointments() {
  const HIEU_BOOKING_URL = process.env.NEXT_PUBLIC_BOOK_HIEU_URL ?? '/';
  const GINA_BOOKING_URL = process.env.NEXT_PUBLIC_BOOK_GINA_URL ?? '/';

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Book an Appointment</h2>
          <p className="text-lg text-gray-300 mb-8">
            Choose one of our experienced barbers and schedule your appointment.
          </p>

          {/* Barber 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Hieu Nguyen
            </h3>
            <p className="text-gray-300 mb-4">
              {
                "Hieu has over 10 years of experience in providing precision cuts\
              and grooming. Whether you're looking for a classic or modern\
              style, Hieu is your guy."
              }
            </p>
            <Link href={HIEU_BOOKING_URL} passHref target="blank">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-md">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Barber 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Gina
            </h3>
            <p className="text-gray-300 mb-4">
              Gina is a master of both traditional and contemporary styles. Her
              attention to detail and personalized approach make every haircut a
              great experience.
            </p>
            <Link href={GINA_BOOKING_URL} passHref target="blank">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-md btn btn-primary">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
