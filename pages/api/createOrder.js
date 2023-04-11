import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { prisma } from '../../helpers/prisma'

const createUser = async (req, res) => {

    if (req.method == 'POST') { //only act on POST methods
        console.log(JSON.parse(req.body))
        let body = JSON.parse(req.body)


        let order = await prisma.courses.update({
            where: {
                id: body.id
            },
            data: {
                Orders: {
                    create: {
                        name: body.name,
                        email: body.email,
                        price: Number(body.price),
                    }
                }
            }
        })
        console.log(order)
    }
   

    res.status(200).json({
        message: "WRONG METHOD"
    })



}


export default createUser