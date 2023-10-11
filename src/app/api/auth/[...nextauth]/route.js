import { authOptions } from "@/utils/auth"
import NextAuth, { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/utils/connect";




const handler= NextAuth(
    {
        adapter:PrismaAdapter(prisma),
        providers:[
            GithubProvider({
                clientId:process.env.GITHUB_ID,
                clientSecret:process.env.GITHUB_SECRET
            })
        ]
    }
)
        

export {handler as GET,handler as POST}

export const getAuthSession = () => getServerSession({
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        })
    ]
});