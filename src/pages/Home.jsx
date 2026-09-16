import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-blue-200 font-bold text-sm tracking-widest mb-4">
                YOUR HEALTH, OUR PRIORITY
              </p>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Find the Right Doctor
                <span className="block text-blue-200">
                  for Your Health
                </span>
              </h1>

              <p className="text-blue-100 text-lg leading-8 max-w-xl mb-8">
                Find qualified doctors, explore their profiles,
                and book your appointment easily in just a few clicks.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/doctors"
                  className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
                >
                  Find a Doctor
                </Link>

                <Link
                  to="/my-appointments"
                  className="border border-blue-300 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/10 transition"
                >
                  My Appointments
                </Link>
              </div>
            </div>

            {/* Hero Card */}
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-md">
                
                <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                      🩺
                    </div>

                    <div>
                      <h3 className="font-bold text-xl">
                        Medical Booking
                      </h3>
                      <p className="text-gray-500">
                        Easy & Fast Healthcare
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-sm text-gray-400">
                        Available Doctors
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        30+
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-sm text-gray-400">
                        Easy Booking
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        Book in seconds
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
              WHY MEDIBOOK
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare Made Simple
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything you need to find a doctor and manage your
              appointments from one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
                👨‍⚕️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Find Doctors
              </h3>

              <p className="text-gray-500 leading-7">
                Browse doctors and search by name, specialty,
                or location.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl mb-6">
                📅
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Booking
              </h3>

              <p className="text-gray-500 leading-7">
                Choose your doctor, select a date and time,
                and confirm your appointment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-6">
                💾
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manage Appointments
              </h3>

              <p className="text-gray-500 leading-7">
                View your appointments and cancel them whenever
                you need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-3xl p-10 md:p-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Appointment?
            </h2>

            <p className="text-gray-400 mb-8">
              Find a doctor and book your appointment today.
            </p>

            <Link
              to="/doctors"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Browse Doctors
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;