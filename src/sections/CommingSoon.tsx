const CommingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="gap-10 h-full col-center">
        <img src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="mt-[250px] text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="" className="w-20 md:w-32" />
          <img
            src="/images/x-logo.svg"
            alt="Xbox logo"
            className="w-40 md:w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
