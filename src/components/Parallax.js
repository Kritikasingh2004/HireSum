import React, { useEffect, useRef } from 'react';

import hill1 from '../svg/hill1.png';
import hill2 from '../svg/hill2.png';
import hill3 from '../svg/hill3.png';
import hill4 from '../svg/hill4.png';
import hill5 from '../svg/hill5.png';
import leaf from '../svg/leaf.png';
import tree from '../svg/tree.png';
import plant from '../svg/plant.png';

const Parallax = () => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) {
        textRef.current.style.marginTop = value * 2 + 'px';
      }

      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }

      if (hill1Ref.current) {
        hill1Ref.current.style.top = value * 1 + 'px';
      }

      if (hill4Ref.current) {
        hill4Ref.current.style.left = value * -1.5 + 'px';
      }

      if (hill5Ref.current) {
        hill5Ref.current.style.left = value * 1.5 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="parallax" id='home'>
      <img src={hill1} id="hill1" ref={hill1Ref}  alt='img'/>
      <img src={hill2} id="hill2"  alt='img' />
      <img src={hill3} id="hill3" alt='img'/>
      <img src={hill4} id="hill4" ref={hill4Ref} alt='img' />
      <img src={hill5} id="hill5" ref={hill5Ref} alt='img'/>
      <img src={tree} id="tree" alt='img'/>
      <h2 id="text" ref={textRef}>Welcome To HireSum</h2>
      <img src={leaf} id="leaf" ref={leafRef}  alt='img'/>
      <img src={plant} id="plant"   alt='img'/>
    </section>
  );
};

export default Parallax;
