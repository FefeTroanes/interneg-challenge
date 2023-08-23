export interface Response {
  ATO: string,
  ATO_exp: string,
  RTO: string,
  RTO_exp: string,
  user: {
    id: number,
    name: string,
    email: string,
    username: string
  }
}

// {
//   "ATO": "1344|nSUZG4FLqmLocLkn8SZXtyV1GcEsARC9kxSMyTEYle5QyZhpvukAchZsFZpA",
//   "ATO_exp": "2023-08-27 12:18:00",
//   "RTO": "1345|GIcaKbhw1cElwZEyhzSSoYxqsS5g3keg1SGFWmi6HMEV8FHdls4b39y0jpt4",
//   "RTO_exp": "2023-08-23 12:18:00",
//   "user": {
//       "id": 22,
//       "name": "Federico Troanes",
//       "email": "ftroanes@gmail.com",
//       "username": "fede"
//   }
// }