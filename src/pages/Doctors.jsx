import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { getDoctors } from "../api/doctorApi";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [location, setLocation] = useState("All");
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

  const specialties = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  const locations = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.location)),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      doctor.name.toLowerCase().includes(searchValue) ||
      doctor.specialty.toLowerCase().includes(searchValue) ||
      doctor.location.toLowerCase().includes(searchValue);

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    const matchesLocation =
      location === "All" || doctor.location === location;

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All");
    setLocation("All");
  };

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
            Search and filter doctors to find the right healthcare professional
            for your needs.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Search */}
            <div className="md:col-span-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Doctors
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by doctor, specialty or location..."
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Specialty */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Specialty
              </label>

              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold transition"
              >
                Clear Filters
              </button>
            </div>
          </div>
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

        {/* Results */}
        {!loading && !error && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredDoctors.length}
                </span>{" "}
                doctor
                {filteredDoctors.length !== 1 ? "s" : ""}
              </p>

              {(search || specialty !== "All" || location !== "All") && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Empty */}
            {filteredDoctors.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <div className="text-5xl mb-5">🔍</div>

                <h2 className="text-2xl font-bold text-gray-800">
                  No Doctors Found
                </h2>

                <p className="text-gray-500 mt-2 mb-6">
                  Try changing your search or filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Clear Filters
                </button>
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