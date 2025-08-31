const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} React Minimalistic Icons. MIT License.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/atiqullahsadeqi/react-minimalistic-icons-website"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Website
            </a>
            <a
              href="https://github.com/atiqullahsadeqi/react-minimalistic-icons"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Library
            </a>
            <a
              href="https://www.npmjs.com/package/react-minimalistic-icons"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              NPM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
