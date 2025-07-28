export interface Seller {
  id: string;
  name: string;
  avatar: string;
  position: string;
  rating: number;
  totalSales: number;
  experience: number;
  bio: string;
  specialties: string[];
  certifications: string[];
  phone: string;
  responseTime: string;
  monthlyStats: {
    clientsServed: number;
    bikesSold: number;
    avgRating: number;
  };
}

export interface Post {
  id: string;
  sellerId: string;
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
  type: 'delivery' | 'tip' | 'achievement' | 'promotion';
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  date: Date;
  bikeModel: string;
  comment: string;
  sellerResponse?: string;
}

export interface Story {
  id: string;
  sellerId: string;
  image: string;
  title: string;
  type: 'delivery' | 'tip' | 'promotion';
  timestamp: Date;
}

export interface WorkGallery {
  id: string;
  image: string;
  client: string;
  bikeModel: string;
  description: string;
  date: Date;
}