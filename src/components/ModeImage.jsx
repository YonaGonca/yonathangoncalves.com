import { useSite } from "../context/SiteContext";

export default function ModeImage({ light, dark, alt, className, title }) {
  const { darkMode } = useSite();
  return <img src={darkMode ? dark : light} alt={alt} className={className} title={title} />;
}
