import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromotionalTicker = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    "Build with ❤️ by Hamza Zaidi",
    "💡 Tip: Practice speaking for 15 minutes daily to improve fluency",
    "📚 Tip: Reading newspapers daily enhances vocabulary for all tests",
    "✍️ Tip: Time management is key - practice with actual test timers",
    "🎧 Tip: Listen to English podcasts to improve listening skills",
    "📝 Tip: Write essays regularly to boost your writing band score",
    "👥 Tip: Join study groups for collaborative learning and motivation",
    "🎥 Tip: Watch English Movies to learn to speak good English",
    "Follow us on Social Media @ieltspathways for daily tips and updates!",
    "Visit our website blogs for in-depth articles on IELTS, TOEFL, and PTE preparation!",
    "Build with ❤️ by Hamza Zaidi"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tips.length]);

  useEffect(() => {
    const closed = localStorage.getItem('ticker-closed');
    if (closed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const closeTicker = () => {
    setIsVisible(false);
    localStorage.setItem('ticker-closed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary select-none text-primary-foreground overflow-hidden">
      <div className="relative py-2">
        {/* Moving promotional text */}
        <div className="flex animate-marquee whitespace-nowrap text-yellow-300">
          <span className="mx-8 text-sm font-medium">
            🎉 LIMITED TIME OFFER: 20% OFF on ALL Courses - IELTS, TOEFL & PTE! Use Code: <span className='cursor-pointer select-none font-semibold hover:text-[#7494ec]'>SAVE20</span>
          </span>
          <span className="mx-8 text-sm font-medium">
            {tips[currentTipIndex]}
          </span>
          <span className="mx-8 text-sm font-medium">
            🎉 LIMITED TIME OFFER: 20% OFF on ALL Courses - IELTS, TOEFL & PTE! Use Code: <span className='cursor-pointer select-none font-semibold hover:text-[#7494ec]'>SAVE20</span>
          </span>
          <span className="mx-8 text-sm font-medium">
            {tips[currentTipIndex]}
          </span>
        </div>
        
        {/* Close button */}
        <button
          onClick={closeTicker}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-foreground hover:text-primary-foreground/80 transition-colors transition-all duration-300 hover:bg-primary focus:outline-none"
        >
          <X className="h-5 w-5 font-bold text-black bg-white/80 hover:bg-white rounded-full shadow-lg border-none" />
        </button>
      </div>
    </div>
  );
};

export default PromotionalTicker;