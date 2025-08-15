import React from 'react';
import { Calendar, Clock, MapPin, Users, Camera, Award, BookOpen, Mic, Trophy, Star } from 'lucide-react';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: " Mock Test Series Launch",
      date: "2025-08-11",
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Launch of comprehensive mock test series for Mathematics & Advanced with detailed analysis and performance tracking.",
      image: "/test1.jpg",
      category: "Academic",
      attendees: 200,
      featured: true
    },
    {
      id: 2,
      title: "Teacher Achievment",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Conference Hall",
      description: "Interactive session with Teachers to discuss student progress, upcoming challenges, and strategic planning for competitive exams.",
      image: " /app.jpg",
      category: "Meeting",
      attendees: 50,
      featured: false
    },
    {
      id: 3,
      title: "Career Guidance Seminar",
      date: "2024-12-20",
      time: "11:00 AM",
      location: "Main Auditorium",
      description: "Expert guidance on career opportunities  fields, featuring successful alumni and industry professionals.",
      image: "/carrer.jpg",
      category: "Seminar",
      attendees: 300,
      featured: true
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Annual Excellence Awards 2024",
      date: "2024-01-15",
      description: "Celebrating our top performers and their outstanding achievements in Mock test examinations.",
      image: "prize.jpg",
      highlights: ["50+ students awarded", "Top rankers felicitated", "Scholarship announcements"],
      gallery: [
        "/prize2.jpg",
        "/prize4.jpg",
         
     
      ]
    },
    {
      id: 5,
      title: "Science Exhibition 2023",
      date: "2023-12-10",
      description: "Students showcased innovative projects and experiments, demonstrating practical applications of theoretical concepts.",
      image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["50+ projects displayed", "Interactive demonstrations", "Industry expert judges"],
      gallery: [
        "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300"
      ]
    },
    {
      id: 6,
      title: "Motivational Workshop",
      date: "2023-11-20",
      description: "Inspiring session on maintaining motivation and managing exam stress, conducted  ",
      image: "youth.jpg",
      highlights: ["Stress management techniques", "Goal setting strategies", "Peer interaction sessions"],
      gallery: [
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=300"
      ]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <Calendar className="h-12 w-12 text-yellow-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and activities designed to enhance your learning experience
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting upcoming activities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
                {event.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2">
                    <span className="text-sm font-semibold flex items-center justify-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured Event
                    </span>
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{event.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      {event.attendees} Expected Attendees
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events Gallery</h2>
            <p className="text-xl text-gray-600">Memorable moments from our recent activities</p>
          </div>
          
          <div className="space-y-12">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Camera className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                        <p className="text-gray-500">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Photo Gallery:</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {event.gallery.map((photo, index) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`${event.title} photo ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Categories</h2>
            <p className="text-xl text-gray-600">Various types of events we organize throughout the year</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Events</h3>
              <p className="text-gray-600">Mock tests, workshops, and academic competitions</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seminars</h3>
              <p className="text-gray-600">Career guidance and motivational sessions</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Ceremonies</h3>
              <p className="text-gray-600">Celebrating achievements and excellence</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Events</h3>
              <p className="text-gray-600">Parent meetings and community gatherings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;