import { Search } from "lucide-react"
import { Button } from "@/utils/button"

export function SearchButton() {
  return (
    <Button variant="ghost" size="icon">
      <Search className="h-5 w-5" />
      <span className="sr-only">Search</span>
    </Button>
  )
}

