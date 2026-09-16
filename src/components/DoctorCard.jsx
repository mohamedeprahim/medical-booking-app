import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <img
        src={doctor.image}
        alt={doctor.name}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x500/e0f2fe/2563eb?text=Doctor";
        }}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {doctor.name}
        </h3>

        <p className="text-blue-600 font-semibold mb-4">
          {doctor.specialty}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>⭐ {doctor.rating}</span>
          <span>{doctor.experience}</span>
        </div>

        <p className="text-sm text-gray-500 mb-5">
          📍 {doctor.location}
        </p>

        <Link
          to={`/doctors/${doctor.id}`}
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          View Profile
        </Link>

      </div>
    </div>
  );
}

export default DoctorCard;