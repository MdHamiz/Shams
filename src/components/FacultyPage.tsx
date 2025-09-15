import React from 'react';
import {  BookOpen, Star,Users, Crown } from 'lucide-react';

const FacultyPage: React.FC = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Mr. Saman Abbas",
      position: " Senior Mathematics Faculty",
      specialization: "Advanced Mathematics",
      experience: "15+ Years",
      education: "Bachelor in Mathematics",
      image: "/sona.jpg",
      achievements: [
        "WOrk Experience in Patna University",
         
        "Guided 500+ students to Success"
      ],
      subjects: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry"],
      rating: 4.9,
      studentsGuided: 500,
      topRanks: 45,
      featured: true
    },
     {
      id: 4,
      name: "Ms. Gulafshan ",
      position: "Biology Faculty  ",
      specialization: " Biology & Organic Chemistry",
      experience: "7+ Years",
      education: "B.Sc, B.Ed  ",
      image: "/bio.jpg",
      achievements: [
        " Biology Expert",
        "Specialized  Organic Chemistry",
        "High success rate "
      ],
      subjects: ["Botany", "Zoology", "Organic Chemistry", "Genetics"],
      rating: 4.8,
      studentsGuided: 280,
      topRanks: 25,
      featured: true
    },
    {
      id: 2,
      name: "Er. MD  Sameer",
      position: "Senior Physics Faculty",
      specialization: "Physics, JEE & NEET",
      experience: "5+ Years",
      education: "B.Tech in Mechanical",
      image: "/sameer.jpg",
      achievements: [
        "Expert in Modern Physics",
         "experience in mechanical engineering"
      ],
      subjects: ["Mechanics", "Thermodynamics", "Optics", "Modern Physics"],
      rating: 4.8,
      studentsGuided: 380,
      topRanks: 32,
      featured: true
    },
    {
      id: 3,
      name: "Mr. Sahil Mehta",
      position: "Senior Chemistry Faculty",
      specialization: "Organic & Inorganic Chemistry",
      experience: "5+ Years",
      education: "Bachelore in computer Application",
      image: "/sahil.jpg",
      achievements: [
        "Former Researcher",
        "Expert in Organic Synthesis",
        "Developed innovative teaching methods"
      ],
      subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
      rating: 4.7,
      studentsGuided: 420,
      topRanks: 38,
      featured: true
    },
   
    {
      id: 5,
      name: "Mr. Md Junaid",
      position: "Accounts & Buisness Studies",
      specialization: "Accounts & Buisness Studies ",
      experience: "9+ Years",
      education: "Masters inAccounts",
      image: "/junaid.jpg",
      achievements: [
        " Buisness Expert",
        "Innovative problem-solving techniques",
        "Student-friendly teaching approach"
      ],
      subjects: ["Accounts", "Statics", "Probability"],
      rating: 4.6,
      studentsGuided: 350,
      topRanks: 28,
      featured: true
    },
    {
      id: 6,
      name: "Mr. Faizan",
      position: "Urdu Faculty",
      specialization: "Urdu Language",
      experience: "7+ Years",
      education: "Double Masters in  Urdu, (Nalanda University, Patliputra University) ",
      
      image: "/faizan.jpg",
      achievements: [
        "Urdu Researcher",
        "Expert in Gazal , Dastan and Afshana ",
        "Interactive teaching methodology"
      ],
      subjects: ["Urdu ", "Dastan", "Afshana", ],
      rating: 4.7,
      studentsGuided: 290,
      topRanks: 22,
      featured: true
    },
      {
      id: 6,
      name: "Mr. Salman Khan",
      position: "English & Hindi",
      specialization: " English & Hindi",
      experience: "7+ Years",
      education: "Bachelore in English,  Delhi University",
      image: "/salman.jpg",
      achievements: [
        "  English spokesman",
        "Expert in  verbal ability",
        "Interactive teaching methodology"
      ],
      subjects: ["English", "Hindi", "English Grammar" ],
      rating: 4.7,
      studentsGuided: 290,
      topRanks: 22,
      featured: true
    },
      {
      id: 6,
      name: "Er. Ravindra ",
      position: "Science Faculty",
      specialization: "Physics and Chemistry",
      experience: "14+ Years",
      education: "Bachelor in Technology Mechanical",
      image: "/revindra.jpg",
      achievements: [
        "Applied Physics Researcher",
        "Expert in Numerical Problems",
        "Interactive teaching methodology"
      ],
      subjects: ["Mechanics", "Waves", "Electricity", "Magnetism"],
      rating: 4.7,
      studentsGuided: 290,
      topRanks: 22,
      featured: true
    },
     {
      id: 6,
      name: "Dr. Deepak Datta",
      position: "Biology Faculty",
      specialization: "Applied Biology",
      experience: "10+ Years",
      education: "MBBS , from NMCH",
      image: "/deepak.jpg",
      achievements: [
        "Applied Biology Researcher",
        "Expert in medical ",
        "Interactive teaching methodology"
      ],
      subjects: ["Biology", "Human atonomy"],
      rating: 4.7,
      studentsGuided: 290,
      topRanks: 22,
      featured: true
    }
  ];

  const departmentStats = [
    { department: "Mathematics", faculty: 4, students: 800, successRate: "94%" },
    { department: "Physics", faculty: 3, students: 650, successRate: "92%" },
    { department: "Chemistry", faculty: 3, students: 720, successRate: "91%" },
    { department: "Biology", faculty: 2, students: 400, successRate: "89%" }
  ];

  const testimonials = [
    {
      student: "Ankit Kumar",
      //rank: "",
      teacher: "Mr.Saman Abbas ",
      quote: "Sir's teaching methodology made complex calculus problems seem simple. His dedication is unmatched."
    },
    {
      student: "Naaz Perween",
      //rank: "",
      teacher: "Ms.Gulafshan",
      quote: "Ma'am's biology classes were so engaging. She made every concept crystal clear with practical examples."
    },
    {
      student: "Rukshar Fatima",
      //rank: "",
      teacher: "Er.Md Sameer",
      quote: "Physics became my favorite subject after joining Dr. Sharma's classes. Her explanations are phenomenal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <Users className="h-12 w-12 text-yellow-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Our Expert Faculty</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our distinguished team of educators who are committed to your success and academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Star Faculty</h2>
            <p className="text-xl text-gray-600">Leading experts in their respective fields</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {facultyMembers.filter(faculty => faculty.featured).map((faculty) => (
              <div key={faculty.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative mx-auto mb-8  overflow-hidden flex items-center justify-center">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="h-4 w-4 mr-1" />
                    Star Faculty
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{faculty.name}</h3>
                    <p className="text-blue-200">{faculty.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(faculty.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{faculty.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{faculty.experience}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2"><strong>Specialization:</strong> {faculty.specialization}</p>
                    <p className="text-gray-600 mb-2"><strong>Education:</strong> {faculty.education}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {faculty.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{faculty.studentsGuided}+</p>
                      <p className="text-xs text-gray-600">Students Guided</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{faculty.topRanks}</p>
                      <p className="text-xs text-gray-600">Top Ranks</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{faculty.subjects.length}</p>
                      <p className="text-xs text-gray-600">Subjects</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {faculty.subjects.slice(0, 3).map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {subject}
                      </span>
                    ))}
                    {faculty.subjects.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{faculty.subjects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Faculty Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Faculty Team</h2>
            <p className="text-xl text-gray-600">Experienced educators dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <div key={faculty.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="flex items-center p-6">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{faculty.position}</p>
                    <div className="flex items-center">
                      <div className="flex items-center space-x-1 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(faculty.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{faculty.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-lg font-bold text-blue-600">{faculty.studentsGuided}+</p>
                      <p className="text-xs text-gray-600">Students</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-lg font-bold text-green-600">{faculty.topRanks}</p>
                      <p className="text-xs text-gray-600">Top Ranks</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><strong>Specialization:</strong></p>
                    <p className="text-sm text-gray-700">{faculty.specialization}</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Overview</h2>
            <p className="text-xl text-gray-600">Our strong academic departments and their achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentStats.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{dept.department}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Faculty Members:</span>
                    <span className="font-semibold text-gray-900">{dept.faculty}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold text-gray-900">{dept.students}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-green-600">{dept.successRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Testimonials about our exceptional faculty</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.student}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.rank}</p>
                  <p className="text-sm text-gray-600">About: {testimonial.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Learn from the Best</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our institute and get mentored by industry experts and experienced educators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Meet Our Faculty
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule a Demo Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;