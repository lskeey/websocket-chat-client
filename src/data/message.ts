interface Message {
  ID: number;
  Content: string;
  SenderID: number;
  RecipientID: number;
  CreatedAt: string;
}

export const messages: Message[] = [
  {
    ID: 1,
    Content: "Yo, what's good?",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:00:00Z",
  },
  {
    ID: 2,
    Content: "Chillin', you?",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-18T09:02:00Z",
  },
  {
    ID: 3,
    Content: "Man, I'm swamped with work. Got a project that's killing me.",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:05:00Z",
  },
  {
    ID: 4,
    Content: "Oof, that sucks. Holler if you need a hand, dude.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-18T09:07:00Z",
  },
  {
    ID: 5,
    Content: "Thanks, bro! Hoping to wrap it up soon.",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:10:00Z",
  },
  {
    ID: 6,
    Content: "So, got any plans for the weekend?",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:15:00Z",
  },
  {
    ID: 7,
    Content: "Yeah, thinking of hitting up that new burger joint downtown.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-18T09:18:00Z",
  },
  {
    ID: 8,
    Content: "That sounds dope! Count me in!",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:20:00Z",
  },
  {
    ID: 9,
    Content: "Sweet, it'll be a vibe with you there!",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-18T09:22:00Z",
  },
  {
    ID: 10,
    Content: "Cool, I'll let you know for sure later!",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-18T09:25:00Z",
  },
  {
    ID: 11,
    Content:
      "They got some crazy deals going on there, can't wait to check it out.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-19T10:00:00Z",
  },
  {
    ID: 12,
    Content: "Heck yeah, deals make everything better!",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-19T10:05:00Z",
  },
  {
    ID: 13,
    Content: "By the way, how's work going for you?",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-19T10:10:00Z",
  },
  {
    ID: 14,
    Content: "Kinda hectic, got some tight deadlines coming up.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-19T10:12:00Z",
  },
  {
    ID: 15,
    Content: "I feel you. Hope it all goes smooth, man.",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-19T10:15:00Z",
  },
  {
    ID: 16,
    Content: "Appreciate it! Same to you, bro.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-19T10:18:00Z",
  },
  {
    ID: 17,
    Content: "Yo, you tried that new productivity app yet?",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-19T10:20:00Z",
  },
  {
    ID: 18,
    Content: "Nah, been too slammed to mess with it. Looks cool though.",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-19T10:25:00Z",
  },
  {
    ID: 19,
    Content: "I gave it a shot, it's pretty legit for staying on track.",
    SenderID: 1,
    RecipientID: 2,
    CreatedAt: "2023-08-19T10:30:00Z",
  },
  {
    ID: 20,
    Content: "Nice, I'll check it out then. Thanks for the heads-up!",
    SenderID: 2,
    RecipientID: 1,
    CreatedAt: "2023-08-19T10:35:00Z",
  },
];
