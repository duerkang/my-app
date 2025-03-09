'use server'
import {z} from 'zod'

export type CreateActionState = {
  email?: string[] | undefined,
  password?: string[] | undefined
} | undefined

const schema = z.object({
  email: z.string().email({message: 'Please enter a valid email'}),
  password: z.string().min(8, {message: 'Be ar least 8 characters long'})
})

export async function createAction(previousState: CreateActionState, formData: FormData) {
  const validateFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })
  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors
    }
  }
}
