import axios from "axios";

const API_URL = "https://dummyjson.com/users";

const mapUserToDoctor = (user) => ({
  id: user.id,
  name: `Dr. ${user.firstName} ${user.lastName}`,
  specialty: "General Physician",
  experience: `${(user.id % 8) + 3} Years`,
  rating: (4 + (user.id % 10) / 10).toFixed(1),
  location: user.address.city,
  image: `https://i.pravatar.cc/600?img=${(user.id % 70) + 1}`,
});

export const getDoctors = async () => {
  const response = await axios.get(API_URL);

  return response.data.users.map(mapUserToDoctor);
};

export const getDoctorById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return mapUserToDoctor(response.data);
};