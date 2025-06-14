import { QuickAction } from './types'

export const quickActions: QuickAction[] = [
    {
        id: 'cap-check',
        label: 'Cap Analysis',
        icon: null, // Will be set in component
        command: 'Can we afford to trade for Connor McDavid at $12.5M? What would we need to send back?',
        description: 'Analyze salary cap implications of trades',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'player-stats',
        label: 'Player Stats',
        icon: null, // Will be set in component
        command: 'Compare Jordan Kyrou\'s stats to other top-6 wingers this season',
        description: 'Get detailed player performance analysis',
        color: 'from-green-500 to-green-600'
    },
    {
        id: 'contract-info',
        label: 'Contract Analysis',
        icon: null, // Will be set in component
        command: 'What are the best value contracts on our roster? Who should we prioritize for extensions?',
        description: 'Analyze contract values and extensions',
        color: 'from-purple-500 to-purple-600'
    },
    {
        id: 'trade-scenarios',
        label: 'Trade Ideas',
        icon: null, // Will be set in component
        command: 'Suggest realistic trade targets for a top-4 defenseman within our budget',
        description: 'Generate trade scenarios and targets',
        color: 'from-orange-500 to-orange-600'
    },
    {
        id: 'draft-analysis',
        label: 'Draft Strategy',
        icon: null, // Will be set in component
        command: 'Analyze our draft needs and suggest strategy for the upcoming draft',
        description: 'Draft analysis and prospect evaluation',
        color: 'from-red-500 to-red-600'
    },
    {
        id: 'roster-optimization',
        label: 'Roster Help',
        icon: null, // Will be set in component
        command: 'How can we optimize our lineup for better cap efficiency and performance?',
        description: 'Roster construction and optimization',
        color: 'from-indigo-500 to-indigo-600'
    }
]

export const getCurrentBluesContext = () => {
    return `
CURRENT ST. LOUIS BLUES ROSTER SNAPSHOT:
- Salary Cap Space: ~$12.3M remaining  
- Key Contracts: Kyrou ($8.125M), Buchnevich ($5.8M), Parayko ($6.5M)
- Prospects: Bolduc, Neighbors, Perunovich developing
- Draft Capital: Multiple picks available for 2024
- Trade Assets: Veteran depth players, prospect pool
- Team Needs: Top-6 scoring, defensive depth, goaltending stability
- Cap Situation: Flexible with potential for significant moves
- Current Date: ${new Date().toLocaleDateString('en-US')}
- Season: 2023-24 NHL Regular Season
    `
}
