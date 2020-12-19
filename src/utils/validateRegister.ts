import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput'

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'invalid email',
      },
    ]
  }
  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'username cannot include an @',
      },
    ]
  }
  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'length must be 3 or more characters',
      },
    ]
  }
  if (options.password.length <= 2) {
    return [
      {
        field: 'password',
        message: 'length must be 3 or more characters',
      },
    ]
  }

  return null
}
