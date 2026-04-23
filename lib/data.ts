import { MenuItem, City } from "./types";

export const CITIES: City[] = [
  { name: "Toronto", country: "CA" },
  { name: "Vancouver", country: "CA" },
  { name: "Calgary", country: "CA" },
  { name: "Edmonton", country: "CA" },
  { name: "Montreal", country: "CA" },
  { name: "Ottawa", country: "CA" },
  { name: "Winnipeg", country: "CA" },
  { name: "Halifax", country: "CA" },
  { name: "New York", country: "US" },
  { name: "Los Angeles", country: "US" },
  { name: "Chicago", country: "US" },
  { name: "Houston", country: "US" },
  { name: "Dallas", country: "US" },
  { name: "Atlanta", country: "US" },
  { name: "Miami", country: "US" },
  { name: "Seattle", country: "US" },
  { name: "Boston", country: "US" },
  { name: "Denver", country: "US" },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── McDonald's ──────────────────────────────────────────────────
  { id: "mcd-1", restaurant: "McDonald's", item: "Double Quarter Pounder with Cheese", protein_g: 48, carbs_g: 0, fat_g: 0, calories: 740, price_cad: 9.99, price_usd: 7.49, country: "both", category: "Burgers" },
  { id: "mcd-2", restaurant: "McDonald's", item: "McDouble", protein_g: 23, carbs_g: 0, fat_g: 0, calories: 400, price_cad: 3.49, price_usd: 2.79, country: "both", category: "Burgers" },
  { id: "mcd-3", restaurant: "McDonald's", item: "Big Mac", protein_g: 25, carbs_g: 0, fat_g: 0, calories: 550, price_cad: 7.49, price_usd: 5.99, country: "both", category: "Burgers" },
  { id: "mcd-4", restaurant: "McDonald's", item: "McChicken (Grilled)", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 380, price_cad: 6.99, price_usd: 4.99, country: "both", category: "Chicken" },
  { id: "mcd-5", restaurant: "McDonald's", item: "10pc Chicken McNuggets", protein_g: 24, carbs_g: 0, fat_g: 0, calories: 420, price_cad: 8.49, price_usd: 6.49, country: "both", category: "Chicken" },

  // ── Subway ───────────────────────────────────────────────────────
  { id: "sub-1", restaurant: "Subway", item: "Footlong Steak & Cheese", protein_g: 45, carbs_g: 0, fat_g: 0, calories: 700, price_cad: 16.49, price_usd: 12.49, country: "both", category: "Subs" },
  { id: "sub-2", restaurant: "Subway", item: "Footlong Rotisserie Chicken", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 620, price_cad: 15.99, price_usd: 11.99, country: "both", category: "Subs" },
  { id: "sub-3", restaurant: "Subway", item: "Footlong Turkey Breast", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 560, price_cad: 13.99, price_usd: 10.49, country: "both", category: "Subs" },
  { id: "sub-4", restaurant: "Subway", item: "6\" Chicken Teriyaki", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 370, price_cad: 9.49, price_usd: 7.29, country: "both", category: "Subs" },
  { id: "sub-5", restaurant: "Subway", item: "Footlong Tuna", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 740, price_cad: 13.99, price_usd: 10.49, country: "both", category: "Subs" },

  // ── A&W ─────────────────────────────────────────────────────────
  { id: "aw-1", restaurant: "A&W", item: "Uncle Burger", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 590, price_cad: 8.99, price_usd: null, country: "CA", category: "Burgers" },
  { id: "aw-2", restaurant: "A&W", item: "Mozza Burger", protein_g: 25, carbs_g: 0, fat_g: 0, calories: 570, price_cad: 7.99, price_usd: null, country: "CA", category: "Burgers" },
  { id: "aw-3", restaurant: "A&W", item: "Teen Burger", protein_g: 22, carbs_g: 0, fat_g: 0, calories: 480, price_cad: 6.99, price_usd: null, country: "CA", category: "Burgers" },
  { id: "aw-4", restaurant: "A&W", item: "Chicken Buddy", protein_g: 20, carbs_g: 0, fat_g: 0, calories: 370, price_cad: 5.49, price_usd: null, country: "CA", category: "Chicken" },
  { id: "aw-5", restaurant: "A&W", item: "Bacon & Egger", protein_g: 22, carbs_g: 0, fat_g: 0, calories: 440, price_cad: 6.49, price_usd: null, country: "CA", category: "Breakfast" },

  // ── Chipotle ─────────────────────────────────────────────────────
  { id: "chip-1", restaurant: "Chipotle", item: "Chicken Burrito Bowl", protein_g: 56, carbs_g: 0, fat_g: 0, calories: 715, price_cad: 15.75, price_usd: 10.95, country: "both", category: "Bowls" },
  { id: "chip-2", restaurant: "Chipotle", item: "Steak Burrito", protein_g: 51, carbs_g: 0, fat_g: 0, calories: 850, price_cad: 16.75, price_usd: 11.75, country: "both", category: "Burritos" },
  { id: "chip-3", restaurant: "Chipotle", item: "Chicken Salad Bowl", protein_g: 52, carbs_g: 0, fat_g: 0, calories: 500, price_cad: 14.75, price_usd: 10.25, country: "both", category: "Salads" },
  { id: "chip-4", restaurant: "Chipotle", item: "Barbacoa Bowl", protein_g: 48, carbs_g: 0, fat_g: 0, calories: 690, price_cad: 15.75, price_usd: 10.95, country: "both", category: "Bowls" },
  { id: "chip-5", restaurant: "Chipotle", item: "Double Chicken Bowl", protein_g: 80, carbs_g: 0, fat_g: 0, calories: 875, price_cad: 19.50, price_usd: 14.50, country: "both", category: "Bowls" },

  // ── Wendy's ──────────────────────────────────────────────────────
  { id: "wen-1", restaurant: "Wendy's", item: "Baconator", protein_g: 57, carbs_g: 0, fat_g: 0, calories: 950, price_cad: 12.99, price_usd: 9.49, country: "both", category: "Burgers" },
  { id: "wen-2", restaurant: "Wendy's", item: "Dave's Double", protein_g: 46, carbs_g: 0, fat_g: 0, calories: 820, price_cad: 9.99, price_usd: 7.79, country: "both", category: "Burgers" },
  { id: "wen-3", restaurant: "Wendy's", item: "Spicy Chicken Sandwich", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 720, price_cad: 8.99, price_usd: 6.49, country: "both", category: "Chicken" },
  { id: "wen-4", restaurant: "Wendy's", item: "Grilled Chicken Wrap", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 500, price_cad: 8.49, price_usd: 6.29, country: "both", category: "Chicken" },
  { id: "wen-5", restaurant: "Wendy's", item: "Son of Baconator", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 630, price_cad: 9.49, price_usd: 6.99, country: "both", category: "Burgers" },

  // ── Harvey's ─────────────────────────────────────────────────────
  { id: "harv-1", restaurant: "Harvey's", item: "Double Angus Burger", protein_g: 40, carbs_g: 0, fat_g: 0, calories: 630, price_cad: 10.99, price_usd: null, country: "CA", category: "Burgers" },
  { id: "harv-2", restaurant: "Harvey's", item: "Grilled Chicken Sandwich", protein_g: 32, carbs_g: 0, fat_g: 0, calories: 420, price_cad: 9.49, price_usd: null, country: "CA", category: "Chicken" },
  { id: "harv-3", restaurant: "Harvey's", item: "Crispy Chicken Sandwich", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 560, price_cad: 8.99, price_usd: null, country: "CA", category: "Chicken" },
  { id: "harv-4", restaurant: "Harvey's", item: "Original Burger", protein_g: 22, carbs_g: 0, fat_g: 0, calories: 480, price_cad: 7.49, price_usd: null, country: "CA", category: "Burgers" },
  { id: "harv-5", restaurant: "Harvey's", item: "Angus Mushroom Melt", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 650, price_cad: 10.49, price_usd: null, country: "CA", category: "Burgers" },

  // ── KFC ──────────────────────────────────────────────────────────
  { id: "kfc-1", restaurant: "KFC", item: "3pc Tenders", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 430, price_cad: 11.99, price_usd: 8.99, country: "both", category: "Chicken" },
  { id: "kfc-2", restaurant: "KFC", item: "2pc Chicken (Original Recipe)", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 490, price_cad: 9.99, price_usd: 7.99, country: "both", category: "Chicken" },
  { id: "kfc-3", restaurant: "KFC", item: "Chicken Sandwich (Crispy)", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 650, price_cad: 8.99, price_usd: 6.49, country: "both", category: "Chicken" },
  { id: "kfc-4", restaurant: "KFC", item: "Famous Bowl", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 720, price_cad: 10.49, price_usd: 8.49, country: "both", category: "Bowls" },
  { id: "kfc-5", restaurant: "KFC", item: "Double Down (no bun)", protein_g: 52, carbs_g: 0, fat_g: 0, calories: 590, price_cad: 10.49, price_usd: 7.99, country: "both", category: "Chicken" },

  // ── Burger King ──────────────────────────────────────────────────
  { id: "bk-1", restaurant: "Burger King", item: "Double Whopper", protein_g: 48, carbs_g: 0, fat_g: 0, calories: 900, price_cad: 11.49, price_usd: 8.99, country: "both", category: "Burgers" },
  { id: "bk-2", restaurant: "Burger King", item: "Double Cheeseburger", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 540, price_cad: 5.49, price_usd: 4.49, country: "both", category: "Burgers" },
  { id: "bk-3", restaurant: "Burger King", item: "Crispy Chicken Sandwich", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 660, price_cad: 8.49, price_usd: 6.49, country: "both", category: "Chicken" },
  { id: "bk-4", restaurant: "Burger King", item: "Bacon King", protein_g: 55, carbs_g: 0, fat_g: 0, calories: 1040, price_cad: 12.49, price_usd: 9.49, country: "both", category: "Burgers" },
  { id: "bk-5", restaurant: "Burger King", item: "Grilled Chicken Sandwich", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 470, price_cad: 7.99, price_usd: 6.29, country: "both", category: "Chicken" },

  // ── Nando's ──────────────────────────────────────────────────────
  { id: "nan-1", restaurant: "Nando's", item: "1/2 PERi-PERi Chicken", protein_g: 58, carbs_g: 0, fat_g: 0, calories: 580, price_cad: 18.99, price_usd: 14.99, country: "both", category: "Chicken" },
  { id: "nan-2", restaurant: "Nando's", item: "Full PERi-PERi Chicken", protein_g: 110, carbs_g: 0, fat_g: 0, calories: 1160, price_cad: 29.99, price_usd: 24.99, country: "both", category: "Chicken" },
  { id: "nan-3", restaurant: "Nando's", item: "Chicken Breast Fillet Burger", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 520, price_cad: 15.49, price_usd: 12.49, country: "both", category: "Chicken" },
  { id: "nan-4", restaurant: "Nando's", item: "Prego Roll (Chicken)", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 540, price_cad: 15.99, price_usd: 12.99, country: "both", category: "Chicken" },
  { id: "nan-5", restaurant: "Nando's", item: "1/4 Chicken Leg", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 290, price_cad: 9.49, price_usd: 7.99, country: "both", category: "Chicken" },

  // ── Taco Bell ────────────────────────────────────────────────────
  { id: "tb-1", restaurant: "Taco Bell", item: "Chicken Power Bowl", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 470, price_cad: 8.49, price_usd: 6.99, country: "both", category: "Bowls" },
  { id: "tb-2", restaurant: "Taco Bell", item: "Steak Quesadilla", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 490, price_cad: 6.99, price_usd: 5.49, country: "both", category: "Quesadillas" },
  { id: "tb-3", restaurant: "Taco Bell", item: "Grande Scrambler (Chicken)", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 560, price_cad: 6.49, price_usd: 4.99, country: "both", category: "Breakfast" },
  { id: "tb-4", restaurant: "Taco Bell", item: "Crunchwrap Supreme (Steak)", protein_g: 19, carbs_g: 0, fat_g: 0, calories: 530, price_cad: 7.49, price_usd: 5.99, country: "both", category: "Wraps" },
  { id: "tb-5", restaurant: "Taco Bell", item: "Triple Double Crunchwrap", protein_g: 35, carbs_g: 0, fat_g: 0, calories: 710, price_cad: 8.99, price_usd: 6.99, country: "both", category: "Wraps" },

  // ── Chick-fil-A ──────────────────────────────────────────────────
  { id: "cfa-1", restaurant: "Chick-fil-A", item: "Grilled Nuggets (12pc)", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 200, price_cad: null, price_usd: 8.19, country: "US", category: "Chicken" },
  { id: "cfa-2", restaurant: "Chick-fil-A", item: "Grilled Chicken Club", protein_g: 43, carbs_g: 0, fat_g: 0, calories: 520, price_cad: null, price_usd: 8.79, country: "US", category: "Chicken" },
  { id: "cfa-3", restaurant: "Chick-fil-A", item: "Spicy Deluxe Chicken Sandwich", protein_g: 37, carbs_g: 0, fat_g: 0, calories: 550, price_cad: null, price_usd: 6.75, country: "US", category: "Chicken" },
  { id: "cfa-4", restaurant: "Chick-fil-A", item: "Grilled Chicken Sandwich", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 390, price_cad: null, price_usd: 6.19, country: "US", category: "Chicken" },
  { id: "cfa-5", restaurant: "Chick-fil-A", item: "3pc Chicken Strips", protein_g: 29, carbs_g: 0, fat_g: 0, calories: 320, price_cad: null, price_usd: 5.35, country: "US", category: "Chicken" },

  // ── Five Guys ────────────────────────────────────────────────────
  { id: "fg-1", restaurant: "Five Guys", item: "Bacon Cheeseburger", protein_g: 40, carbs_g: 0, fat_g: 0, calories: 920, price_cad: 17.99, price_usd: 12.99, country: "both", category: "Burgers" },
  { id: "fg-2", restaurant: "Five Guys", item: "Bacon Burger", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 880, price_cad: 16.99, price_usd: 11.99, country: "both", category: "Burgers" },
  { id: "fg-3", restaurant: "Five Guys", item: "Cheeseburger", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 840, price_cad: 15.99, price_usd: 11.49, country: "both", category: "Burgers" },
  { id: "fg-4", restaurant: "Five Guys", item: "Little Bacon Cheeseburger", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 630, price_cad: 13.99, price_usd: 9.99, country: "both", category: "Burgers" },
  { id: "fg-5", restaurant: "Five Guys", item: "Grilled Cheese (2 patties)", protein_g: 22, carbs_g: 0, fat_g: 0, calories: 750, price_cad: 12.99, price_usd: 9.49, country: "both", category: "Burgers" },

  // ── Pita Pit ─────────────────────────────────────────────────────
  { id: "pp-1", restaurant: "Pita Pit", item: "Chicken Caesar Pita", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 480, price_cad: 13.49, price_usd: 10.49, country: "both", category: "Pitas" },
  { id: "pp-2", restaurant: "Pita Pit", item: "Grilled Chicken Pita", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 420, price_cad: 12.99, price_usd: 9.99, country: "both", category: "Pitas" },
  { id: "pp-3", restaurant: "Pita Pit", item: "Greek Chicken Pita", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 460, price_cad: 12.99, price_usd: 9.99, country: "both", category: "Pitas" },
  { id: "pp-4", restaurant: "Pita Pit", item: "Tuna Pita", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 430, price_cad: 11.99, price_usd: 9.49, country: "both", category: "Pitas" },
  { id: "pp-5", restaurant: "Pita Pit", item: "Turkey Bacon Club Pita", protein_g: 32, carbs_g: 0, fat_g: 0, calories: 450, price_cad: 12.49, price_usd: 9.49, country: "both", category: "Pitas" },

  // ── Qdoba ────────────────────────────────────────────────────────
  { id: "qd-1", restaurant: "Qdoba", item: "Chicken Burrito", protein_g: 51, carbs_g: 0, fat_g: 0, calories: 850, price_cad: null, price_usd: 10.99, country: "US", category: "Burritos" },
  { id: "qd-2", restaurant: "Qdoba", item: "Steak Burrito Bowl", protein_g: 45, carbs_g: 0, fat_g: 0, calories: 720, price_cad: null, price_usd: 10.99, country: "US", category: "Bowls" },
  { id: "qd-3", restaurant: "Qdoba", item: "Chicken Quesadilla", protein_g: 40, carbs_g: 0, fat_g: 0, calories: 730, price_cad: null, price_usd: 9.99, country: "US", category: "Quesadillas" },
  { id: "qd-4", restaurant: "Qdoba", item: "3-Cheese Nachos with Chicken", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 990, price_cad: null, price_usd: 11.99, country: "US", category: "Nachos" },
  { id: "qd-5", restaurant: "Qdoba", item: "Ground Beef Taco (3pc)", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 480, price_cad: null, price_usd: 8.99, country: "US", category: "Tacos" },

  // ── Quesada ──────────────────────────────────────────────────────
  { id: "que-1", restaurant: "Quesada", item: "Chicken Burrito", protein_g: 48, carbs_g: 0, fat_g: 0, calories: 790, price_cad: 14.49, price_usd: null, country: "CA", category: "Burritos" },
  { id: "que-2", restaurant: "Quesada", item: "Steak Bowl", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 680, price_cad: 14.99, price_usd: null, country: "CA", category: "Bowls" },
  { id: "que-3", restaurant: "Quesada", item: "Grilled Chicken Quesadilla", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 680, price_cad: 12.99, price_usd: null, country: "CA", category: "Quesadillas" },
  { id: "que-4", restaurant: "Quesada", item: "Ground Beef Burrito", protein_g: 35, carbs_g: 0, fat_g: 0, calories: 820, price_cad: 13.49, price_usd: null, country: "CA", category: "Burritos" },
  { id: "que-5", restaurant: "Quesada", item: "Chicken Tacos (3pc)", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 510, price_cad: 12.49, price_usd: null, country: "CA", category: "Tacos" },

  // ── The Halal Guys ───────────────────────────────────────────────
  { id: "thg-1", restaurant: "The Halal Guys", item: "Combo Platter (Chicken & Gyro)", protein_g: 58, carbs_g: 0, fat_g: 0, calories: 900, price_cad: 17.99, price_usd: 14.99, country: "both", category: "Platters" },
  { id: "thg-2", restaurant: "The Halal Guys", item: "Chicken Platter", protein_g: 52, carbs_g: 0, fat_g: 0, calories: 780, price_cad: 15.99, price_usd: 13.49, country: "both", category: "Platters" },
  { id: "thg-3", restaurant: "The Halal Guys", item: "Gyro Platter", protein_g: 46, carbs_g: 0, fat_g: 0, calories: 820, price_cad: 15.99, price_usd: 13.49, country: "both", category: "Platters" },
  { id: "thg-4", restaurant: "The Halal Guys", item: "Chicken Sandwich", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 560, price_cad: 13.49, price_usd: 11.49, country: "both", category: "Sandwiches" },
  { id: "thg-5", restaurant: "The Halal Guys", item: "Gyro Sandwich", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 590, price_cad: 13.49, price_usd: 11.49, country: "both", category: "Sandwiches" },

  // ── Popeyes ──────────────────────────────────────────────────────
  { id: "pop-1", restaurant: "Popeyes", item: "3pc Tenders", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 380, price_cad: 10.99, price_usd: 8.49, country: "both", category: "Chicken" },
  { id: "pop-2", restaurant: "Popeyes", item: "Blackened Chicken Sandwich", protein_g: 30, carbs_g: 0, fat_g: 0, calories: 510, price_cad: 8.99, price_usd: 7.29, country: "both", category: "Chicken" },
  { id: "pop-3", restaurant: "Popeyes", item: "Chicken Sandwich (Classic)", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 700, price_cad: 8.49, price_usd: 6.49, country: "both", category: "Chicken" },
  { id: "pop-4", restaurant: "Popeyes", item: "2pc Leg & Thigh", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 590, price_cad: 7.99, price_usd: 6.29, country: "both", category: "Chicken" },
  { id: "pop-5", restaurant: "Popeyes", item: "4pc Tenders", protein_g: 48, carbs_g: 0, fat_g: 0, calories: 510, price_cad: 13.49, price_usd: 10.99, country: "both", category: "Chicken" },

  // ── Tim Hortons ──────────────────────────────────────────────────
  { id: "tim-1", restaurant: "Tim Hortons", item: "Turkey Bacon Club Wrap", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 470, price_cad: 9.49, price_usd: null, country: "CA", category: "Wraps" },
  { id: "tim-2", restaurant: "Tim Hortons", item: "Grilled Chicken Wrap", protein_g: 26, carbs_g: 0, fat_g: 0, calories: 430, price_cad: 8.99, price_usd: null, country: "CA", category: "Wraps" },
  { id: "tim-3", restaurant: "Tim Hortons", item: "Farmers Breakfast Wrap", protein_g: 22, carbs_g: 0, fat_g: 0, calories: 450, price_cad: 7.99, price_usd: null, country: "CA", category: "Breakfast" },
  { id: "tim-4", restaurant: "Tim Hortons", item: "BELT Bagel", protein_g: 24, carbs_g: 0, fat_g: 0, calories: 490, price_cad: 6.99, price_usd: null, country: "CA", category: "Breakfast" },
  { id: "tim-5", restaurant: "Tim Hortons", item: "Classic Chicken Sandwich", protein_g: 23, carbs_g: 0, fat_g: 0, calories: 510, price_cad: 7.49, price_usd: null, country: "CA", category: "Chicken" },

  // ── Freshii ──────────────────────────────────────────────────────
  { id: "fri-1", restaurant: "Freshii", item: "Teriyaki Steak Bowl", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 580, price_cad: 14.99, price_usd: 11.99, country: "both", category: "Bowls" },
  { id: "fri-2", restaurant: "Freshii", item: "BBQ Chicken Burrito", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 640, price_cad: 13.99, price_usd: 10.99, country: "both", category: "Burritos" },
  { id: "fri-3", restaurant: "Freshii", item: "Chicken Power Salad", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 420, price_cad: 14.49, price_usd: 11.49, country: "both", category: "Salads" },
  { id: "fri-4", restaurant: "Freshii", item: "Pangoa Bowl", protein_g: 32, carbs_g: 0, fat_g: 0, calories: 560, price_cad: 13.99, price_usd: 10.99, country: "both", category: "Bowls" },
  { id: "fri-5", restaurant: "Freshii", item: "Baja Burrito", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 590, price_cad: 13.49, price_usd: 10.49, country: "both", category: "Burritos" },

  // ── Panera ───────────────────────────────────────────────────────
  { id: "pan-1", restaurant: "Panera", item: "Chicken Bacon Ranch Sandwich", protein_g: 42, carbs_g: 0, fat_g: 0, calories: 720, price_cad: null, price_usd: 11.99, country: "US", category: "Sandwiches" },
  { id: "pan-2", restaurant: "Panera", item: "Turkey Avocado BLT", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 600, price_cad: null, price_usd: 12.49, country: "US", category: "Sandwiches" },
  { id: "pan-3", restaurant: "Panera", item: "Green Goddess Salad with Chicken", protein_g: 35, carbs_g: 0, fat_g: 0, calories: 490, price_cad: null, price_usd: 12.49, country: "US", category: "Salads" },
  { id: "pan-4", restaurant: "Panera", item: "Fuji Apple Chicken Salad", protein_g: 32, carbs_g: 0, fat_g: 0, calories: 570, price_cad: null, price_usd: 12.99, country: "US", category: "Salads" },
  { id: "pan-5", restaurant: "Panera", item: "Signature Mac & Cheese + Chicken", protein_g: 38, carbs_g: 0, fat_g: 0, calories: 900, price_cad: null, price_usd: 12.49, country: "US", category: "Bowls" },

  // ── Shake Shack ──────────────────────────────────────────────────
  { id: "ss-1", restaurant: "Shake Shack", item: "Double SmokeShack", protein_g: 44, carbs_g: 0, fat_g: 0, calories: 880, price_cad: 18.49, price_usd: 13.99, country: "both", category: "Burgers" },
  { id: "ss-2", restaurant: "Shake Shack", item: "Double ShackBurger", protein_g: 40, carbs_g: 0, fat_g: 0, calories: 820, price_cad: 17.49, price_usd: 12.99, country: "both", category: "Burgers" },
  { id: "ss-3", restaurant: "Shake Shack", item: "Chicken Shack", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 670, price_cad: 14.99, price_usd: 10.99, country: "both", category: "Chicken" },
  { id: "ss-4", restaurant: "Shake Shack", item: "Double Stack", protein_g: 34, carbs_g: 0, fat_g: 0, calories: 720, price_cad: 15.99, price_usd: 11.99, country: "both", category: "Burgers" },
  { id: "ss-5", restaurant: "Shake Shack", item: "SmokeShack (Single)", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 540, price_cad: 13.49, price_usd: 9.99, country: "both", category: "Burgers" },

  // ── Mary Brown's ─────────────────────────────────────────────────
  { id: "mb-1", restaurant: "Mary Brown's", item: "4pc Tenders", protein_g: 52, carbs_g: 0, fat_g: 0, calories: 630, price_cad: 15.49, price_usd: null, country: "CA", category: "Chicken" },
  { id: "mb-2", restaurant: "Mary Brown's", item: "3pc Tenders", protein_g: 40, carbs_g: 0, fat_g: 0, calories: 480, price_cad: 12.99, price_usd: null, country: "CA", category: "Chicken" },
  { id: "mb-3", restaurant: "Mary Brown's", item: "2pc Leg & Thigh", protein_g: 36, carbs_g: 0, fat_g: 0, calories: 510, price_cad: 11.49, price_usd: null, country: "CA", category: "Chicken" },
  { id: "mb-4", restaurant: "Mary Brown's", item: "Big Mary Chicken Sandwich", protein_g: 32, carbs_g: 0, fat_g: 0, calories: 620, price_cad: 9.99, price_usd: null, country: "CA", category: "Chicken" },
  { id: "mb-5", restaurant: "Mary Brown's", item: "Classic Chicken Sandwich", protein_g: 28, carbs_g: 0, fat_g: 0, calories: 540, price_cad: 8.99, price_usd: null, country: "CA", category: "Chicken" },
];

export const ALL_RESTAURANTS = [...new Set(MENU_ITEMS.map((i) => i.restaurant))].sort();
