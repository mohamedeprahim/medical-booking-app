import { useEffect, useState } from "react";

import DoctorCard from "../components/DoctorCard";
import { getDoctors } from "../api/doctorApi";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getDoctors();

        setDoctors(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load doctors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) => {
    const searchValue = search.toLowerCase();

    return (
      doctor.name.toLowerCase().includes(searchValue) ||
      doctor.specialty.toLowerCase().includes(searchValue) ||
      doctor.location.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
            OUR DOCTORS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the Right Doctor
          </h1>

          <p className="text-gray-500 max-w-xl">
            Search and choose the best doctor for your healthcare needs.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by doctor, specialty or location..."
            className="w-full max-w-xl px-5 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <p className="text-red-600 font-semibold">
              {error}
            </p>
          </div>
        )}

        {/* Doctors */}
        {!loading && !error && (
          <>
            <p className="text-gray-500 mb-6">
              Showing {filteredDoctors.length} doctor
              {filteredDoctors.length !== 1 ? "s" : ""}
            </p>

            {filteredDoctors.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  No Doctors Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Try searching for another doctor or specialty.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                  />
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </main>
  );
}

export default Doctors;