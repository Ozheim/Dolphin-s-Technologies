import { React } from 'react';
import classNames from 'classnames';
import "../Styles/Components/footer.scss";

const Footer = (props) => {
  const waveBackground = props.isHeadhunterPage
    ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjE5OCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iLTEwLjk1OSUiIHkyPSIxMDAlIj48c3RvcCBzdG9wLWNvbG9yPSIjODAwMDIwIiBzdG9wLW9wYWNpdHk9Ii4yNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MDAwMjAiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS4wMDUgMTIxQzMxMSAxMjEgNDA5Ljg5OC0uMjUgODExIDBjNDAwIDAgNTAwIDEyMSA3ODkgMTIxdjc3SDBzLjAwNS00OCAuMDA1LTc3eiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTYwMCAwKSIvPjwvc3ZnPg==') repeat-x"
    : "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjE5OCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iLTEwLjk1OSUiIHkyPSIxMDAlIj48c3RvcCBzdG9wLWNvbG9yPSIjNTdCQkJDIiBzdG9wLW9wYWNpdHk9Ii4yNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMTU4NzEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS4wMDUgMTIxQzMxMSAxMjEgNDA5Ljg5OC0uMjUgODExIDBjNDAwIDAgNTAwIDEyMSA3ODkgMTIxdjc3SDBzLjAwNS00OCAuMDA1LTc3eiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTYwMCAwKSIvPjwvc3ZnPg==') repeat-x";

  return (
    <>
      <div id="vague" className={classNames('ocean', props.className)} style={props.style}>
        <div className="wave" style={{ background: waveBackground }}></div>
        <div className="wave wave2" style={{ background: waveBackground }}></div>
      </div>
    </>
  );
};

export default Footer;
