export interface Task {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  price: number;
  location: string;
  deadline: string;
  description: string;
  status: 'open' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface Category {
  name: string;
  subCategories: string[];
}

export const categories: Category[] = [
  {
    name: "Health and Wellness",
    subCategories: ["Fitness Training", "Nutrition Counseling", "Mental Health", "Yoga", "Massage Therapy"]
  },
  {
    name: "Academic",
    subCategories: ["Tutoring", "Essay Writing", "Research", "Presentations", "Exam Prep"]
  },
  {
    name: "Personal Services",
    subCategories: ["Laundry", "Grocery Shopping", "Errands", "Pet Care", "Plant Care"]
  },
  {
    name: "Technology",
    subCategories: ["Tech Support", "Software Help", "Web Development", "App Development", "Digital Marketing"]
  },
  {
    name: "Creative",
    subCategories: ["Graphic Design", "Video Editing", "Music Production", "Content Writing", "Photography"]
  },
  {
    name: "Events",
    subCategories: ["Event Planning", "Party Planning", "Furniture Assembly", "Moving Help", "Car Detailing"]
  }
];