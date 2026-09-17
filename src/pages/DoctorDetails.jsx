
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <div className="text-6xl mb-5">👨‍⚕️</div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Doctor Not Found
          </h1>

          <p className="text-gray-500 mb-6">
            {error || "This doctor does not exist."}
          </p>

          <Link
            to="/doctors"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            ← Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/doctors"
          className="inline-flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-800"
        >
          ← Back to Doctors
        </Link>

        {/* Doctor Main Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="bg-blue-50 p-8 md:p-12 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x700/e0f2fe/2563eb?text=Doctor";
                }}
                className="w-full max-w-md h-[420px] object-cover rounded-3xl shadow-sm"
              />
            </div>

            {/* Basic Info */}
            <div className="p-8 md:p-12">

              <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-5">
                {doctor.specialty}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {doctor.name}
              </h1>

              <p className="text-gray-500 leading-7 mb-8">
                {doctor.bio}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-7">
                <div className="text-2xl">⭐</div>

                <div>
                  <p className="font-bold text-gray-900">
                    {doctor.rating} / 5
                  </p>

                  <p className="text-sm text-gray-400">
                    Patient Rating
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-sm text-gray-400 mb-1">
                    Experience
                  </p>

                  <p className="font-bold text-gray-900">
                    {doctor.experience}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-sm text-gray-400 mb-1">
                    Consultation
                  </p>

                  <p className="font-bold text-gray-900">
                    {doctor.fee} EGP
                  </p>
                </div>

              </div>

              {/* Book */}
<Link
  to={"/book-appointment?doctorId=" + doctor.id}
  className="block text-center mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
>
  Book Appointment
</Link>

            </div>
          </div>

          {/* Additional Information */}
          <div className="border-t border-gray-100 p-8 md:p-12">

            <h2 className="text-2xl font-bold text-gray-900 mb-7">
              Doctor Information
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">🎓</div>

                <p className="text-sm text-gray-400 mb-1">
                  Education
                </p>

                <p className="font-semibold text-gray-900">
                  {doctor.education}
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">🏥</div>

                <p className="text-sm text-gray-400 mb-1">
                  Clinic
                </p>

                <p className="font-semibold text-gray-900">
                  {doctor.clinic}
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">📍</div>

                <p className="text-sm text-gray-400 mb-1">
                  Location
                </p>

                <p className="font-semibold text-gray-900">
                  {doctor.location}
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">🕐</div>

                <p className="text-sm text-gray-400 mb-1">
                  Working Hours
                </p>

                <p className="font-semibold text-gray-900">
                  {doctor.workingHours}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default DoctorDetails;
