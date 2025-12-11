const PrivacyPolicyPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Legal</p>
        <h1 className="text-4xl font-semibold text-graphite-800">Privacy Policy</h1>
        <p className="mt-2 text-base text-graphite-500">
          This Privacy Policy explains how FundView collects, uses, and protects information about your
          organization when you use our services.
        </p>
      </div>
      <section className="space-y-3 text-sm leading-relaxed text-graphite-600">
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Information we collect</h2>
          <p>
            We collect information that you provide directly (account details, portfolio data) and
            technical information generated through your use of the platform such as device and usage
            metadata.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">How we use information</h2>
          <p>
            Data is used to deliver the service, maintain security, comply with legal requests, and send
            important service communications. We never sell your data to third parties.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Your rights</h2>
          <p>
            You may request access, correction, or deletion of your data at any time by contacting
            privacy@fundview.app. We respond to verified requests within 30 days.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-graphite-800">Contact</h2>
          <p>
            Questions about this policy can be sent to privacy@fundview.app or FundView Legal, 123 Market
            Street, San Francisco, CA 94105.
          </p>
        </div>
      </section>
      <p className="text-xs text-graphite-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
    </div>
  );
};

export default PrivacyPolicyPage;
