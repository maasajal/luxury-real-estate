import aboutBanner from "../../assets/about.jpg";
const About = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content py-48">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              Discover the story behind our passion for exceptional real estate.
              Learn more about our commitment to delivering unparalleled service
              and luxury living experiences."
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 max-w-6xl mx-auto">
        <div className="text-center my-8">
          <h1 className="mb-5 text-5xl font-bold">Our Team</h1>
          <p>Team member details are coming soon...</p>
        </div>
        <p className="text-lg mb-4">
          Luxuria Palace is a premier real estate agency dedicated to providing
          exceptional service to clients seeking luxury properties worldwide.
          With our extensive network of agents and expertise in the luxury
          market, we offer unparalleled access to exclusive estates, private
          islands, and lavish retreats. Whether you're buying, selling, or
          renting, trust Luxuria Palace to deliver exceptional results and turn
          your real estate dreams into reality.
        </p>
        <p className="text-lg">
          Contact us today to learn more about our services and discover the
          extraordinary properties we have to offer.
        </p>
      </div>
    </div>
  );
};
export default About;
