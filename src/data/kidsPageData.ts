import type { FAQType, PriceOption, ReviewType, TeacherType } from '../types';
import face1 from '../assets/faces/face1.jpg';
import face2 from '../assets/faces/face2.jpg';
import face3 from '../assets/faces/face3.jpg';
import face4 from '../assets/faces/face4.jpg';
import face5 from '../assets/faces/face5.jpg';

export const kidsTeachers: TeacherType[] = [
  {
    id: 1,
    name: 'Alice Smith',
    experience: '5 years of teaching experience',
    photo: face1,
    message: 'I love the energy and curiosity kids bring to every lesson! Their genuine excitement when learning something new is incredibly rewarding. Kids are fearless learners who aren\'t afraid to make mistakes. Watching their confidence grow week by week is the best part of my job.',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    experience: '8 years of teaching experience',
    photo: face2,
    message: 'Teaching kids is pure joy because they learn through play and creativity. Their imagination makes every lesson an adventure. Kids have an amazing ability to absorb languages naturally. Seeing them use English in their own unique ways always makes me smile.',
  },
  {
    id: 3,
    name: 'Catherine Lee',
    experience: '6 years of teaching experience',
    photo: face4,
    message: 'What I love most is how quickly kids progress when lessons match their interests. Every child is different, and discovering what excites them is rewarding. Kids are honest and authentic, which creates such a genuine classroom atmosphere. Building their foundation while having fun is a privilege.',
  },
  {
    id: 4,
    name: 'David Brown',
    experience: '10 years of teaching experience',
    photo: face3,
    message: 'Kids remind me why I became a teacher - their enthusiasm is contagious! They celebrate small victories with such genuine happiness. Creating a safe space where kids feel comfortable expressing themselves is fulfilling. Their laughter and curiosity make every teaching day wonderful.',
  },
  {
    id: 5,
    name: 'Eva Green',
    experience: '7 years of teaching experience',
    photo: face5,
    message: 'I love how kids absorb language through songs, games, and stories naturally. Their ability to connect language with real experiences is remarkable. Teaching kids means being part of their growth and development. Seeing them gain confidence to speak English proudly is incredibly gratifying.',
  },
];

export const kidsPricingOptions: PriceOption[] = [
  {
    title: 'Groups',
    subheader: 'Most popular',
    price: '12',
    description: [
      'Interactive group lessons designed specifically for children with games and activities',
      'Group lesson 45 minutes',
      'Access to kid-friendly online learning platform',
      'Progress tracking and fun homework assignments',
      'Small groups matched by age and level',
      'Learning through songs, games, and creative activities',
      'Classes 2 times a week',
    ],
    buttonText: 'Join the group',
    buttonVariant: 'contained',
    buttonColor: 'primary',
  },
  {
    title: 'Personal Kids',
    price: '25',
    description: [
      "One-on-one lessons tailored to your child's interests and learning pace",
      'Individual lesson 40 minutes',
      'Personalized homework and progress reports for parents',
      "Teacher who adapts to your child's personality",
      'Flexible schedule and customized learning materials',
      'Focus on speaking confidence and vocabulary building',
    ],
    buttonText: 'Book a lesson',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Native Kids',
    price: '35',
    description: [
      'Immersive learning with a native speaker through play and natural conversation',
      'Individual lesson 40 minutes',
      'Progress tracking and parent communication',
      'Native speaker with experience teaching children',
      'Authentic pronunciation and cultural learning',
      'Interactive materials and child-centered approach',
      'Natural language acquisition through fun activities',
    ],
    buttonText: 'Try native',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export const kidsReviews: ReviewType[] = [
  { id: 1, name: 'John Doe', stars: '★★★★★', review: 'My daughter loves her English lessons! She looks forward to them every week and her confidence has grown so much.', face: face1 },
  { id: 2, name: 'Sarah Johnson', stars: '★★★★★', review: 'The teachers are wonderful with kids. My son actually asks to practice English at home now, which I never expected!', face: face5 },
  { id: 3, name: 'Michael Chen', stars: '★★★★☆', review: "Great experience overall. My kids are learning through games and songs, so they don't even realize they're studying. Very engaging approach.", face: null },
  { id: 4, name: 'Emily Rodriguez', stars: '★★★★★', review: 'As a parent, I appreciate the progress reports and how patient the teachers are. My shy daughter has really come out of her shell.', face: face3 },
  { id: 5, name: 'David Thompson', stars: '★★★★★', review: "Highly recommend! My son's pronunciation has improved dramatically, and he's not afraid to speak English anymore.", face: null },
  { id: 6, name: 'Lisa Park', stars: '★★★★☆', review: 'The flexible schedule works perfectly for our busy family. The teachers make learning fun and my daughter is always excited for class.', face: face4 },
  { id: 7, name: 'James Wilson', stars: '★★★★★', review: 'Both of my kids are enrolled and they love it. The small group setting means they get plenty of attention and practice speaking.', face: face2 },
  { id: 8, name: 'Amanda Foster', stars: '★★★★★', review: "I've seen such positive changes in my child's attitude toward learning English. The interactive lessons keep him engaged the entire time.", face: null },
  { id: 9, name: 'Ryan Martinez', stars: '★★★★☆', review: 'Good value and quality instruction. My daughter has made real progress in just a few months. The teachers genuinely care about the kids.', face: null },
  { id: 10, name: 'Sophia Anderson', stars: '★★★★★', review: 'My son went from being hesitant to speak English to confidently having conversations. The teachers know how to make kids feel comfortable and encouraged.', face: null },
];

export const kidsFaqQuestions: FAQType[] = [
  {
    question: 'What age group is this program for?',
    answer: 'Our kids program is designed for children ages 5-12. We group students by age and English level to ensure the best learning experience.',
  },
  {
    question: "How long are the kids' lessons?",
    answer: "Group lessons are 45 minutes and individual lessons are 40 minutes. This duration is optimal for maintaining children's attention and engagement.",
  },
  {
    question: 'Do you offer trial lessons for kids?',
    answer: 'Yes! We offer a free trial lesson so your child can meet the teacher and experience our teaching style before committing to a course.',
  },
  {
    question: 'What if my child is shy or has never studied English before?',
    answer: 'Our teachers are experienced in working with shy children and complete beginners. We create a supportive, fun environment where kids feel comfortable making mistakes and learning.',
  },
  {
    question: 'How do you keep kids engaged during online lessons?',
    answer: 'We use interactive games, songs, videos, and visual materials. Lessons include movement activities and hands-on tasks to keep children active and interested.',
  },
  {
    question: 'Will my child have homework?',
    answer: "Yes, but it's fun! Homework includes games, short videos, and creative tasks that typically take 10-15 minutes. We focus on making practice enjoyable.",
  },
  {
    question: "Can I monitor my child's progress?",
    answer: "Absolutely! Parents receive regular progress reports, and you're welcome to observe lessons. We also provide feedback after each class about what was covered.",
  },
  {
    question: "What materials do I need for my child's lessons?",
    answer: 'Just a computer/tablet with stable internet and a quiet space. All learning materials are provided digitally. Occasionally we might suggest simple items like crayons or paper for activities.',
  },
];
