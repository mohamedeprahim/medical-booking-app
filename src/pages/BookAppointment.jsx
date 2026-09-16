import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getDoctorById } from "../api/doctorApi";
import useAppointmentStore from "../store/appointmentStore";

function BookAppointment() {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get("doctorId");

  const navigate = useNavigate();
  const addAppointment = useAppointmentStore(
    (state) => state.addAppointment
  );

  const [doctor, setDoctor] = useState(null);
  const [loadingDoctor, setLoadingDoctor] = useState(true);
  const [doctorError, setDoctorError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchDoctor = async () => {
      if (!doctorId) {
        setDoctorError("No doctor selected.");
        setLoadingDoctor(false);
        return;
      }

      try {
        setLoadingDoctor(true);
        setDoctorError("");

        const data = await getDoctorById(doctorId);

        setDoctor(data);
      } catch (error) {
        console.error(error);
        setDoctorError("Failed to load doctor information.");
      } finally {
        setLoadingDoctor(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  const onSubmit = (data) => {
    addAppointment({
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      patientName: data.patientName,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      notes: data.notes,
    });

    navigate("/my-appointments");
  };

  if (loadingDoctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (doctorError || !doctor) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Booking Error
          </h1>

          <p className="text-gray-500 mb-6">
            {doctorError || "Doctor not found."}
          </p>

          <button
            onClick={() => navigate("/doctors")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Back to Doctors
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
            BOOK APPOINTMENT
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Book Your Appointment
          </h1>

          <p className="text-gray-500">
            Fill in your information to book an appointment.
          </p>
        </div>

        {/* Doctor Info */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8 flex items-center gap-5">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {doctor.name}
            </h2>

            <p className="text-blue-600 font-semibold">
              {doctor.specialty}
            </p>

            <p className="text-sm text-gray-500">
              📍 {doctor.location}
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8"
        >

          {/* Patient Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Patient Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("patientName", {
                required: "Patient name is required",
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.patientName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.patientName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone number is required",
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Appointment Date
              </label>

              <input
                type="date"
                {...register("date", {
                  required: "Date is required",
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.date && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Appointment Time
              </label>

              <input
                type="time"
                {...register("time", {
                  required: "Time is required",
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.time && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.time.message}
                </p>
              )}
            </div>

          </div>

          {/* Notes */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notes
            </label>

            <textarea
              rows="4"
              placeholder="Any additional notes..."
              {...register("notes")}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
          >
            Confirm Appointment
          </button>

        </form>
      </div>
    </main>
  );
}

export default BookAppointment;