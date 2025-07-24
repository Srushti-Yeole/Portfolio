import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gray-800 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300 mb-2">
            Made with <Heart className="h-4 w-4 text-pink-400" fill="currentColor" /> by
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-semibold">
              Srushti Yeole
            </span>
          </p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
