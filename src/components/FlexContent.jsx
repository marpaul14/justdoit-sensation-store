function FlexContent({ endpoint: { title, heading, text, img, btn, url } }) {
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url}>
            <button type="button" className="">
              {btn}
            </button>
          </a>
        </div>
        <div className="">
          <img src={img} alt={`img/${heading}`} className="" />
        </div>
      </div>
    </>
  );
}

export default FlexContent;
