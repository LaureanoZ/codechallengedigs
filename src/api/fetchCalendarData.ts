import { ChallengeData } from '../app/models/ChallengeData';

export const fetchCalendarData = async (): Promise<ChallengeData> => {
  const response = await fetch('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ChallengeData = await response.json();
  return data;
};