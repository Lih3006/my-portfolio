import React, { useEffect, useState, useRef } from 'react';
import IStar from '../../../providers/starProvider/index';

export const Star: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starDensity = 0.216;
  const speedCoeff = 0.05;
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  let starCount = width * starDensity;
  let first = true;
  const giantColor = '180,184,240';
  const starColor = '226,225,142';
  const cometColor = '226,225,224';
  const [stars, setStars] = useState<IStar[]>([]);

  const getProbability = (percents: number) => {
    return Math.floor(Math.random() * 1000) + 1 < percents * 10;
  };

  const getRandInterval = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const createStar = () => {
    let giant = getProbability(3);
    let comet = giant || first ? false : getProbability(10);
    let x = getRandInterval(0, width - 10);
    let y = getRandInterval(0, height);
    let r = getRandInterval(1.1, 2.6);
    let dx =
      getRandInterval(speedCoeff, 6 * speedCoeff) +
      ((comet ? 1 : 0) / 2) * speedCoeff * getRandInterval(50, 120) +
      speedCoeff * 2;
    let dy =
      -getRandInterval(speedCoeff, 6 * speedCoeff) -
      ((comet ? 1 : 0) / 2) * speedCoeff * getRandInterval(50, 120);
    let fadingIn = true;
    let fadingOut: null | boolean = null;
    let opacity = 0;
    let opacityTresh = getRandInterval(0.2, 1 - (comet ? 1 : 0) * 0.4);
    let doValue = getRandInterval(0.0005, 0.002) + (comet ? 1 : 0) * 0.001;

    const reset = () => {
      giant = getProbability(3);
      comet = giant || first ? false : getProbability(10);
      x = getRandInterval(0, width - 10);
      y = getRandInterval(0, height);
      r = getRandInterval(1.1, 2.6);
      dx =
        getRandInterval(speedCoeff, 6 * speedCoeff) +
        ((comet ? 1 : 0) / 2) * speedCoeff * getRandInterval(50, 120) +
        speedCoeff * 2;
      dy =
        -getRandInterval(speedCoeff, 6 * speedCoeff) -
        ((comet ? 1 : 0) / 2) * speedCoeff * getRandInterval(50, 120);
      fadingIn = true;
      fadingOut = null;
      opacity = 0;
      opacityTresh = getRandInterval(0.2, 1 - (comet ? 1 : 0) * 0.4);
      doValue = getRandInterval(0.0005, 0.002) + (comet ? 1 : 0) * 0.001;
    };
    const fadeIn = () => {
      if (fadingIn) {
        fadingIn = opacity > opacityTresh ? false : true;
        opacity += doValue;
      }
    };

    const fadeOut = () => {
      if (fadingOut) {
        fadingOut = opacity < 0 ? false : true;
        opacity -= doValue / 2;
        if (x > width || y < 0) {
          fadingOut = false;
          reset();
        }
      }
    };
    const draw = (universe: CanvasRenderingContext2D) => {
      universe.beginPath();

      if (giant) {
        universe.fillStyle = 'rgba(' + giantColor + ',' + opacity + ')';
        universe.arc(x, y, 2, 0, 2 * Math.PI, false);
      } else if (comet) {
        universe.fillStyle = 'rgba(' + cometColor + ',' + opacity + ')';
        universe.arc(x, y, 1.5, 0, 2 * Math.PI, false);
        for (let i = 0; i < 30; i++) {
          universe.fillStyle =
            'rgba(' + cometColor + ',' + (opacity - (opacity / 20) * i) + ')';
          universe.rect(x - (dx / 4) * i, y - (dy / 4) * i - 2, 2, 2);
          universe.fill();
        }
      } else {
        universe.fillStyle = 'rgba(' + starColor + ',' + opacity + ')';
        universe.rect(x, y, r, r);
      }
      universe.closePath();
      universe.fill();
    };

    const move = () => {
      x += dx;
      y += dy;
      if (fadingOut === false) {
        reset();
      }
      if (x > width - width / 4 || y > 0) {
        fadingOut = true;
      }
    };

    (function () {
      setTimeout(function () {
        first = false;
      }, 50);
    })();

    return {
      giant,
      comet,
      x,
      y,
      r,
      dx,
      dy,
      fadingOut,
      fadingIn,
      opacity,
      opacityTresh,
      doValue,
      reset,
      fadeIn,
      fadeOut,
      draw,
      move,
    };
  };

  const createUniverse = () => {
    const teste: IStar[] = [];
    const canvas = canvasRef.current;
    const universe = canvas.getContext('2d');
    for (let i = 0; i < starCount; i++) {
      stars[i] = createStar();
      stars[i].reset();
      teste.push(stars[i]);
    }

    drawUniverse(universe);
    setStars(teste);
  };

  const drawUniverse = (universe: CanvasRenderingContext2D) => {
    universe.clearRect(0, 0, width, height);
    const starsLength = stars.length;

    for (let i = 0; i < starsLength; i++) {
      const star = stars[i];
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw(universe);
    }

    requestAnimationFrame(() => drawUniverse(universe));
  };

  const windowResizeHandler = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    setWidth(newWidth);
    setHeight(newHeight);
    const newStarCount = newWidth * starDensity;
    starCount = newStarCount;
  };
  useEffect(() => {
    windowResizeHandler();

    window.addEventListener('resize', windowResizeHandler, false);
    createUniverse();

    return () => {
      window.removeEventListener('resize', windowResizeHandler, false);
    };
  }, [width, height]);

  return (
    <div className='container'>
      <div className='content'>
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
    </div>
  );
};
