import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// all prisma related codes go into this function
async function main() {
  // display all the currently created documents
  const documents = await prisma.document.findMany();
  console.log(documents);
}

main()
  .catch((err) => console.error(err))
  .finally(async () => {
    await prisma.$disconnect;
  });
