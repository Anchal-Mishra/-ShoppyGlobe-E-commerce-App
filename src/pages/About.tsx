const About = (): JSX.Element => {
  // A simple about page
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center mb-6">
          ABOUT US
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed m-6 text-center">
        Welcome to ShoppyGlobe, your ultimate destination for top-quality products from across the globe. We strive to deliver an exceptional shopping experience with a vast selection, competitive prices, and outstanding customer service. Our mission is to make online shopping effortless, enjoyable, and rewarding for all.
        </p>

        <div className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
            At ShoppyGlobe, we aim to make shopping simple, enjoyable, and convenient for all. We offer a wide variety of products, from electronics to fashion, at great prices. Our goal is to create a seamless shopping experience where customers can explore new items and easily find what they’re looking for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Shop With Us?</h2>
            <ul className="list-disc pl-5 text-gray-700 list-none" >
              <li>Wide variety of products from trusted brands</li>
              <li>Fast and secure checkout process</li>
              <li>Excellent customer support</li>
              <li>Easy returns and refunds</li>
              <li>Regular discounts and special offers</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 text-center">
            If you have any questions or feedback, feel free to{" "}
            <a href="/contact" className="text-blue-500 underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
