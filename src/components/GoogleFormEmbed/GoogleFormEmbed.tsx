import "./GoogleFormEmbed.css";

import { FiExternalLink } from "react-icons/fi";

interface GoogleFormEmbedProps {
  title: string;
  description: string;
  formUrl: string;
  envHint: string;
}

const GoogleFormEmbed = ({
  title,
  description,
  formUrl,
  envHint,
}: GoogleFormEmbedProps) => {
  return (
    <section className="googleFormEmbed">
      <h3 className="googleFormEmbed__title">{title}</h3>
      <p className="googleFormEmbed__description">{description}</p>
      {formUrl ? (
        <div className="googleFormEmbed__linkWrapper">
          <a
            className="googleFormEmbed__link"
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} — opens in new tab`}
          >
            <span>Open Form</span>
            <FiExternalLink className="googleFormEmbed__linkIcon" />
          </a>
        </div>
      ) : (
        <div className="googleFormEmbed__placeholder">
          <p>
            Add your Google Form link in <code>.env</code> as{" "}
            <code>{envHint}</code>, or set it in{" "}
            <code>src/config/forms.ts</code>.
          </p>
          <p className="googleFormEmbed__placeholderHint">
            Use the form&apos;s share URL (ends in <code>/viewform</code>).
          </p>
        </div>
      )}
    </section>
  );
};

export default GoogleFormEmbed;
