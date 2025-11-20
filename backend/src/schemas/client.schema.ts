import { z } from 'zod';

export const addressSchema = z.object({
    cep: z.string().min(8).max(8),
    street: z.string(),
    city: z.string(),
    state: z.string().min(2).max(2),
    number: z.string(),
    complement: z.string().optional()
});

export const clientSchema = z.object({
    name: z.string().min(3),
    cpf: z.string().min(11).max(11),
    phone: z.string().min(10).max(11),
    address: addressSchema
});

export type ClientSchema = z.infer<typeof clientSchema>;