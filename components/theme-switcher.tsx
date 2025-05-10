"use client"

import { useTheme } from "@/context/theme-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

export default function ThemeSwitcher() {
  const { colorPalette, setColorPalette } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Palette className="h-4 w-4" />
          <span>Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={colorPalette === "earthy" ? "bg-primary/10" : ""}
          onClick={() => setColorPalette("earthy")}
        >
          Earthy
        </DropdownMenuItem>
        <DropdownMenuItem
          className={colorPalette === "pastel" ? "bg-primary/10" : ""}
          onClick={() => setColorPalette("pastel")}
        >
          Pastel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
