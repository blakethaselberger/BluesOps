export interface Player {
  id: number
  name: string
  number: number
  position: string
  age: number
  height: string
  weight: string
  birthplace: string
  team: string
  league: string
  status: string
  contract: string
  rating: string
  drafted: string
  shoots: string
  salary: string
}

// Mock data with different leagues
export const players: Player[] = [
  // NHL Players
  { id: 1, name: "Connor McDavid", number: 97, position: "Center", age: 26, height: "6'1\"", weight: "193 lbs", birthplace: "Richmond Hill, ON", team: "Edmonton Oilers", league: "NHL", status: "Active", contract: "2026", rating: "A+", drafted: "1st Overall 2015", shoots: "Left", salary: "$12.5M" },
  { id: 2, name: "Nathan MacKinnon", number: 29, position: "Center", age: 28, height: "6'0\"", weight: "200 lbs", birthplace: "Halifax, NS", team: "Colorado Avalanche", league: "NHL", status: "Active", contract: "2031", rating: "A+", drafted: "1st Overall 2013", shoots: "Right", salary: "$12.6M" },
  { id: 3, name: "Joel Hofer", number: 50, position: "Goalie", age: 23, height: "6'4\"", weight: "180 lbs", birthplace: "Winnipeg, MB", team: "St. Louis Blues", league: "NHL", status: "Active", contract: "2025", rating: "B", drafted: "4th Round 2018", shoots: "Left", salary: "$1.2M" },

  // OHL Players
  { id: 4, name: "Connor Bedard", number: 98, position: "Center", age: 18, height: "5'10\"", weight: "185 lbs", birthplace: "North Vancouver, BC", team: "Regina Pats", league: "OHL", status: "Prospect", contract: "2024", rating: "A+", drafted: "Eligible 2023", shoots: "Right", salary: "Junior" },
  { id: 5, name: "Adam Fantilli", number: 11, position: "Center", age: 19, height: "6'2\"", weight: "194 lbs", birthplace: "Nobleton, ON", team: "Chicago Steel", league: "OHL", status: "Prospect", contract: "2024", rating: "A", drafted: "Eligible 2023", shoots: "Left", salary: "Junior" },

  // WHL Players
  { id: 6, name: "Brayden Yager", number: 36, position: "Center", age: 18, height: "6'0\"", weight: "170 lbs", birthplace: "Saskatoon, SK", team: "Moose Jaw Warriors", league: "WHL", status: "Prospect", contract: "2024", rating: "A-", drafted: "Eligible 2023", shoots: "Right", salary: "Junior" },

  // QMJHL Players
  { id: 7, name: "Zach Benson", number: 9, position: "Left Wing", age: 18, height: "5'10\"", weight: "160 lbs", birthplace: "Chilliwack, BC", team: "Winnipeg Ice", league: "QMJHL", status: "Prospect", contract: "2024", rating: "B+", drafted: "Eligible 2023", shoots: "Left", salary: "Junior" },

  // NCAA Players
  { id: 8, name: "Ryan Leonard", number: 8, position: "Right Wing", age: 19, height: "5'11\"", weight: "185 lbs", birthplace: "Amherst, MA", team: "Boston College", league: "NCAA", status: "Prospect", contract: "2025", rating: "A-", drafted: "Eligible 2023", shoots: "Right", salary: "College" },
  { id: 9, name: "Will Smith", number: 4, position: "Center", age: 18, height: "6'0\"", weight: "175 lbs", birthplace: "Lexington, MA", team: "Boston College", league: "NCAA", status: "Prospect", contract: "2025", rating: "A", drafted: "Eligible 2023", shoots: "Right", salary: "College" },

  // USHL Players
  { id: 10, name: "Gabe Perreault", number: 91, position: "Left Wing", age: 18, height: "6'0\"", weight: "185 lbs", birthplace: "Hinsdale, IL", team: "NTDP U18", league: "USHL", status: "Prospect", contract: "2024", rating: "A-", drafted: "Eligible 2023", shoots: "Left", salary: "Junior" },

  // SHL Players
  { id: 11, name: "Leo Carlsson", number: 72, position: "Center", age: 18, height: "6'3\"", weight: "194 lbs", birthplace: "Karlstad, SWE", team: "Örebro HK", league: "SHL", status: "Prospect", contract: "2024", rating: "A+", drafted: "Eligible 2023", shoots: "Left", salary: "€150K" },

  // Liiga Players
  { id: 12, name: "Kasper Halttunen", number: 21, position: "Right Wing", age: 19, height: "6'1\"", weight: "183 lbs", birthplace: "Turku, FIN", team: "HIFK", league: "Liiga", status: "Prospect", contract: "2024", rating: "B+", drafted: "Eligible 2023", shoots: "Left", salary: "€75K" },

  // KHL Players
  { id: 13, name: "Matvei Michkov", number: 39, position: "Right Wing", age: 19, height: "5'10\"", weight: "172 lbs", birthplace: "Perm, RUS", team: "SKA St. Petersburg", league: "KHL", status: "Prospect", contract: "2026", rating: "A+", drafted: "Eligible 2023", shoots: "Left", salary: "$500K" },

  // Czech Extraliga
  { id: 14, name: "David Jiricek", number: 6, position: "Defense", age: 19, height: "6'3\"", weight: "194 lbs", birthplace: "Klatovy, CZE", team: "HC Plzen", league: "Czech Extraliga", status: "Prospect", contract: "2024", rating: "A", drafted: "2022 6th Overall", shoots: "Right", salary: "€100K" },
]

export const getLeagueIcon = (league: string): string => {
  const icons: Record<string, string> = {
    "NHL": "🏒",
    "OHL": "🍁",
    "WHL": "🍁", 
    "QMJHL": "🍁",
    "NCAA": "🇺🇸",
    "USHL": "🇺🇸",
    "SHL": "🇸🇪",
    "Liiga": "🇫🇮",
    "KHL": "🇷🇺",
    "Czech Extraliga": "🇨🇿"
  }
  return icons[league] || "🌍"
}
