import "./GoogleFormEmbed.css";

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
  const embedUrl = formUrl.includes("/viewform")
    ? formUrl.replace(/\/viewform.*$/, "/viewform?embedded=true")
    : formUrl;

  return (
    <section className="googleFormEmbed">
      <h3 className="googleFormEmbed__title">{title}</h3>
      <p className="googleFormEmbed__description">{description}</p>
      {embedUrl ? (
        <iframe
          className="googleFormEmbed__iframe"
          src={embedUrl}
          title={title}
          loading="lazy"
        />
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
      <details className="googleFormEmbed__settingsNote">
        <summary>Visitors asked to sign in?</summary>
        <p>
          In your Google Form editor, open <strong>Settings</strong> and make sure:
        </p>
        <ul>
          <li>
            <strong>&ldquo;Limit to 1 response&rdquo;</strong> is turned <em>off</em>
          </li>
          <li>
            <strong>&ldquo;Restrict to users in&hellip;&rdquo;</strong> is turned <em>off</em>
          </li>
          <li>
            No <strong>File upload</strong> questions are present
          </li>
        </ul>
      </details>
    </section>
  );
};

export default GoogleFormEmbed;
