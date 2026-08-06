const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cosmopolitaneyecare/",
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Cosmopolitan.Eyecare.NY",
    icon: <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H8v3h2.8v8H14Z" fill="currentColor" stroke="none" />,
  },
  {
    label: "X",
    href: "https://x.com/Cosmo_Eye",
    icon: <path d="M5 4l5.3 7.1L5 20h2.4l4-5.7 4.3 5.7H20l-5.6-7.5L19.3 4h-2.4l-3.6 5.2L9.4 4H5Zm3.4 1.8h.1l9 12.4h-1.8L6.8 5.8h1.6Z" fill="currentColor" stroke="none" />,
  },
  {
    label: "Google Maps",
    href: "https://maps.app.goo.gl/JCuUL9935ZF4yxYW8",
    icon: <><path d="M12 3a7 7 0 0 0-7 7c0 5.25 7 11 7 11s7-5.75 7-11a7 7 0 0 0-7-7Z" /><circle cx="12" cy="10" r="2.3" /></>,
  },
] as const;

export function SocialIconLinks({ className = "" }: { className?: string }) {
  return <div className={`social-icon-links ${className}`.trim()}>{socialLinks.map((social) => <a href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Cosmopolitan Eyecare on ${social.label}`} key={social.label}><svg viewBox="0 0 24 24" aria-hidden="true">{social.icon}</svg></a>)}</div>;
}
