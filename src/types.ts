export type ApplyType = {
  display: boolean;
  title: string;
  text: string;
};

export type TeacherType = {
  id: number;
  name: string;
  experience: string;
  photo?: string;
  message: string;
}

export type PriceOption = {
    title: string;
    subheader?: string;
    price: string;
    description: string[];
    buttonText: string;
    buttonVariant: 'contained' | 'outlined' | 'text';
    buttonColor: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
}

export type ReviewType = {
  id: number;
  name: string;
  stars: string;
  review: string;
  face?: string | null;
}

export type FAQType = {
  question: string;
  answer: string;
}