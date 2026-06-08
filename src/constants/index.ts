import { Label } from "recharts";

export const DEPARTMENTS = [
    'cs', 'Math', 'English', 'Chemistry'
];

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    Label: dept
}));