import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppointmentStore = create(
  persist(
    (set) => ({
      appointments: [],

      addAppointment: (appointment) =>
        set((state) => ({
          appointments: [
            ...state.appointments,
            {
              ...appointment,
              id: Date.now(),
            },
          ],
        })),

      updateAppointment: (id, updatedData) =>
        set((state) => ({
          appointments: state.appointments.map((appointment) =>
            appointment.id === id
              ? {
                  ...appointment,
                  ...updatedData,
                }
              : appointment
          ),
        })),

      cancelAppointment: (id) =>
        set((state) => ({
          appointments: state.appointments.filter(
            (appointment) => appointment.id !== id
          ),
        })),
    }),
    {
      name: "medical-appointments",
    }
  )
);

export default useAppointmentStore;