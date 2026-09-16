import { useState } from "react";
import { Link } from "react-router-dom";
import useAppointmentStore from "../store/appointmentStore";

function MyAppointments() {
  const appointments = useAppointmentStore(
    (state) => state.appointments
  );

  const cancelAppointment = useAppointmentStore(
    (state) => state.cancelAppointment
  );

  const updateAppointment = useAppointmentStore(
    (state) => state.updateAppointment
  );

  const [editingId, setEditingId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (confirmed) {
      cancelAppointment(id);
    }
  };

  const handleEdit = (appointment) => {
    setEditingId(appointment.id);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
  };

  const handleUpdate = (id) => {
    if (!newDate || !newTime) {
      alert("Please select both date and time.");
      return;
    }

    updateAppointment(id, {
      date: newDate,
      time: newTime,
    });

    setEditingId(null);
    setNewDate("");
    setNewTime("");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
            MY APPOINTMENTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Your Appointments
          </h1>

          <p className="text-gray-500">
            View and manage your medical appointments.
          </p>
        </div>

        {/* Empty State */}
        {appointments.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-12 text-center">

            <div className="text-6xl mb-6">
              📅
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No Appointments Yet
            </h2>

            <p className="text-gray-500 mb-8">
              You haven't booked any appointments yet.
            </p>

            <Link
              to="/doctors"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition"
            >
              Find a Doctor
            </Link>

          </div>
        ) : (

          <div className="space-y-6">

            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-8"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  {/* Appointment Information */}
                  <div>
                    <p className="text-blue-600 font-semibold mb-2">
                      {appointment.specialty}
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {appointment.doctorName}
                    </h2>

                    <div className="space-y-2 text-gray-600">

                      <p>
                        👤{" "}
                        <span className="font-medium">
                          {appointment.patientName}
                        </span>
                      </p>

                      <p>
                        📅{" "}
                        <span className="font-medium">
                          {appointment.date}
                        </span>
                      </p>

                      <p>
                        🕐{" "}
                        <span className="font-medium">
                          {appointment.time}
                        </span>
                      </p>

                      <p>
                        📧{" "}
                        <span className="font-medium">
                          {appointment.email}
                        </span>
                      </p>

                      <p>
                        📱{" "}
                        <span className="font-medium">
                          {appointment.phone}
                        </span>
                      </p>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 md:min-w-52">

                    <div className="bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-xl text-center font-semibold">
                      Confirmed
                    </div>

                    <button
                      onClick={() => handleEdit(appointment)}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-4 py-3 rounded-xl font-semibold transition"
                    >
                      Reschedule
                    </button>

                    <button
                      onClick={() =>
                        handleCancel(appointment.id)
                      }
                      className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-3 rounded-xl font-semibold transition"
                    >
                      Cancel Appointment
                    </button>

                  </div>

                </div>

                {/* Reschedule Form */}
                {editingId === appointment.id && (
                  <div className="mt-8 pt-8 border-t border-gray-100">

                    <h3 className="text-xl font-bold text-gray-900 mb-5">
                      Reschedule Appointment
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5 mb-5">

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          New Date
                        </label>

                        <input
                          type="date"
                          value={newDate}
                          onChange={(e) =>
                            setNewDate(e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          New Time
                        </label>

                        <input
                          type="time"
                          value={newTime}
                          onChange={(e) =>
                            setNewTime(e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      <button
                        onClick={() =>
                          handleUpdate(appointment.id)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                      >
                        Save Changes
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition"
                      >
                        Cancel
                      </button>

                    </div>

                  </div>
                )}

                {/* Notes */}
                {appointment.notes && (
                  <div className="mt-6 pt-6 border-t border-gray-100">

                    <p className="text-sm text-gray-400 mb-1">
                      Notes
                    </p>

                    <p className="text-gray-600">
                      {appointment.notes}
                    </p>

                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default MyAppointments;