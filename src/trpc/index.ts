import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { router } from "./trpc"
import { TRPCError } from "@trpc/server"

export const appRouter = router({})

export type AppRouter = typeof appRouter
