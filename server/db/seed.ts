import db from "./index";
import { students } from "./schema";

async function seed() {
  console.log("🌱 Seeding students...");

  await db.insert(students).values([
    {
      studentId: "2025-0001",
      fullName: "Juan Dela Cruz",
      course: "BS Computer Science",
      yearLevel: 1,
    },
    {
      studentId: "2025-0002",
      fullName: "Maria Santos",
      course: "BS Information Technology",
      yearLevel: 2,
    },
    {
      studentId: "2025-0003",
      fullName: "Pedro Reyes",
      course: "BS Accountancy",
      yearLevel: 3,
    },
    {
      studentId: "2025-0004",
      fullName: "Ana Lopez",
      course: "BS Business Administration",
      yearLevel: 4,
    },
  ]);

  console.log("✅ Students seeded successfully");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
