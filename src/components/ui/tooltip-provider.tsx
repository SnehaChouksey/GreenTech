
import * as React from "react"
import { Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

type TooltipHelpProps = {
  text: string
  icon?: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  className?: string
  iconClassName?: string
  contentClassName?: string
}

export const TooltipHelp = ({
  text,
  icon = <Info className="h-4 w-4" />,
  side = "top",
  align = "center",
  className = "",
  iconClassName = "",
  contentClassName = "",
}: TooltipHelpProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className={`inline-flex cursor-help items-center text-muted-foreground hover:text-foreground ${className}`}>
          <span className={`ml-1 ${iconClassName}`}>{icon}</span>
        </span>
      </TooltipTrigger>
      <TooltipContent side={side} align={align} className={contentClassName}>
        <p className="max-w-xs text-sm">{text}</p>
      </TooltipContent>
    </Tooltip>
  )
}

type CustomTooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
  className?: string
  contentClassName?: string
}

export const CustomTooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 300,
  className = "",
  contentClassName = "",
}: CustomTooltipProps) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        <span className={className}>{children}</span>
      </TooltipTrigger>
      <TooltipContent side={side} align={align} className={contentClassName}>
        {content}
      </TooltipContent>
    </Tooltip>
  )
}

type TooltipContextType = {
  delayDuration: number
}

const TooltipContext = React.createContext<TooltipContextType>({
  delayDuration: 300,
})

export const useTooltip = () => React.useContext(TooltipContext)

type AppTooltipProviderProps = {
  children: React.ReactNode
  delayDuration?: number
}

export const AppTooltipProvider = ({
  children,
  delayDuration = 300,
}: AppTooltipProviderProps) => {
  const contextValue = React.useMemo(
    () => ({
      delayDuration,
    }),
    [delayDuration]
  )

  return (
    <TooltipContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={delayDuration}>
        {children}
      </TooltipProvider>
    </TooltipContext.Provider>
  )
}
