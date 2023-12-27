function AboutCarts() {
  const cardList = [
    {
      id: "first",
      img: "../../images/who-we-are/progresion.png",
      title: "Progression",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    {
      id: "second",
      img: "../../images/who-we-are/workout.png",
      title: "Workout",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    {
      id: "third",
      img: "../../images/who-we-are/nutritions.png",
      title: "Nutrition",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
  ];
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center p-6 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px]"
        >
          <img src={card.img} alt="box_img" className=" w-[75px]" />
          <h3 className=" text-[24px] font-bold uppercase">{card.title}</h3>
          <p className="text-[16px] font-medium text-[#646464]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
