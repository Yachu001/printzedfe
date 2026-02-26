import { Instagram, Facebook, X, Youtube } from "lucide-react"

const FooterLogo = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-white">logo</h2>

      <div>
        <h4 className="text-white font-semibold">We Deliver The Best</h4>
        <p className="text-sm text-gray-400 mt-2 max-w-xs">
          faucibus in ultrices Nunc laoreet non nec tincidunt tortor.
          est. ex risus felis, tincidunt lorem, sodales. Ut ex in quis
          faucibus at, Donec adipiscing ex sit
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        <div className="bg-gray-700 p-2 rounded-full">
          <Instagram size={16} />
        </div>
        <div className="bg-gray-700 p-2 rounded-full">
          <Facebook size={16} />
        </div>
        <div className="bg-gray-700 p-2 rounded-full">
          <X size={16} />
        </div>
        <div className="bg-gray-700 p-2 rounded-full">
          <Youtube size={16} />
        </div>
      </div>

    </div>
  )
}

export default FooterLogo