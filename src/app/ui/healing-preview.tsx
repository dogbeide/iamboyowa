import Image from "next/image"
import ButtonCTA from "./button-cta"
// import quantumHealing from '@/../public/images/quantum-healing_264x198.jpg';
import quantumHealing from '@/../public/images/multidimensionally-activated-autism.jpg';

export default function HealingPreview() {

  return (
    <div id="healing" className="desc mt-2 px-1">
      <div className="title">
        <span className="inf">♾️</span> <a>HEALING</a>{" "}
        <span className="inf">♾️</span>
      </div>
      <div className="subtitle">
        <span>• REIKI • BOOKS • TOOLS</span>
      </div>
      <div className="photo-container">

        <a href="https://linktr.ee/bringerofjoyhealing"
          target="_blank"
        >
          <Image
            className="photo"
            src={quantumHealing}
            height={132}
            width={176}
            alt="boyowa_self-portrait-painted"
          />
        </a>
      </div>
      <div className="desc">
        <p>
          <i>
            Free Resources for healing yourself within.<br />
            <strong>
              Your own Source connection already knows what to do, organically.
            </strong>
          </i>
        </p>
        {/* <p>
          <i>
            Shifting the metaphysical and subconscious layers to heal yourself from within.<br />
            <strong>
              Your own Source connection already knows what to do, organically.
            </strong>
          </i>
        </p> */}
        {/* <p>
          <span className="we-can-address">
            We can address inner wounds,
            <br />
            We can address psychological problems, <br />
            We can address patterns in your life, <br />
            We can address physical issues. <br />
          </span>
          <span className="anything-really">
            (anything really... get creative, Lol!)
          </span>
        </p> */}
        {/* <p className="we-can-address">
          <strong>We can address whatever is ready 💚</strong>
        </p> */}
        <p>
          <ButtonCTA 
            href="https://linktr.ee/bringerofjoyhealing"
            target="_blank"
          >
            See More...
          </ButtonCTA>
        </p>
      </div>
      
    </div>
  )
}