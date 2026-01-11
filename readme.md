In the alternate universe using functional programming:

- instead of using class we can straight using export function
- validators we can use ZOD instead of decorators

PRISMA
npx prisma generate (after building new schema)
npx prisma db push (update)

ENCRYPTION
bycrpt

Creating a feature, start with

- DTO
- Repositories
- Service (here all the things like every logic happen encypt, call AI functions or whatever it is)
- Controller

JWT LESSON
when clients sign in they will get a JWT token which they will store in their local storage. this JWT contains

1. Header
2. Payload (the date, like id, email, role)
3. signature (proves the token wasn't tampered)



