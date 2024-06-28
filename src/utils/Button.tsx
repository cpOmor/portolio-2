export const Button = ({ title }: { title: string }) => {
  return (
    <button className=" text-black bg-orange-500 rounded-2xl w-40 h-10 flex justify-center items-center  ">
      {title}
    </button>
  );
};
