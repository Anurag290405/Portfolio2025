import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: "Their exceptional development skills transformed our project. The attention to detail and innovative solutions provided exceeded all our expectations.",
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Tech Solutions",
      rating: 5
    },
    {
      text: "A rare combination of technical excellence and creative problem-solving. The final product was exactly what we needed and more.",
      name: "David Park",
      role: "CTO",
      company: "Innovation Labs",
      rating: 5
    },
    {
      text: "Outstanding work ethic and brilliant execution. They brought fresh perspectives that really elevated our project.",
      name: "Maria Garcia",
      role: "Design Director",
      company: "Creative Studio",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="w-full bg-[#1a1f2c] py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#ff4d05] text-sm font-semibold tracking-wider mb-3 uppercase relative inline-block">
          <h2 className="text-4xl font-bold text-white mb-3">Testimonial</h2>
          </h2>
          <h3 className="text-white text-4xl font mb-4">
            What People Say About My Work
          </h3>
          <div className="w-24 h-1 bg-[#ff4d05] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#242935] p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
                    <div className="absolute top-6 right-8 text-[#ff4d05] opacity-20">
                      <Quote size={48} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#ff4d05]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-gradient-to-r from-[#ff4d05] to-[#ff7e05] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <p className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-[#ff4d05] text-sm">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-[#ff4d05] to-[#ff7e05] p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-[#ff4d05] to-[#ff7e05] p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-[#ff4d05] w-6' 
                    : 'bg-gray-600 hover:bg-[#ff4d05]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;