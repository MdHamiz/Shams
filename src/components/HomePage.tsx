import React from 'react';
import { Award,  BookOpen, Star, ArrowRight, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';

interface HomePageProps {
  onEnrollClick: () => void;
  onViewResults: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnrollClick, onViewResults }) => {
  const courses = [
    // {
    //   title: "Dled",
    //   description: "Comprehensive preparation for engineering entrance exams",
    //   duration: "2 Years",
    //   students: "500+ Students",
    //   icon: <Target className="h-8 w-8 text-blue-600" />
    // },
    {
      title: "Intermidiate Examination Preperation",
      description: "Especially for Science & Arts",
      duration: "2 Years",
      students: "300+ Students",
      icon: <BookOpen className="h-8 w-8 text-green-600" />
    },

    {
      title: "Board Exam Coaching",
      description: "Class 9th & 10th board exam preparation",
      duration: "1-2 Years",
      students: "800+ Students",
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
     {
      title: "D.Led and B.Ed Enterence preperation ",
      description: "Especially  D.Led and Bed, S.Tet,C.Tet",
      duration: "2 Years",
      students: "300+ Students",
      icon: <BookOpen className="h-8 w-8 text-green-600" />
    },
  ];

  const achievements = [
    { number: "95%", label: "Success Rate" },
    { number: "2000+", label: "Students Trained" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Top Ranks" }
  ];

  const testimonials = [
    {
      name: "Ankit Kumar",
      exam: "BSEB",
      Percentage: "84.6%",
      quote: "The structured approach and personalized attention helped me achieve my dream position."
    },
    {
      name: "Md Muntazir",
      exam: "BSEB",
      Percentage: "83%",
      quote: "Excellent faculty and comprehensive study material made all the difference."
    },
    {
      name: "Resham",
      exam: "BSEB",
     Percentage: "83.6%",
      quote: "The mock tests and doubt clearing sessions were incredibly helpful."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Education is Our
                <span className="text-yellow-400"> Priority</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join thousands of successful students who achieved their dreams with our expert guidance and proven teaching methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onEnrollClick}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={onViewResults}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                >
                  View Results
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30"></div>
                <img
                  src="imranp.jpg "
                  alt="Director - Dr. Rajesh Gupta"
                  className="relative w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl object-top"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg">
                  <p className="font-semibold text-lg">Mr. Imran Khan</p>
                  <p className="text-xs text-gray-600">Director & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Director's Message</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl text-blue-600 mb-4">"</div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                With over 15 years of experience in competitive exam coaching, I have dedicated my life to nurturing young minds and helping them achieve their academic goals. At Excellence Academy, we believe that every student has the potential to excel, and our role is to provide the right guidance, support, and environment to unlock that potential.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6">
                Our success lies not just in the ranks our students achieve, but in the confidence and problem-solving skills they develop along the way. We are committed to maintaining the highest standards of education and continue to evolve our teaching methods to meet the changing needs of competitive exams.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-4 rounded-lg">
                <img
                  src="imranp.jpg"
                  alt="Dr. Rajesh Gupta"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Mr.Imran Khan</p>
                  <p className="text-sm text-gray-600">MA In Geography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-lg text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed for success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{course.duration}</span>
                    <span>{course.students}</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our top performers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.exam}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.Percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to start your journey to success?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+91 8757520843</p>
              <p className="text-blue-100">+91 9311950131</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100"> imranshah7258@gmail.com</p>
               <p className="text-blue-100">  <p className="text-blue-100"> shamsthelearningzone@gmail.com</p></p>
             
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-blue-100">Bagh Kalu Khan, Sadar gali </p>
              <p className="text-blue-100">patna City,  800008</p>
            </div>
          </div>
          
          {/* Interactive Map */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Us Here</h3>
              <p className="text-gray-600">Visit our campus and experience excellence in education</p>
            </div>
            
           <div className="relative bg-gray-100 rounded-xl overflow-hidden" style={{ height: '400px' }}>
 
<div style={{ height: '400px' }}>
  <iframe
    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=25.615379,85.158875`}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Excellence Academy Location"
  ></iframe>
</div>





              
              {/* Map Overlay with Institute Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 p-2 rounded-full mr-3">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">SHAMS</h4>
                    <p className="text-sm text-gray-600">The Learning Zone</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-red-500" />
                    Bagh Kalu Khan,sadar gali
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-3 w-3 mr-2 text-green-500" />
                    8757520843
                  </p>
                </div>
              </div>
              
              {/* Directions Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.app.goo.gl/dgfudGvviioaF7dk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 shadow-lg"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
            
            {/* Additional Location Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600 mb-2">
                  <svg className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                <p className="text-sm text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p className="text-sm text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600 mb-2">
                  <svg className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13h10l-2-13" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                <p className="text-sm text-gray-600">Free parking available</p>
                <p className="text-sm text-gray-600">Two-wheeler & Car parking</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600 mb-2">
                  <svg className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Public Transport</h4>
                <p className="text-sm text-gray-600">Main road near 500 meter </p>
                <p className="text-sm text-gray-600">auto stand: 100m away</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;