import { subject } from "@/types";

export const MOCK_SUBJECTS: subject[] = [
    {
    id: 1, // Changed to a number to match your type
    code: "CS-101",
    name: "Introduction to Computer Science",
    department: "computer-science",
    description: "An introduction to the fundamental concepts of computer science.",
    createdAt: "2026-01-15T08:00:00Z" // Added to match your type
  },
  {
    id: 2,
    code: "MATH-203",
    name: "Linear Algebra & Applications",
    department: "mathematics",
    description: "Systems of linear equations, matrix operations, and determinants.",
    createdAt: "2026-02-10T09:30:00Z"
  },
  {
    id: 3,
    code: "PHY-112",
    name: "General Physics: Mechanics",
    department: "physics",
    description: "A calculus-based study of classical mechanics.",
    createdAt: "2026-03-01T11:00:00Z"
  }
]