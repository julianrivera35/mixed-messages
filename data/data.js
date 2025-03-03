const beginnings = [
  "Today, you will",
  "In the next few hours, expect to",
  "A surprising event will make you",
  "You might suddenly",
  "A kind stranger will help you",
  "An unexpected moment will make you",
  "You will discover something that makes you",
  "Someone close to you will inspire you to",
  "A small challenge will push you to",
  "Your intuition will lead you to",
];

const middles = [
  "laugh out loud",
  "find a lost item",
  "meet someone new",
  "have an interesting conversation",
  "receive good news",
  "make an important decision",
  "learn something valuable",
  "feel an overwhelming sense of gratitude",
  "experience a moment of peace",
  "realize how strong you truly are",
];

const endings = [
  "so enjoy the moment!",
  "and it will brighten your day.",
  "which will bring unexpected joy.",
  "so trust the process.",
  "and it will change your perspective.",
  "so embrace it fully.",
  "which will make you appreciate the little things.",
  "so take a deep breath and smile.",
  "and it will be the highlight of your day.",
  "so keep an open mind and heart.",
];


function generate_sentence(beg=beginnings, mid=middles, end=endings){
    beginnings_length = beg.length;
    middles_length = mid.length;
    endings_length = end.length;
    random_begining = Math.floor(Math.random()*beginnings_length);
    random_middle = Math.floor(Math.random()*middles_length);
    random_end = Math.floor(Math.random()*endings_length);
    document.getElementById("message").textContent = beg[random_begining]+' '+ mid[random_middle]+', '+ end[random_end];
}
