export interface Player {
    id: number
    name: string
    number: number
    position: string
    age: number
    birthYear: number
    height: string
    weight: string
    heightCm: number
    weightLbs: number
    birthplace: string
    nationality: string
    team: string
    league: string
    status: string
    contract: string
    contractExpiry: number
    rating: string
    drafted: string
    draftYear: number | null
    draftRound: number | null
    draftOverall: number | null
    draftTeam: string | null
    shoots: string
    salary: string
    salaryValue: number
    // Performance stats
    gamesPlayed: number
    goals: number
    assists: number
    points: number
    plusMinus: number
    penaltyMinutes: number
    // Advanced attributes
    playerStyle: string
    yearsInLeague: number
    previousLeagues: string[]
    draftEligible: boolean
}

// Mock data with different leagues
export const players: Player[] = [
    // NHL Players
    {
        id: 1, name: "Connor McDavid", number: 97, position: "Center", age: 26, birthYear: 1997,
        height: "6'1\"", weight: "193 lbs", heightCm: 185, weightLbs: 193,
        birthplace: "Richmond Hill, ON", nationality: "Canada", team: "Edmonton Oilers",
        league: "NHL", status: "Active", contract: "Signed", contractExpiry: 2026,
        rating: "A+", drafted: "1st Overall 2015", draftYear: 2015, draftRound: 1,
        draftOverall: 1, draftTeam: "Edmonton Oilers", shoots: "Left",
        salary: "$12.5M", salaryValue: 12500000, gamesPlayed: 64, goals: 45,
        assists: 75, points: 120, plusMinus: 15, penaltyMinutes: 12,
        playerStyle: "Elite Playmaker", yearsInLeague: 8, previousLeagues: ["OHL"],
        draftEligible: false
    },
    {
        id: 2, name: "Nathan MacKinnon", number: 29, position: "Center", age: 28, birthYear: 1995,
        height: "6'0\"", weight: "200 lbs", heightCm: 183, weightLbs: 200,
        birthplace: "Halifax, NS", nationality: "Canada", team: "Colorado Avalanche",
        league: "NHL", status: "Active", contract: "Signed", contractExpiry: 2031,
        rating: "A+", drafted: "1st Overall 2013", draftYear: 2013, draftRound: 1,
        draftOverall: 1, draftTeam: "Colorado Avalanche", shoots: "Right",
        salary: "$12.6M", salaryValue: 12600000, gamesPlayed: 71, goals: 42,
        assists: 69, points: 111, plusMinus: 22, penaltyMinutes: 28,
        playerStyle: "Power Forward", yearsInLeague: 10, previousLeagues: ["QMJHL"],
        draftEligible: false
    },
    {
        id: 3, name: "Joel Hofer", number: 50, position: "Goalie", age: 23, birthYear: 2000,
        height: "6'4\"", weight: "180 lbs", heightCm: 193, weightLbs: 180,
        birthplace: "Winnipeg, MB", nationality: "Canada", team: "St. Louis Blues",
        league: "NHL", status: "Active", contract: "Signed", contractExpiry: 2025,
        rating: "B", drafted: "4th Round 2018", draftYear: 2018, draftRound: 4,
        draftOverall: 108, draftTeam: "St. Louis Blues", shoots: "Left",
        salary: "$1.2M", salaryValue: 1200000, gamesPlayed: 35, goals: 0,
        assists: 1, points: 1, plusMinus: 5, penaltyMinutes: 2,
        playerStyle: "Butterfly Goalie", yearsInLeague: 2, previousLeagues: ["WHL", "AHL"],
        draftEligible: false
    },

    // OHL Players
    {
        id: 4, name: "Connor Bedard", number: 98, position: "Center", age: 18, birthYear: 2005,
        height: "5'10\"", weight: "185 lbs", heightCm: 178, weightLbs: 185,
        birthplace: "North Vancouver, BC", nationality: "Canada", team: "Regina Pats",
        league: "OHL", status: "Prospect", contract: "Unsigned", contractExpiry: 2024,
        rating: "A+", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Right",
        salary: "Junior", salaryValue: 0, gamesPlayed: 57, goals: 71,
        assists: 72, points: 143, plusMinus: 35, penaltyMinutes: 22,
        playerStyle: "Elite Scorer", yearsInLeague: 3, previousLeagues: ["CSSHL"],
        draftEligible: true
    },
    {
        id: 5, name: "Adam Fantilli", number: 11, position: "Center", age: 19, birthYear: 2004,
        height: "6'2\"", weight: "194 lbs", heightCm: 188, weightLbs: 194,
        birthplace: "Nobleton, ON", nationality: "Canada", team: "Chicago Steel",
        league: "OHL", status: "Prospect", contract: "Unsigned", contractExpiry: 2024,
        rating: "A", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "Junior", salaryValue: 0, gamesPlayed: 47, goals: 32,
        assists: 33, points: 65, plusMinus: 18, penaltyMinutes: 35,
        playerStyle: "Power Forward", yearsInLeague: 2, previousLeagues: ["USHL"],
        draftEligible: true
    },

    // WHL Players
    {
        id: 6, name: "Brayden Yager", number: 36, position: "Center", age: 18, birthYear: 2005,
        height: "6'0\"", weight: "170 lbs", heightCm: 183, weightLbs: 170,
        birthplace: "Saskatoon, SK", nationality: "Canada", team: "Moose Jaw Warriors",
        league: "WHL", status: "Prospect", contract: "Unsigned", contractExpiry: 2024,
        rating: "A-", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Right",
        salary: "Junior", salaryValue: 0, gamesPlayed: 67, goals: 34,
        assists: 61, points: 95, plusMinus: 42, penaltyMinutes: 18,
        playerStyle: "Two-Way Forward", yearsInLeague: 2, previousLeagues: ["SMAAAHL"],
        draftEligible: true
    },

    // QMJHL Players
    {
        id: 7, name: "Zach Benson", number: 9, position: "Left Wing", age: 18, birthYear: 2005,
        height: "5'10\"", weight: "160 lbs", heightCm: 178, weightLbs: 160,
        birthplace: "Chilliwack, BC", nationality: "Canada", team: "Winnipeg Ice",
        league: "QMJHL", status: "Prospect", contract: "Unsigned", contractExpiry: 2024,
        rating: "B+", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "Junior", salaryValue: 0, gamesPlayed: 68, goals: 36,
        assists: 66, points: 102, plusMinus: 28, penaltyMinutes: 46,
        playerStyle: "Playmaker", yearsInLeague: 2, previousLeagues: ["BCHL"],
        draftEligible: true
    },

    // NCAA Players
    {
        id: 8, name: "Ryan Leonard", number: 8, position: "Right Wing", age: 19, birthYear: 2004,
        height: "5'11\"", weight: "185 lbs", heightCm: 180, weightLbs: 185,
        birthplace: "Amherst, MA", nationality: "USA", team: "Boston College",
        league: "NCAA", status: "Prospect", contract: "Unsigned", contractExpiry: 2025,
        rating: "A-", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Right",
        salary: "College", salaryValue: 0, gamesPlayed: 39, goals: 31,
        assists: 29, points: 60, plusMinus: 22, penaltyMinutes: 24,
        playerStyle: "Sniper", yearsInLeague: 1, previousLeagues: ["USHL"],
        draftEligible: true
    },
    {
        id: 9, name: "Will Smith", number: 4, position: "Center", age: 18, birthYear: 2005,
        height: "6'0\"", weight: "175 lbs", heightCm: 183, weightLbs: 175,
        birthplace: "Lexington, MA", nationality: "USA", team: "Boston College",
        league: "NCAA", status: "Prospect", contract: "Unsigned", contractExpiry: 2025,
        rating: "A", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Right",
        salary: "College", salaryValue: 0, gamesPlayed: 41, goals: 25,
        assists: 46, points: 71, plusMinus: 35, penaltyMinutes: 12,
        playerStyle: "Playmaker", yearsInLeague: 1, previousLeagues: ["USHL"],
        draftEligible: true
    },

    // USHL Players
    {
        id: 10, name: "Gabe Perreault", number: 91, position: "Left Wing", age: 18, birthYear: 2005,
        height: "6'0\"", weight: "185 lbs", heightCm: 183, weightLbs: 185,
        birthplace: "Hinsdale, IL", nationality: "USA", team: "NTDP U18",
        league: "USHL", status: "Prospect", contract: "Unsigned", contractExpiry: 2024,
        rating: "A-", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "Junior", salaryValue: 0, gamesPlayed: 54, goals: 44,
        assists: 40, points: 84, plusMinus: 31, penaltyMinutes: 18,
        playerStyle: "Power Forward", yearsInLeague: 2, previousLeagues: ["High School"],
        draftEligible: true
    },

    // SHL Players
    {
        id: 11, name: "Leo Carlsson", number: 72, position: "Center", age: 18, birthYear: 2005,
        height: "6'3\"", weight: "194 lbs", heightCm: 191, weightLbs: 194,
        birthplace: "Karlstad, SWE", nationality: "Sweden", team: "Örebro HK",
        league: "SHL", status: "Prospect", contract: "Signed", contractExpiry: 2024,
        rating: "A+", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "€150K", salaryValue: 150000, gamesPlayed: 44, goals: 10,
        assists: 15, points: 25, plusMinus: 8, penaltyMinutes: 14,
        playerStyle: "Two-Way Forward", yearsInLeague: 2, previousLeagues: ["J20 Nationell"],
        draftEligible: true
    },

    // Liiga Players
    {
        id: 12, name: "Kasper Halttunen", number: 21, position: "Right Wing", age: 19, birthYear: 2004,
        height: "6'1\"", weight: "183 lbs", heightCm: 185, weightLbs: 183,
        birthplace: "Turku, FIN", nationality: "Finland", team: "HIFK",
        league: "Liiga", status: "Prospect", contract: "Signed", contractExpiry: 2024,
        rating: "B+", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "€75K", salaryValue: 75000, gamesPlayed: 50, goals: 12,
        assists: 8, points: 20, plusMinus: -2, penaltyMinutes: 22,
        playerStyle: "Sniper", yearsInLeague: 1, previousLeagues: ["U20 SM-sarja"],
        draftEligible: true
    },

    // KHL Players
    {
        id: 13, name: "Matvei Michkov", number: 39, position: "Right Wing", age: 19, birthYear: 2004,
        height: "5'10\"", weight: "172 lbs", heightCm: 178, weightLbs: 172,
        birthplace: "Perm, RUS", nationality: "Russia", team: "SKA St. Petersburg",
        league: "KHL", status: "Prospect", contract: "Signed", contractExpiry: 2026,
        rating: "A+", drafted: "Eligible 2023", draftYear: 2023, draftRound: null,
        draftOverall: null, draftTeam: null, shoots: "Left",
        salary: "$500K", salaryValue: 500000, gamesPlayed: 30, goals: 8,
        assists: 12, points: 20, plusMinus: 3, penaltyMinutes: 8,
        playerStyle: "Elite Scorer", yearsInLeague: 2, previousLeagues: ["MHL"],
        draftEligible: true
    },

    // Czech Extraliga
    {
        id: 14, name: "David Jiricek", number: 6, position: "Defense", age: 19, birthYear: 2004,
        height: "6'3\"", weight: "194 lbs", heightCm: 191, weightLbs: 194,
        birthplace: "Klatovy, CZE", nationality: "Czech Republic", team: "HC Plzen",
        league: "Czech Extraliga", status: "Prospect", contract: "Signed", contractExpiry: 2024,
        rating: "A", drafted: "2022 6th Overall", draftYear: 2022, draftRound: 1,
        draftOverall: 6, draftTeam: "Columbus Blue Jackets", shoots: "Right",
        salary: "€100K", salaryValue: 100000, gamesPlayed: 45, goals: 6,
        assists: 18, points: 24, plusMinus: 12, penaltyMinutes: 52,
        playerStyle: "Offensive Defenseman", yearsInLeague: 2, previousLeagues: ["Czech U20"],
        draftEligible: false
    },
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
