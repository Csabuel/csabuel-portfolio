const pictures = [
  [
    '/Project pict/Project1 pic 1.png',
    '/Project pict/Project1 pic 2.png',
    '/Project pict/Project1 pic 3.png'
  ],
  [
    '/Project pict/Project3 pic 1.png',
    '/Project pict/Project3 pic 2.png',
    '/Project pict/Project3 pic 3.png'
  ],
  [
    '/Project pict/Project2 pic 1.png',
    '/Project pict/Project2 pic 2.png',
    '/Project pict/Project2 pic 3.png'
  ]
];

const prevButtons = document.querySelectorAll('.prevButton');
const nextButtons = document.querySelectorAll('.nextButton');
const images = document.querySelectorAll('.js-pic');

// Add event listeners to each set of buttons
for (let i = 0; i < prevButtons.length; i++) {
  let currentIndex = 0;

  prevButtons[i].addEventListener('click', () => {
    currentIndex = (currentIndex + pictures[i].length - 1) % pictures[i].length;
    images[i].src = pictures[i][currentIndex];
  });

  nextButtons[i].addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pictures[i].length;
    images[i].src = pictures[i][currentIndex];
  });
}
