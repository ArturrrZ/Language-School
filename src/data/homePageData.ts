import type { FAQType, ReviewType, TeacherType } from '../types';
import face1 from '../assets/faces/face1.jpg';
import face2 from '../assets/faces/face2.jpg';
import face3 from '../assets/faces/face3.jpg';
import face4 from '../assets/faces/face4.jpg';
import face5 from '../assets/faces/face5.jpg';

export const reviews: ReviewType[] = [
  { id: 1, name: 'John Doe', stars: '★★★★★', review: 'Great platform! Helped me improve my skills significantly.', face: face1 },
  { id: 2, name: 'Sarah Johnson', stars: '★★★★★', review: 'The interactive lessons and practical exercises made learning enjoyable and effective. I was able to apply what I learned immediately in my projects.', face: face5 },
  { id: 3, name: 'Michael Chen', stars: '★★★★☆', review: 'Excellent resource for students at all levels. The structured curriculum and supportive community helped me stay motivated throughout my learning journey.', face: null },
  { id: 4, name: 'Emily Rodriguez', stars: '★★★★★', review: 'As a complete beginner, I found the step-by-step approach incredibly helpful. The instructors break down complex concepts into digestible pieces that are easy to understand.', face: face3 },
  { id: 5, name: 'David Thompson', stars: '★★★★★', review: 'The quality of content is outstanding. Every course is well-organized and the practice problems really challenge you to think critically and solve real-world problems.', face: null },
  { id: 6, name: 'Lisa Park', stars: '★★★★☆', review: 'I appreciate the flexibility this platform offers. Being able to learn at my own pace while having access to mentors when I need help has been invaluable for my growth.', face: face4 },
  { id: 7, name: 'James Wilson', stars: '★★★★★', review: 'This platform transformed my understanding of programming. The hands-on projects and code reviews from experienced developers helped me build confidence in my abilities.', face: face2 },
  { id: 8, name: 'Amanda Foster', stars: '★★★★★', review: 'The community aspect is what sets this apart. Being able to collaborate with other learners and get feedback on my work accelerated my progress tremendously.', face: null },
  { id: 9, name: 'Ryan Martinez', stars: '★★★★☆', review: 'Great value for the price. The comprehensive curriculum covers everything from basics to advanced topics, making it a one-stop solution for skill development.', face: null },
  { id: 10, name: 'Sophia Anderson', stars: '★★★★★', review: 'I went from knowing nothing about coding to building my own projects in just a few months. The clear explanations and supportive environment made all the difference.', face: null },
];

export const adultTeachers: TeacherType[] = [
  {
    id: 1,
    name: 'Alice Smith',
    experience: '5 years of teaching experience',
    photo: face1,
    message: 'I love helping students achieve their language goals! My approach focuses on building confidence through practice. I create a welcoming atmosphere where mistakes are part of learning. Every student has unique strengths that I help them discover. Together, we make language learning an enjoyable journey.',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    experience: '8 years of teaching experience',
    photo: face2,
    message: 'My passion is to make learning fun and engaging. I use interactive methods to keep students motivated. Real-world conversations are at the heart of my lessons. I believe that enthusiasm is contagious in the classroom. Let\'s explore the language together in exciting ways.',
  },
  {
    id: 3,
    name: 'Catherine Lee',
    experience: '6 years of teaching experience',
    photo: face4,
    message: 'I believe in personalized learning to meet each student\'s needs. Everyone learns at their own pace and style. I adapt my teaching methods to fit individual goals. Building strong foundations is essential for long-term success. Your progress is my top priority.',
  },
  {
    id: 4,
    name: 'David Brown',
    experience: '10 years of teaching experience',
    photo: face3,
    message: 'Creating a supportive environment is key to effective learning. I encourage students to express themselves freely without fear. Patience and understanding guide my teaching philosophy. I celebrate every milestone, no matter how small. Let\'s work together to unlock your full potential.',
  },
  {
    id: 5,
    name: 'Eva Green',
    experience: '7 years of teaching experience',
    photo: face5,
    message: 'I am dedicated to helping students achieve fluency through immersive experiences. Practical application of language skills is my focus. I incorporate cultural insights to enrich the learning process. Consistent practice leads to mastery, and I am here to support that journey. Together, we can reach your language aspirations.',
  },
];

export const questions: FAQType[] = [
  {
    question: 'What is the return policy?',
    answer: 'Our return policy allows returns within 30 days of purchase with a valid receipt.',
  },
  {
    question: 'What age groups do you cater to?',
    answer: 'We offer English courses for students of all ages, from young learners (5+) to adults and professionals.',
  },
  {
    question: 'How long are the lessons?',
    answer: 'Our standard lessons are 50 minutes long, but we also offer 25-minute sessions for younger students or intensive practice.',
  },
  {
    question: 'Do you offer one-on-one or group classes?',
    answer: 'We offer both! You can choose private one-on-one lessons for personalized attention or join small group classes (max 6 students) for interactive learning.',
  },
  {
    question: 'What qualifications do your teachers have?',
    answer: 'All our teachers are native or fluent English speakers with TEFL/TESOL certification and at least 2 years of teaching experience.',
  },
  {
    question: 'Can I choose my class schedule?',
    answer: 'Yes! We offer flexible scheduling 7 days a week. You can book lessons at times that work best for you.',
  },
  {
    question: 'Do you provide learning materials?',
    answer: 'Yes, all learning materials, including textbooks, worksheets, and interactive resources are included in your tuition fee.',
  },
  {
    question: 'How do I track my progress?',
    answer: 'Students receive regular progress reports, and you can access your performance dashboard to track completed lessons, test scores, and improvement areas.',
  },
];
