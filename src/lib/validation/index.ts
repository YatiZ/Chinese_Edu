import * as z from 'zod'; 

export const SignupValidation = z.object({
   username: z.string().min(2,{message:'UserName is too short'}),
   email: z.string().email(),
   password: z.string().min(8,{message: 'Password must be longer than 8 characters'}),
})

export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:'Password must be at least 8 characters'})
})

