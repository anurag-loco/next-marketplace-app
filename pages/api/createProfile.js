import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { prisma } from '../../helpers/prisma'

const createUser = async (req, res) => {

    if (req.method == 'POST') { //only act on POST methods
        console.log(JSON.parse(req.body))
        let body = JSON.parse(req.body)
        const supabase = createServerSupabaseClient({ req, res })
        // Check if we have a session
        const {
            data: { user },
        } = await supabase.auth.getUser()


        //throwing an error if the user does not exist
        if (!user)
            return res.status(401).json({
                error: 'not_authenticated',
                description: 'The user does not have an active session or is not authenticated',
            })
        else {
            let updatedUser = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    profilePhoto: body.profilePhoto,
                    description: body.description,
                    lastName: body.lastName,
                    firstName: body.firstName
                }
            })
        }
    }


    res.status(200).json({
        message: "WRONG METHOD"
    })



}


export default createUser