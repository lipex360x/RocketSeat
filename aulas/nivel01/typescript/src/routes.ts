import { Request, Response } from 'express'
import createUser from './services/CreateUser'


export function helloWorld(req: Request, res:Response) {
  const user = createUser({
    email: 'teste',
    password: 'oioir',
    techs: [
      'nodejs', 
      'reactjs', 
      'react-native',
      {title: 'javascript', experience: 1000}
    ]
  });

  console.log(user.password)

  return res.json({message: "hello world"});
}