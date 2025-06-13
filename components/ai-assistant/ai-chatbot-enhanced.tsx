"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
    X,
    Send,
    Minimize2,
    Maximize2,
    Bot,
    User,
    Calculator,
    TrendingUp,
    Calendar,
    Mail,
    DollarSign,
    Users,
    FileText,
    AlertCircle,
    Loader2,
    Move,
    MessageCircle,
    ChevronUp,
    RotateCcw,
    Grip
} from "lucide-react"
import { cn } from "@/lib/utils"
import Draggable from 'react-draggable'

interface Message {
    id: string
    type: 'user' | 'assistant' | 'error'
    content: string
    timestamp: Date
    actions?: Array<{
        type: 'cap-check' | 'player-stats' | 'create-meeting' | 'send-email' | 'contract-lookup'
        data?: any
    }>
}

interface QuickAction {
    id: string
    label: string
    icon: React.ReactNode
    command: string
    description: string
}

interface Position {
    x: number
    y: number
}

type DockPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'floating'

const quickActions: QuickAction[] = [
    {
        id: 'cap-check',
        label: 'Cap Analysis',
        icon: <Calculator className="h-4 w-4" />,
        command: 'Can we afford to trade for Connor McDavid at $12.5M? What would we need to send back?',
        description: 'Analyze salary cap implications of trades'
    },
    {
        id: 'player-stats',
        label: 'Player Stats',
        icon: <TrendingUp className="h-4 w-4" />,
        command: 'Compare Jordan Kyrou\'s stats to other top-6 wingers this season',
        description: 'Get detailed player performance analysis'
    },
    {
        id: 'contract-info',
        label: 'Contract Analysis',
        icon: <DollarSign className="h-4 w-4" />,
        command: 'What are the best value contracts on our roster? Who should we prioritize for extensions?',
        description: 'Analyze contract values and extensions'
    },
    {
        id: 'trade-scenarios',
        label: 'Trade Ideas',
        icon: <Users className="h-4 w-4" />,
        command: 'Suggest realistic trade targets for a top-4 defenseman within our budget',
        description: 'Generate trade scenarios and targets'
    },
    {
        id: 'draft-analysis',
        label: 'Draft Strategy',
        icon: <FileText className="h-4 w-4" />,
        command: 'Analyze our draft needs and suggest strategy for the upcoming draft',
        description: 'Draft analysis and prospect evaluation'
    },
    {
        id: 'roster-optimization',
        label: 'Roster Help',
        icon: <Users className="h-4 w-4" />,
        command: 'How can we optimize our lineup for better cap efficiency and performance?',
        description: 'Roster construction and optimization'
    }
]

export function AIChatbotEnhanced() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const [dockPosition, setDockPosition] = useState<DockPosition>('bottom-right')
    const [isVisible, setIsVisible] = useState(true)
    const [lastActivity, setLastActivity] = useState(Date.now())
    const [isMobile, setIsMobile] = useState(false)

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'assistant',
            content: "Hi! I'm your BluesOps AI assistant. I can help you with salary cap checks, player statistics, contract information, scheduling meetings, and more. What would you like to know?",
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const dragRef = useRef<HTMLDivElement>(null)
    const inactivityTimer = useRef<NodeJS.Timeout>()

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Auto-hide functionality
    useEffect(() => {
        const resetInactivityTimer = () => {
            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current)
            }

            setLastActivity(Date.now())
            if (!isVisible) setIsVisible(true)

            // Auto-minimize after 2 minutes of inactivity
            inactivityTimer.current = setTimeout(() => {
                if (isOpen && !isMinimized) {
                    setIsMinimized(true)
                }
            }, 120000) // 2 minutes
        }

        // Reset timer on user activity
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
        events.forEach(event => {
            document.addEventListener(event, resetInactivityTimer, true)
        })

        resetInactivityTimer()

        return () => {
            events.forEach(event => {
                document.removeEventListener(event, resetInactivityTimer, true)
            })
            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current)
            }
        }
    }, [isOpen, isMinimized, isVisible])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current && !isMobile) {
            inputRef.current.focus()
        }
    }, [isOpen, isMinimized, isMobile])

    const getCurrentBluesContext = () => {
        return `
CURRENT ST. LOUIS BLUES ROSTER SNAPSHOT:
- Salary Cap Space: ~$12.3M remaining  
- Key Contracts: Kyrou ($8.125M), Buchnevich ($5.8M), Parayko ($6.5M)
- Prospects: Bolduc, Neighbors, Perunovich developing
- Draft Capital: Multiple picks available for 2024
- Trade Assets: Veteran depth players, prospect pool
- Team Needs: Top-6 scoring, defensive depth, goaltending stability
- Cap Situation: Flexible with potential for significant moves
- Current Date: ${new Date().toLocaleDateString()}
- Season: 2023-24 NHL Regular Season
    `
    }

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        const currentInput = inputValue
        setInputValue("")
        setIsTyping(true)

        try {
            // Convert messages to OpenAI format
            const chatMessages = messages.map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            }))

            // Add the current user message
            chatMessages.push({
                role: 'user',
                content: currentInput
            })

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: chatMessages,
                    context: getCurrentBluesContext()
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Failed to get response from AI')
            }

            const data = await response.json()

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content: data.message,
                timestamp: new Date(),
                actions: generateActions(currentInput)
            }

            setMessages(prev => [...prev, assistantMessage])
        } catch (error) {
            console.error('Chat error:', error)
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'error',
                content: error instanceof Error ? error.message : 'Failed to get response from AI assistant. Please try again.',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsTyping(false)
        }
    }

    const generateActions = (input: string): Message['actions'] => {
        const lowerInput = input.toLowerCase()
        const actions: Message['actions'] = []

        if (lowerInput.includes('cap') || lowerInput.includes('trade')) {
            actions.push({ type: 'cap-check' })
        }
        if (lowerInput.includes('stats')) {
            actions.push({ type: 'player-stats' })
        }
        if (lowerInput.includes('contract')) {
            actions.push({ type: 'contract-lookup' })
        }
        if (lowerInput.includes('meeting')) {
            actions.push({ type: 'create-meeting' })
        }
        if (lowerInput.includes('email')) {
            actions.push({ type: 'send-email' })
        }

        return actions.length > 0 ? actions : undefined
    }

    const handleQuickAction = (action: QuickAction) => {
        setInputValue(action.command)
        if (inputRef.current && !isMobile) {
            inputRef.current.focus()
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const handleDrag = useCallback((e: any, data: any) => {
        setPosition({ x: data.x, y: data.y })
        setDockPosition('floating')
    }, [])

    const handleDragStart = () => {
        setIsDragging(true)
    }

    const handleDragStop = useCallback((e: any, data: any) => {
        setIsDragging(false)

        // Auto-dock logic based on final position
        const { innerWidth, innerHeight } = window
        const threshold = 100

        if (data.x < threshold && data.y < threshold) {
            setDockPosition('top-left')
            setPosition({ x: 0, y: 0 })
        } else if (data.x > innerWidth - threshold && data.y < threshold) {
            setDockPosition('top-right')
            setPosition({ x: 0, y: 0 })
        } else if (data.x < threshold && data.y > innerHeight - threshold) {
            setDockPosition('bottom-left')
            setPosition({ x: 0, y: 0 })
        } else if (data.x > innerWidth - threshold && data.y > innerHeight - threshold) {
            setDockPosition('bottom-right')
            setPosition({ x: 0, y: 0 })
        } else {
            setDockPosition('floating')
            setPosition({ x: data.x, y: data.y })
        }
    }, [])

    const resetPosition = () => {
        setDockPosition('bottom-right')
        setPosition({ x: 0, y: 0 })
    }

    const getPositionClasses = () => {
        if (dockPosition === 'floating') return ''

        const positions = {
            'bottom-right': 'bottom-6 right-6',
            'bottom-left': 'bottom-6 left-6',
            'top-right': 'top-6 right-6',
            'top-left': 'top-6 left-6'
        }
        return positions[dockPosition] || positions['bottom-right']
    }

    // Mobile Sheet Version
    if (isMobile) {
        return (
            <>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
                            size="icon"
                        >
                            <MessageCircle className="h-5 w-5 text-white" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[80vh] p-0">
                        <SheetHeader className="p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border-b">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="bg-blue-600 text-white">
                                            <Bot className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <SheetTitle className="text-sm font-semibold text-slate-900">BluesOps AI Assistant</SheetTitle>
                                    <p className="text-xs text-slate-600">Hockey Operations Helper</p>
                                </div>
                            </div>
                        </SheetHeader>

                        <div className="flex flex-col h-[calc(80vh-5rem)]">
                            {/* Quick Actions */}
                            <div className="p-4 border-b bg-slate-50/50">
                                <p className="text-xs font-medium text-slate-700 mb-3">Quick Actions</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickActions.slice(0, 4).map((action) => (
                                        <Button
                                            key={action.id}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleQuickAction(action)}
                                            className="h-10 text-xs justify-start bg-white hover:bg-blue-50 border-slate-200"
                                        >
                                            {action.icon}
                                            <span className="ml-2 truncate">{action.label}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Messages */}
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={cn(
                                                "flex gap-3",
                                                message.type === 'user' ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            {message.type === 'assistant' && (
                                                <Avatar className="h-7 w-7 mt-1">
                                                    <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                        <Bot className="h-4 w-4" />
                                                    </AvatarFallback>
                                                </Avatar>
                                            )}
                                            <div
                                                className={cn(
                                                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                                                    message.type === 'user'
                                                        ? "bg-blue-600 text-white"
                                                        : message.type === 'error'
                                                            ? "bg-red-100 text-red-800 border border-red-200"
                                                            : "bg-slate-100 text-slate-900"
                                                )}
                                            >
                                                {message.type === 'error' && (
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <AlertCircle className="h-4 w-4" />
                                                        <span className="font-medium text-xs">Error</span>
                                                    </div>
                                                )}
                                                <p className="text-sm leading-relaxed">{message.content}</p>
                                            </div>
                                            {message.type === 'user' && (
                                                <Avatar className="h-7 w-7 mt-1">
                                                    <AvatarFallback className="bg-slate-600 text-white text-xs">
                                                        <User className="h-4 w-4" />
                                                    </AvatarFallback>
                                                </Avatar>
                                            )}
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex gap-3 justify-start">
                                            <Avatar className="h-7 w-7 mt-1">
                                                <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                    <Bot className="h-4 w-4" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="bg-slate-100 rounded-lg px-3 py-2">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>

                            {/* Input */}
                            <div className="p-4 border-t bg-white">
                                <div className="flex gap-2">
                                    <Input
                                        ref={inputRef}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask about cap space, player stats, contracts..."
                                        className="flex-1 border-slate-200 focus:border-blue-300 focus:ring-blue-200"
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isTyping}
                                        className="bg-blue-600 hover:bg-blue-700"
                                        size="icon"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </>
        )
    }

    // Desktop Draggable Version
    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50",
                    "backdrop-blur-sm border border-white/20",
                    getPositionClasses()
                )}
                size="icon"
            >
                <Bot className="h-6 w-6 text-white" />
            </Button>
        )
    }

    return (
        <Draggable
            handle=".drag-handle"
            position={dockPosition === 'floating' ? position : { x: 0, y: 0 }}
            onDrag={handleDrag}
            onStart={handleDragStart}
            onStop={handleDragStop}
            disabled={dockPosition !== 'floating'}
        >
            <Card
                className={cn(
                    "fixed w-96 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md shadow-2xl border-slate-200/60 z-50 transition-all duration-300",
                    "ring-1 ring-black/5",
                    isMinimized ? "h-16" : "h-[600px] max-h-[calc(100vh-3rem)]",
                    isDragging && "shadow-3xl scale-105",
                    dockPosition === 'floating' ? "" : getPositionClasses()
                )}
            >
                <CardHeader className="pb-3 bg-gradient-to-r from-blue-50/90 to-blue-100/50 border-b border-slate-200/60 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-blue-600 text-white">
                                        <Bot className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <CardTitle className="text-sm font-semibold text-slate-900">BluesOps AI</CardTitle>
                                <p className="text-xs text-slate-600">Hockey Operations Assistant</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={resetPosition}
                                className="h-8 w-8 hover:bg-blue-100"
                                title="Reset Position"
                            >
                                <RotateCcw className="h-3 w-3" />
                            </Button>
                            <div
                                className="drag-handle h-8 w-8 flex items-center justify-center hover:bg-blue-100 rounded cursor-move"
                                title="Drag to move"
                            >
                                <Grip className="h-3 w-3 text-slate-500" />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="h-8 w-8 hover:bg-blue-100"
                            >
                                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 hover:bg-blue-100"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                {!isMinimized && (
                    <CardContent className="p-0 flex flex-col h-[calc(600px-5rem)]">
                        {/* Quick Actions */}
                        <div className="p-4 border-b bg-slate-50/50 backdrop-blur-sm">
                            <p className="text-xs font-medium text-slate-700 mb-3">Quick Actions</p>
                            <div className="grid grid-cols-3 gap-2">
                                {quickActions.slice(0, 6).map((action) => (
                                    <Button
                                        key={action.id}
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleQuickAction(action)}
                                        className="h-8 text-xs justify-start bg-white/90 hover:bg-blue-50 border-slate-200/60 backdrop-blur-sm"
                                        title={action.description}
                                    >
                                        {action.icon}
                                        <span className="ml-1 truncate">{action.label}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={cn(
                                            "flex gap-3",
                                            message.type === 'user' ? "justify-end" : "justify-start"
                                        )}
                                    >
                                        {message.type === 'assistant' && (
                                            <Avatar className="h-6 w-6 mt-1">
                                                <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                    <Bot className="h-3 w-3" />
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div
                                            className={cn(
                                                "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                                                message.type === 'user'
                                                    ? "bg-blue-600 text-white"
                                                    : message.type === 'error'
                                                        ? "bg-red-100 text-red-800 border border-red-200"
                                                        : "bg-slate-100/90 text-slate-900 backdrop-blur-sm"
                                            )}
                                        >
                                            {message.type === 'error' && (
                                                <div className="flex items-center gap-2 mb-1">
                                                    <AlertCircle className="h-4 w-4" />
                                                    <span className="font-medium text-xs">Error</span>
                                                </div>
                                            )}
                                            <p>{message.content}</p>
                                            {message.actions && (
                                                <div className="flex gap-2 mt-2 flex-wrap">
                                                    {message.actions.map((action, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="text-xs bg-white/20 hover:bg-white/30 cursor-pointer"
                                                        >
                                                            {action.type === 'cap-check' && <Calculator className="h-3 w-3 mr-1" />}
                                                            {action.type === 'player-stats' && <TrendingUp className="h-3 w-3 mr-1" />}
                                                            {action.type === 'contract-lookup' && <FileText className="h-3 w-3 mr-1" />}
                                                            {action.type === 'create-meeting' && <Calendar className="h-3 w-3 mr-1" />}
                                                            {action.type === 'send-email' && <Mail className="h-3 w-3 mr-1" />}
                                                            {action.type.replace('-', ' ')}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {message.type === 'user' && (
                                            <Avatar className="h-6 w-6 mt-1">
                                                <AvatarFallback className="bg-slate-600 text-white text-xs">
                                                    <User className="h-3 w-3" />
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-3 justify-start">
                                        <Avatar className="h-6 w-6 mt-1">
                                            <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                <Bot className="h-3 w-3" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="bg-slate-100/90 rounded-lg px-3 py-2 backdrop-blur-sm">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        {/* Input */}
                        <div className="p-4 border-t bg-white/90 backdrop-blur-sm">
                            <div className="flex gap-2">
                                <Input
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about cap space, player stats, contracts..."
                                    className="flex-1 border-slate-200/60 focus:border-blue-300 focus:ring-blue-200 bg-white/90"
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-blue-600 hover:bg-blue-700"
                                    size="icon"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                )}
            </Card>
        </Draggable>
    )
}
