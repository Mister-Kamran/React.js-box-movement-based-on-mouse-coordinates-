function Test() {

  const box_rotate = useRef(null);
   useEffect(() => {

    const handleMouseMove = (event) => {

      const { clientX, clientY } = event;

      box_rotate.current.style.left = `${clientX}px`;

      box_rotate.current.style.top = `${clientY}px`;


    };

    window.addEventListener('mousemove', handleMouseMove);

  }, []);

  return (
    <div>
      <div className='game_container'>
        <div ref={box_rotate} className='box'></div>
      </div>
    </div>
  );
}

export default Test;
