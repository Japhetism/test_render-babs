import { z } from "zod";

export const productCategorySchema = z.object({
    name: z.string({ required_error: "name is required" }).min(2, "name must be at least 2 characters long"),
    description: z
      .string({ required_error: "description is required" })
      .min(10, "description must be at least 10 characters long"),
    markupType: z.enum(["percentage", "value"]).refine(
        (value) => ["percentage", "value"].includes(value),
        { message: "markup type must be either 'percentage' or 'value'" }
    ),
    markupValue: z.string({ required_error: "markup value is required" })
});