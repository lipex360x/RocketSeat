import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function sessionStarted (request:Request, response:Response, next:NextFunction): void {
  const tokenHeader = request.headers.authorization

  if (!tokenHeader) {
    throw new Error('JWT token is missing')
  }

  const [, token] = tokenHeader.split(' ')

  try {
    const decoded = verify(token, process.env.JWT_TOKEN)

    const { sub } = decoded as TokenPayload

    request.user = {
      id: sub
    }

    return next()
  } catch {
    throw new Error('Invalid JWT Token')
  }
}
