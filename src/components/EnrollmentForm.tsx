import React, { useState } from "react";

interface EnrollmentFormProps {
  onBack: () => void; // Function to go back to home
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    studentClass: "",
    phone: "",
    address: "",
    parentName: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    for (let key in formData) {
      if (!formData[key as keyof typeof formData].trim()) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch("https://shams-backend-ajrd.onrender.com/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Enrollment submitted successfully!");
        setFormData({
          name: "",
          school: "",
          studentClass: "",
          phone: "",
          address: "",
          parentName: "",
        });
        onBack(); // Navigate back to home
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Coaching Enrollment Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="school"
            placeholder="School"
            value={formData.school}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="studentClass"
            placeholder="Class"
            value={formData.studentClass}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="parentName"
            placeholder="Parent's Name"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              {loading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
