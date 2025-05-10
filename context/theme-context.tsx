"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ColorPalette = "earthy" | "pastel"

interface ThemeContextType {
  colorPalette: ColorPalette
  setColorPalette: (palette: ColorPalette) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorPalette, setColorPalette] = useState<ColorPalette>("earthy")

  useEffect(() => {
    // Apply the selected color palette to the document
    document.documentElement.classList.remove("palette-earthy", "palette-pastel")
    document.documentElement.classList.add(`palette-${colorPalette}`)

    // Store the preference in localStorage
    localStorage.setItem("colorPalette", colorPalette)
  }, [colorPalette])

  // Initialize from localStorage on client side
  useEffect(() => {
    const savedPalette = localStorage.getItem("colorPalette") as ColorPalette | null
    if (savedPalette && (savedPalette === "earthy" || savedPalette === "pastel")) {
      setColorPalette(savedPalette)
    }
  }, [])

  return <ThemeContext.Provider value={{ colorPalette, setColorPalette }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
