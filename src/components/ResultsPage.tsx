import React from 'react';
import { Trophy, Medal, Star, TrendingUp, Award, Crown, Target, Calendar } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const topRankers = [
    {
      name: "Ankit Kumar",
      exam: "BSEB 10",
      rank: "84%",
      score: "421/500",
      image: "/ankit.jpg",
      course: "2 Year Integrated Program",
      achievement: ""
    },
     {
      name: "Md Muntazir",
      exam: "BSEB 10",
      rank: "83.6%",
      score: "418/500",
      image: "/muntazir.jpg",
      course: "1 Year Crash Course",
      achievement: ""
    },
      {
      name: "Resha Khatoon",
      exam: "BSEB 10",
      rank: "83% ",
      score: "416/500",
      image: "/apren.jpg",
      course: "2 Year  Program",
      achievement: ""
    },
     {
      name: "Rukhsar Fatima",
      exam: "BSEB",
      rank: "81.2%",
      score: "406/500",
      image: "/rukhsar.jpg",
      course: "2 Year Integrated Program",
      pachievement: "81.2"
    },
    {
      name: "Naaz Perween",
      exam: "JEE Advanced 2024",
      rank: "81%",
      score: "405/500",
      image: "/hijab.jpg",
      course: "2 Year Integrated Program",
      achievement: ""
    },
  
   
     
      
      {
      name: "Sajiya Khatoon",
      exam: "BSEB 10",
      rank: "80%",
      score: "401/500",
      image: "/balloon.jpg",
      course: "2 Year Integrated Program",
      achievement: "Top 50 in India"
    },
  ];

  // const yearlyResults = [
  //   {
  //     year: "2024",
  //     jeeAdvanced: { total: 45, top100: 12, top500: 28 },
  //     neet: { total: 38, top100: 8, top500: 22 },
  //     jeeMain: { total: 156, top100: 34, top1000: 89 }
  //   },
  //   {
  //     year: "2023",
  //     jeeAdvanced: { total: 42, top100: 10, top500: 25 },
  //     neet: { total: 35, top100: 7, top500: 20 },
  //     jeeMain: { total: 142, top100: 31, top1000: 82 }
  //   },
  //   {
  //     year: "2022",
  //     jeeAdvanced: { total: 38, top100: 8, top500: 23 },
  //     neet: { total: 32, top100: 6, top500: 18 },
  //     jeeMain: { total: 128, top100: 28, top1000: 75 }
  //   }
  // ];

  const boardResults = [
    {
      board: "CBSE Class 12th",
      year: "2024",
      above90: 89,
      above95: 34,
      topScore: "98.2%",
      topper: "Meera Singh"
    },
    {
      board: "State Board Class 12th",
      year: "2024",
      above90: 76,
      above95: 28,
      topScore: "97.8%",
      topper: "Arun Verma"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 p-4 rounded-full">
                <Trophy className="h-12 w-12 text-yellow-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Outstanding Results</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our students consistently achieve top ranks in competitive exams, proving our commitment to excellence in education
            </p>
          </div>
        </div>
      </section>

      {/* Top Rankers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rankers 2024</h2>
            <p className="text-xl text-gray-600">Celebrating our star performers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topRankers.map((student, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {student.achievement}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{student.name}</h3>
                    <p className="text-blue-200">{student.course}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      <span className="text-2xl font-bold text-blue-600">{student.rank}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{student.exam}</p>
                      <p className="text-lg font-semibold text-gray-900">{student.score}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <Medal className="h-4 w-4 mr-1" />
                      Top Performer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of our next batch of top rankers and achieve your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button 
              onClick={() => window.history.back()}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Enroll Now
            </button> */}
            <a href='/result.jpg'download>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
             

              Download Brochure
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;