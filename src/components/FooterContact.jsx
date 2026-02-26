import { Phone, Mail, MapPin, Send } from "lucide-react"

const FooterContact = () => {
  return (
    <div className="space-y-4">

      <h4 className="text-white font-semibold">Get In Touch</h4>

      <div className="text-sm text-gray-400 space-y-2">

        <p className="flex items-center gap-2">
          <Phone size={14} />
          +971 00 000 000 || +971 00 000 0000
        </p>

        <p className="flex items-center gap-2">
          <Mail size={14} />
          info@tested.ae || test@printzed.ae
        </p>

        <p className="flex items-start gap-2">
          <MapPin size={14} className="mt-1" />
          Shop No: 13, xxxxxxxxxxxxxxxxx
          <br />
          xxxxxxxxxxxxxxxxxxxx Dubai - U.A.E.
        </p>

      </div>

      {/* Report Input */}
      <div>
        <h4 className="text-white font-semibold mt-4">Report</h4>

        <div className="mt-2 bg-gray-700 rounded-lg flex items-center px-3 py-2">
          <input
            type="text"
            placeholder="Note"
            className="bg-transparent outline-none text-sm text-white flex-1"
          />
          <Send size={16} />
        </div>
      </div>

    </div>
  )
}

export default FooterContact