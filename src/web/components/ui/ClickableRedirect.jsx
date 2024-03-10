import Link from "next/link"

const ClickableRedirect = ({ redirectMessage, redirectLink, redirectLinkLabel }) => (
  <span className="text-sm text-[#111]">
    {redirectMessage}<br />
    <Link href={redirectLink} className="text-[#0E8388]">
      {redirectLinkLabel}
    </Link>
  </span>
)

export default ClickableRedirect
