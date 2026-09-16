import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDoctorById } from "../api/doctorApi";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getDoctorById(id);

        setDoctor(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load doctor.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Doctor Not Found
          </h1>

          <p className="text-gray-500 mb-5">
            {error || "This doctor does not exist."}
          </p>

          <Link
            to="/doctors"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            ← Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <Link
          to="/doctors"
          className="inline-flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-800"
        >
          ← Back to Doctors
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Doctor Image */}
            <div className="bg-blue-50 p-8 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full max-w-md h-96 object-cover rounded-2xl"
              />
            </div>

            {/* Doctor Information */}
            <div className="p-8 md:p-12">

              <p className="text-blue-600 font-semibold mb-3">
                {doctor.specialty}
              </p>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {doctor.name}
              </h1>

              <div className="space-y-5 text-gray-600">

                <div>
                  <p className="text-sm text-gray-400">
                    Rating
                  </p>

                  <p className="font-semibold text-gray-900">
                    ⭐ {doctor.rating} / 5
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Experience
                  </p>

                  <p className="font-semibold text-gray-900">
                    {doctor.experience}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="font-semibold text-gray-900">
                    📍 {doctor.location}
                  </p>
                </div>

              </div>

              <Link
                to={`/book-appointment?doctorId=${doctor.id}`}
                className="block text-center mt-10 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition"
              >
                Book Appointment
              </Link>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DoctorDetails;