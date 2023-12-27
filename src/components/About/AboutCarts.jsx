function AboutCarts() {
  const cardList = {
    first: {
      img: "../../images/who-we-are/progresion.png",
      title: "Progression",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    second: {
      img: "../../images/who-we-are/workout.png",
      title: "Workout",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    third: {
      img: "../../images/who-we-are/nutritions.png",
      title: "Nutrition",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
  };
  return (
    <>
      <div className="flex flex-col">
        <img src={cardList.img} alt="box_img" />
      </div>
    </>
  );
}

export default AboutCarts;
