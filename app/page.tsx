import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white pt-32 pb-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Shaves & Shears Barber Shop
          </h1>
          <p className="text-xl mb-6">
            Where style meets precision. Book your appointment today!
          </p>
          <Link
            href="/appointments"
            className="text-lg text-gray-300 hover:text-white"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-md">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            At Shaves & Shears, we are committed to providing the best grooming
            experience with skilled professionals who understand your needs.
            Whether you're looking for a classic cut or a modern style, we’ve
            got you covered.
          </p>
          <p className="text-lg text-gray-300">
            Our barbers have over 10 years of experience, and we ensure
            top-quality service in a relaxed environment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Haircuts</h3>
              <p className="text-gray-400 mb-4">
                Classic and modern cuts tailored to your style.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Shaves</h3>
              <p className="text-gray-400 mb-4">
                Smooth and relaxing straight razor shaves.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Beard Grooming</h3>
              <p className="text-gray-400 mb-4">
                Precision trimming and grooming for a sharp look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-16 bg-gradient-to-r from-gray-900 to-black text-white text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Schedule your appointment today and experience top-tier barbering.
          </p>
          <Link
            href="/appointments"
            className="text-lg text-gray-300 hover:text-white"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-md">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
