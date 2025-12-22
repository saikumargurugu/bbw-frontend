import type { NextApiRequest, NextApiResponse } from 'next';

const PLACE_ID = 'ChIJHQRNu_JHkWsRm2wLIhPdCyk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Google API key not set in environment variables.' });
  }
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.result && data.result.reviews) {
      res.status(200).json({ reviews: data.result.reviews });
    } else {
      res.status(404).json({ error: 'No reviews found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews.' });
  }
}
