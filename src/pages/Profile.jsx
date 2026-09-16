import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("medical-profile");

    if (!savedProfile) {
      return {
        name: "Mohamed Ibrahim",
        email: "mohamedeprahimblal.com",
        phone: "01027536766",
        dateOfBirth: "25/03/2005",
      };
    }

    try {
      return JSON.parse(savedProfile);
    } catch {
      localStorage.removeItem("medical-profile");

      return {
        name: "Mohamed Ibrahim",
        email: "mohamed@example.com",
        phone: "",
        dateOfBirth: "",
      };
    }
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "medical-profile",
      JSON.stringify(profile)
    );

    setSaved(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-10">
          <p className="text-blue-600 font-bold text-sm tracking-widest mb-3">
            MY PROFILE
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Profile Settings
          </h1>

          <p className="text-gray-500">
            Manage your personal information.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">

          <div className="flex items-center gap-5 mb-10">
            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              {profile.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {profile.name}
              </h2>

              <p className="text-gray-500">
                Patient
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Birth
              </label>

              <input
                type="date"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {saved && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6">
                Profile updated successfully!
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
            >
              Save Changes
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}

export default Profile;