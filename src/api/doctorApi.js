
import axios from "axios";

const API_URL = "https://dummyjson.com/users";

const doctorImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/52.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/50.jpg",
  "https://randomuser.me/api/portraits/men/64.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
];

const doctorData = [
  {
    specialty: "Cardiology",
    experience: "12 Years",
    rating: "4.9",
    fee: 500,
    education: "MD, Cardiology",
    clinic: "Heart Care Clinic",
    workingHours: "10:00 AM - 4:00 PM",
    bio: "Experienced cardiologist specializing in heart health, cardiovascular diseases, and preventive cardiac care.",
  },
  {
    specialty: "Dermatology",
    experience: "9 Years",
    rating: "4.8",
    fee: 400,
    education: "MD, Dermatology",
    clinic: "Skin & Beauty Clinic",
    workingHours: "11:00 AM - 6:00 PM",
    bio: "Dermatology specialist providing professional care for skin, hair, and common dermatological conditions.",
  },
  {
    specialty: "Dentistry",
    experience: "10 Years",
    rating: "4.7",
    fee: 350,
    education: "BDS, Dentistry",
    clinic: "Smile Dental Center",
    workingHours: "2:00 PM - 8:00 PM",
    bio: "Dental specialist focused on preventive care, restorative dentistry, and maintaining healthy smiles.",
  },
  {
    specialty: "Ophthalmology",
    experience: "11 Years",
    rating: "4.9",
    fee: 450,
    education: "MD, Ophthalmology",
    clinic: "Vision Care Center",
    workingHours: "9:00 AM - 3:00 PM",
    bio: "Ophthalmology specialist providing comprehensive eye examinations and professional eye care.",
  },
  {
    specialty: "Neurology",
    experience: "14 Years",
    rating: "4.9",
    fee: 600,
    education: "MD, Neurology",
    clinic: "Neuro Medical Center",
    workingHours: "12:00 PM - 5:00 PM",
    bio: "Neurologist specializing in the evaluation and management of neurological health conditions.",
  },
  {
    specialty: "Pediatrics",
    experience: "8 Years",
    rating: "4.8",
    fee: 350,
    education: "MD, Pediatrics",
    clinic: "Kids Care Clinic",
    workingHours: "4:00 PM - 9:00 PM",
    bio: "Pediatrician providing general healthcare and preventive medical care for children.",
  },
  {
    specialty: "Orthopedics",
    experience: "13 Years",
    rating: "4.8",
    fee: 500,
    education: "MD, Orthopedic Surgery",
    clinic: "Ortho Health Center",
    workingHours: "10:00 AM - 5:00 PM",
    bio: "Orthopedic specialist focusing on bones, joints, muscles, and general musculoskeletal care.",
  },
  {
    specialty: "Internal Medicine",
    experience: "15 Years",
    rating: "4.9",
    fee: 450,
    education: "MD, Internal Medicine",
    clinic: "Medical Care Clinic",
    workingHours: "9:00 AM - 2:00 PM",
    bio: "Internal medicine specialist providing comprehensive adult healthcare and preventive medical services.",
  },
  {
    specialty: "Cardiology",
    experience: "7 Years",
    rating: "4.6",
    fee: 450,
    education: "MD, Cardiology",
    clinic: "Cardio Plus Clinic",
    workingHours: "3:00 PM - 8:00 PM",
    bio: "Cardiology specialist focused on cardiovascular health and preventive heart care.",
  },
  {
    specialty: "Dermatology",
    experience: "10 Years",
    rating: "4.8",
    fee: 400,
    education: "MD, Dermatology",
    clinic: "Derma Care Center",
    workingHours: "12:00 PM - 7:00 PM",
    bio: "Dermatologist specializing in general skin health, hair care, and cosmetic dermatology.",
  },
  {
    specialty: "Dentistry",
    experience: "6 Years",
    rating: "4.7",
    fee: 300,
    education: "BDS, Dentistry",
    clinic: "Bright Smile Clinic",
    workingHours: "1:00 PM - 7:00 PM",
    bio: "Dentist focused on preventive dental care, oral hygiene, and restorative treatments.",
  },
  {
    specialty: "Neurology",
    experience: "12 Years",
    rating: "4.8",
    fee: 550,
    education: "MD, Neurology",
    clinic: "Brain & Nerve Center",
    workingHours: "10:00 AM - 4:00 PM",
    bio: "Neurologist providing professional evaluation and care for neurological health conditions.",
  },
];

const mapUserToDoctor = (user) => {
  const index = (user.id - 1) % doctorData.length;
  const details = doctorData[index];

  return {
    id: user.id,
    name: `Dr. ${user.firstName} ${user.lastName}`,
    specialty: details.specialty,
    experience: details.experience,
    rating: details.rating,
    fee: details.fee,
    education: details.education,
    clinic: details.clinic,
    workingHours: details.workingHours,
    bio: details.bio,
    location: user.address.city,
    image: doctorImages[index % doctorImages.length],
  };
};

export const getDoctors = async () => {
  const response = await axios.get(API_URL);

  return response.data.users.map(mapUserToDoctor);
};

export const getDoctorById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return mapUserToDoctor(response.data);
};

