import { z } from "zod";

export const MemberSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export interface IMember {
	id: number;
	name: string;
}
