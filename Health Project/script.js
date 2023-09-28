const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

// Function to change slide automatically every 3 seconds
function autoChangeSlide() {
    setInterval(() => {
        changeSlide('up'); // Change the slide upward
    }, 4000); // 3000 milliseconds (3 seconds)
}

// Start automatic slide change when the page loads
autoChangeSlide();


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// testimonial
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Pooja Mottl',
    position: 'Psychologist',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "“Healthy eating isn’t about counting fat grams, dieting, cleanses and antioxidants; it’s about eating food untouched from the way we find it in nature in a balanced way.”",
  },
  {
    name: 'Germany Kent',
    position: 'Food chef',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      '"Be dedicated to change the way in which people see mental illness at all levels of society. If not for yourself, advocate for those who are struggling in silence.”',
  },
  {
    name: 'Dan Millman',
    position: 'Environment Analyst',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
    '"You don’t have to control your thoughts. You just have to stop letting them control you."',
  },
  {
    name: 'A.J. Materi',
    position: 'Author',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
    '"So many spend their health gaining wealth, and then have to spend their wealth to regain their health."',
  },
  {
    name: 'John Green',
    position: 'Author',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
    '“There is hope, even when your brain tells you there isn’t.”',
  },
  {
    name: 'Sasha Ho',
    position: 'Health Expert',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Glenn Close',
    position: 'Author',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
    '“What mental health needs is more sunlight, more candor, and more unashamed conversation.”',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)