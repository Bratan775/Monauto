// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const vehicles = [
  // Citadines
  { brand: 'Renault', model: 'Clio', yearFrom: 2015, yearTo: 2024, basePrice: 14500, category: 'citadine', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 14000 },
  { brand: 'Peugeot', model: '208', yearFrom: 2015, yearTo: 2024, basePrice: 15200, category: 'citadine', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 13000 },
  { brand: 'Volkswagen', model: 'Polo', yearFrom: 2014, yearTo: 2024, basePrice: 16800, category: 'citadine', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 14000 },
  { brand: 'Toyota', model: 'Yaris', yearFrom: 2015, yearTo: 2024, basePrice: 15600, category: 'citadine', fuelTypes: ['essence', 'hybride'], avgMileagePerYear: 13500 },
  { brand: 'Ford', model: 'Fiesta', yearFrom: 2014, yearTo: 2022, basePrice: 14000, category: 'citadine', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 14000 },
  { brand: 'Opel', model: 'Corsa', yearFrom: 2014, yearTo: 2024, basePrice: 13800, category: 'citadine', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 13000 },
  { brand: 'Fiat', model: '500', yearFrom: 2013, yearTo: 2024, basePrice: 13200, category: 'citadine', fuelTypes: ['essence', 'electrique'], avgMileagePerYear: 11000 },
  { brand: 'Citroën', model: 'C3', yearFrom: 2015, yearTo: 2024, basePrice: 13500, category: 'citadine', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 13500 },

  // Compactes
  { brand: 'Volkswagen', model: 'Golf', yearFrom: 2013, yearTo: 2024, basePrice: 22000, category: 'compacte', fuelTypes: ['essence', 'diesel', 'hybride', 'electrique'], avgMileagePerYear: 16000 },
  { brand: 'Renault', model: 'Mégane', yearFrom: 2013, yearTo: 2024, basePrice: 19500, category: 'compacte', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 16000 },
  { brand: 'Peugeot', model: '308', yearFrom: 2014, yearTo: 2024, basePrice: 20500, category: 'compacte', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 16500 },
  { brand: 'Ford', model: 'Focus', yearFrom: 2014, yearTo: 2024, basePrice: 19800, category: 'compacte', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 17000 },
  { brand: 'Toyota', model: 'Corolla', yearFrom: 2016, yearTo: 2024, basePrice: 23000, category: 'compacte', fuelTypes: ['essence', 'hybride'], avgMileagePerYear: 16000 },
  { brand: 'Hyundai', model: 'i30', yearFrom: 2015, yearTo: 2024, basePrice: 19000, category: 'compacte', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 15500 },
  { brand: 'Skoda', model: 'Octavia', yearFrom: 2014, yearTo: 2024, basePrice: 21500, category: 'compacte', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 18000 },
  { brand: 'Seat', model: 'Leon', yearFrom: 2014, yearTo: 2024, basePrice: 20000, category: 'compacte', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 17000 },

  // SUV
  { brand: 'Renault', model: 'Captur', yearFrom: 2014, yearTo: 2024, basePrice: 21000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 15000 },
  { brand: 'Peugeot', model: '2008', yearFrom: 2014, yearTo: 2024, basePrice: 22500, category: 'suv', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 15000 },
  { brand: 'Volkswagen', model: 'T-Roc', yearFrom: 2018, yearTo: 2024, basePrice: 28000, category: 'suv', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 16000 },
  { brand: 'Nissan', model: 'Qashqai', yearFrom: 2014, yearTo: 2024, basePrice: 26500, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 17000 },
  { brand: 'Toyota', model: 'RAV4', yearFrom: 2014, yearTo: 2024, basePrice: 32000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 18000 },
  { brand: 'Volkswagen', model: 'Tiguan', yearFrom: 2014, yearTo: 2024, basePrice: 33000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 18000 },
  { brand: 'BMW', model: 'X3', yearFrom: 2014, yearTo: 2024, basePrice: 45000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 20000 },
  { brand: 'Audi', model: 'Q5', yearFrom: 2014, yearTo: 2024, basePrice: 48000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 20000 },
  { brand: 'Mercedes', model: 'GLC', yearFrom: 2015, yearTo: 2024, basePrice: 50000, category: 'suv', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 20000 },
  { brand: 'Dacia', model: 'Duster', yearFrom: 2014, yearTo: 2024, basePrice: 17500, category: 'suv', fuelTypes: ['essence', 'diesel', 'gpl'], avgMileagePerYear: 16000 },

  // Berlines premium
  { brand: 'BMW', model: 'Série 3', yearFrom: 2014, yearTo: 2024, basePrice: 42000, category: 'berline', fuelTypes: ['essence', 'diesel', 'hybride', 'electrique'], avgMileagePerYear: 22000 },
  { brand: 'Audi', model: 'A4', yearFrom: 2014, yearTo: 2024, basePrice: 40000, category: 'berline', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 22000 },
  { brand: 'Mercedes', model: 'Classe C', yearFrom: 2014, yearTo: 2024, basePrice: 44000, category: 'berline', fuelTypes: ['essence', 'diesel', 'hybride'], avgMileagePerYear: 22000 },
  { brand: 'Audi', model: 'A3', yearFrom: 2014, yearTo: 2024, basePrice: 32000, category: 'berline', fuelTypes: ['essence', 'diesel', 'hybride', 'electrique'], avgMileagePerYear: 18000 },
  { brand: 'BMW', model: 'Série 1', yearFrom: 2014, yearTo: 2024, basePrice: 30000, category: 'berline', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 18000 },

  // Électriques
  { brand: 'Tesla', model: 'Model 3', yearFrom: 2019, yearTo: 2024, basePrice: 45000, category: 'berline', fuelTypes: ['electrique'], avgMileagePerYear: 20000 },
  { brand: 'Renault', model: 'Zoe', yearFrom: 2014, yearTo: 2024, basePrice: 23000, category: 'citadine', fuelTypes: ['electrique'], avgMileagePerYear: 12000 },
  { brand: 'Peugeot', model: 'e-208', yearFrom: 2020, yearTo: 2024, basePrice: 29000, category: 'citadine', fuelTypes: ['electrique'], avgMileagePerYear: 13000 },

  // Utilitaires
  { brand: 'Renault', model: 'Kangoo', yearFrom: 2014, yearTo: 2024, basePrice: 18500, category: 'utilitaire', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 25000 },
  { brand: 'Peugeot', model: 'Partner', yearFrom: 2014, yearTo: 2024, basePrice: 19000, category: 'utilitaire', fuelTypes: ['essence', 'diesel', 'electrique'], avgMileagePerYear: 25000 },
  { brand: 'Volkswagen', model: 'Transporter', yearFrom: 2014, yearTo: 2024, basePrice: 32000, category: 'utilitaire', fuelTypes: ['essence', 'diesel'], avgMileagePerYear: 30000 },
]

async function main() {
  console.log('🌱 Seeding database...')

  // Clean existing vehicle data
  await prisma.vehicleData.deleteMany()

  // Insert vehicle data
  for (const v of vehicles) {
    await prisma.vehicleData.create({ data: v })
  }

  console.log(`✅ Inserted ${vehicles.length} vehicles`)

  // Create admin user
  const adminExists = await prisma.user.findUnique({ where: { email: 'admin@monauto.com' } })
  if (!adminExists) {
    await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'admin@monauto.com',
        password: await bcrypt.hash('Admin1234!', 12),
        role: 'ADMIN',
      }
    })
    console.log('✅ Admin user created: admin@monauto.com / Admin1234!')
  }

  // Create demo user
  const demoExists = await prisma.user.findUnique({ where: { email: 'demo@monauto.com' } })
  if (!demoExists) {
    await prisma.user.create({
      data: {
        name: 'Demo User',
        email: 'demo@monauto.com',
        password: await bcrypt.hash('Demo1234!', 12),
        role: 'USER',
      }
    })
    console.log('✅ Demo user created: demo@monauto.com / Demo1234!')
  }

  console.log('🎉 Seed completed!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
