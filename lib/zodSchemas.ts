import { z } from 'zod';

export const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "FINISHED"]),
});