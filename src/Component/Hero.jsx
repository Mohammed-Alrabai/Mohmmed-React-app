import Img from "../../public/Hero.png";
function Hero() {
  return (
    <div className="hero">
      <div className="text-hero">
        <h2>MOH</h2>
        <p>Web Developer</p>
      </div>
      <div className="image-hero">
        <img src={Img} alt="image" />
        {/* <span className="icon">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#006DC6"
              d="M46.5,-79.9C60.5,-72.3,72.4,-60.5,80.1,-46.5C87.8,-32.5,91.3,-16.2,90.7,-0.3C90.2,15.6,85.6,31.2,77.8,45C70,58.9,59,70.9,45.4,78.1C31.9,85.3,16,87.5,0.3,87C-15.4,86.5,-30.7,83.2,-44.3,76C-57.8,68.9,-69.6,57.9,-77.9,44.6C-86.1,31.3,-90.9,15.7,-90.9,0C-90.9,-15.6,-86,-31.2,-78,-45.1C-70.1,-59,-59.1,-71.1,-45.6,-78.9C-32,-86.7,-16,-90.3,0.1,-90.4C16.2,-90.6,32.4,-87.4,46.5,-79.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
}

export default Hero;
