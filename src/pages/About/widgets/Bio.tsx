interface BioProps {}

const Bio: React.FunctionComponent<
  BioProps
> = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row  lg:gap-8">
      <p className="flex-1 font-Calibre1 text-text-primary text-base md:text-xl max-w-[450px]">
        Lorem ipsum dolor sit amet consectetur.
        Aliquam donec justo fames euismod
        consectetur. Enim parturient pulvinar
        semper neque. Id ac pretium leo non.
        Fringilla arcu ullamcorper bibendum netus.
        Pellentesque nibh neque dignissim
        ullamcorper. Odio pulvinar aliquam lorem
        posuere volutpat pretium viverra mauris.
        Facilisis hendrerit sagittis molestie et
        fames odio. Id vitae arcu suscipit
        sollicitudin pulvinar mauris. Magna
        egestas augue posuere pharetra. Nisl nam
        sagittis interdum ultrices. Volutpat
        consequat quis enim dolor gravida mauris
        vitae. Posuere gravida dui cras at posuere
        sagittis. Enim in.
      </p>

      <div
        className=" self-centr flex-1 mx-auto relative min-h-[269px] min-w-[292px] rounded-[8px] bg-secondary max-w-[292px] before:bg-[#D9D9D9] before:absolute before:-top-[8px] before:-right-[8px] before:rounded-[8px]
            before:w-full before:max-w-[292px] before:h-full before:border-2 before:border-blue before:z-[-1]"
      ></div>
    </div>
  );
};

export default Bio;
