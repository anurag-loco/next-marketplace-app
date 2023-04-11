import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { PrismaClient } from '@prisma/client'


const createUser = async (req, res) => {
    const prisma = new PrismaClient()
    const supabase = createServerSupabaseClient({ req, res })
    // Check if we have a session
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user)
        return res.status(401).json({
            error: 'not_authenticated',
            description: 'The user does not have an active session or is not authenticated',
        })

    //creating the user
    const op = await prisma.user.create({
        data: {
            email: user.email,
            id: user.id,
        }
    })
   
    res.json(op)
}


export default createUser