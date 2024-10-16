import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        alterH1Title: z.string().optional(),
        description: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        dificulty: z.union([z.literal("Hard"), z.literal("Normal"), z.literal("Easy")]),
        img: z
            .object({
                path: z.string(),
                alt: z.string(),
            })
            .optional(),
        reasons: z.array(z.string()).optional(),
        practicalSectionId: z.string().toLowerCase().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
