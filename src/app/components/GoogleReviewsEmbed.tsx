import React, { useEffect, useState } from 'react';
import { sportySectionTheme } from '../styles/sportyTheme';



interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}


const GoogleReviewsEmbed: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/google-reviews');
        const data = await res.json();
        if (data.reviews) {
          setReviews(data.reviews);
        } else {
          setError('No reviews found.');
        }
      } catch (err) {
        setError('Failed to fetch reviews.');
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const truncate = (text: string, len = 120) => {
    if (text.length <= len) return text;
    return text.slice(0, len) + '...';
  };

  return (
    <div className="w-full flex flex-col items-center my-8">
      <h2 className="text-2xl font-bold mb-4">Google Reviews</h2>
      {loading && <div>Loading reviews...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {reviews.map((review, idx) => {
          const isLong = review.text.length > 120;
          const isExpanded = expanded[idx];
          return (
            <div
              key={idx}
              className={sportySectionTheme.card.className + ' flex flex-col'}
              style={{ ...sportySectionTheme.card.style, minHeight: 220 }}
            >
              <div className="flex items-center mb-2">
                <img src={review.profile_photo_url} alt={review.author_name} className="w-10 h-10 rounded-full mr-3 border-2 border-red-500" />
                <div>
                  <div className="font-semibold text-white">{review.author_name}</div>
                  <div className="text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                  <div className="text-xs text-gray-300">{review.relative_time_description}</div>
                </div>
              </div>
              <div className="text-white text-sm mt-2 flex-1">
                {isExpanded || !isLong ? review.text : truncate(review.text)}
                {isLong && (
                  <span
                    role="button"
                    tabIndex={0}
                    className="ml-2 text-blue-400 underline cursor-pointer hover:text-blue-600 focus:outline-none text-xs"
                    onClick={() => toggleExpand(idx)}
                    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(idx); }}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoogleReviewsEmbed;
