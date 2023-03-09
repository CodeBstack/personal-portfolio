interface BioProps {}

const Bio: React.FunctionComponent<
  BioProps
> = () => {
  return (
    <div className="flex gap-8">
      <p className="font-Calibre1 text-text-primary text-base md:text-xl max-w-[450px]">
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
        className="relative h-[269px] rounded-[8px] bg-secondary w-[292px] z-0 before:bg-[#D9D9D9] before:absolute before:-top-[18px] before:-right-[18px] before:rounded-[8px]
            before:w-full before:max-w-[292px] before:h-full before:border-2 before:border-blue before:z-[-1]"
      ></div>
    </div>
  );
};

export default Bio;
