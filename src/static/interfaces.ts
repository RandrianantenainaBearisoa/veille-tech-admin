interface Post {
  title: string;
  subtitle: string;
  content: string;
  status: boolean | null;
}

interface Edition {
  // Equivalent of Publication in veille-tech-agent
  date: Date; // Publication.created_at
  posts: Post[];
}

export type { Post, Edition };
