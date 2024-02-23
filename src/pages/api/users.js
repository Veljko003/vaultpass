import { validate } from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  emailValidator,
  nameValidator,
  passwordValidator
} from "@/utils/validators"

const handle = mw({
  POST: [
    validate({
      body: {
        username: nameValidator,
        firstName: nameValidator,
        lastName: nameValidator,
        email: emailValidator,
        password: passwordValidator
      }
    }),
    async ({
      input: {
        body: { username, firstName, lastName, email, password }
      },
      models: { UserModel },
      res
    }) => {
      const user = await UserModel.query().findOne({ email })

      if (user) {
        res.send({ result: true })

        return
      }

      const [passwordHash, passwordSalt] =
        await UserModel.hashPassword(password)

      await UserModel.query().insertAndFetch({
        username,
        firstName,
        lastName,
        email,
        passwordHash,
        passwordSalt
      })

      res.send({ result: true })
    }
  ]
})

export default handle
