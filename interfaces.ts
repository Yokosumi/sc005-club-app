import { z } from "zod";

export const MemberSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export type Member = z.infer<typeof MemberSchema>;
