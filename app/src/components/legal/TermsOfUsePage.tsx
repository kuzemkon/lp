const TermsOfUsePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Legal</p>
        <h1 className="text-4xl font-semibold text-graphite-800">Terms of Use</h1>
        <p className="mt-2 text-base text-graphite-500">
          These terms govern your use of the FundView platform and any data or content provided through it.
        </p>
      </div>
      <section className="space-y-3 text-sm leading-relaxed text-graphite-600">
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Acceptable use</h2>
          <p>
            You agree to use FundView only for authorized business purposes, comply with applicable laws, and
            keep account credentials confidential. Unauthorized access or data scraping is prohibited.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Confidentiality</h2>
          <p>
            Portfolio information displayed in the platform is confidential. You are responsible for ensuring
            the data you export or share complies with your internal policies and regulatory obligations.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Disclaimers</h2>
          <p>
            FundView provides information “as is” without warranties. Investment decisions should be based on
            your own diligence and independent advice.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Termination</h2>
          <p>
            We may suspend or terminate access that violates these terms. You may discontinue use at any time
            by contacting support@fundview.app.
          </p>
        </div>
      </section>
      <p className="text-xs text-graphite-400">Effective as of {new Date().toLocaleDateString('en-US')}</p>
    </div>
  );
};

export default TermsOfUsePage;
