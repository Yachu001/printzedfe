import FooterLogo from "./FooterLogo"
import FooterLinks from "./FooterLinks"
import FooterFeatures from "./FooterFeatures"
import FooterContact from "./FooterContact"

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#212121] py-16 px-6 xl:px-[11%]">

      <div className="grid  md:grid-cols-4 gap-3">

        <FooterLogo />
        <FooterLinks />
        <FooterFeatures />
        <FooterContact />

      </div>

    </footer>
  )
}

export default Footer