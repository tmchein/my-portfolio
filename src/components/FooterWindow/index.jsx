import contact from "../../utils/Contact";
import FooterElement from "../FooterElement";

export default function FooterWindow() {
  return (
    <footer
      className="h-20 px-8 bg-gray-900 rounded-3xl bg-clip-padding
      backdrop-filter backdrop-blur-3xl bg-opacity-25 border border-neutral-500
       self-end place-self-center mb-2 hidden lg:block"
    >
      <div className="w-full h-full flex row items-center justify-center gap-4">
        {contact.map(({ name, url, icon, color, imgConfig }) => (
          <FooterElement
            key={name}
            name={name}
            url={url}
            icon={icon}
            color={color}
            imgConfig={imgConfig}
          />
        ))}
      </div>
    </footer>
  );
}
