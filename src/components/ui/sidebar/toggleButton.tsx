/* eslint-disable @typescript-eslint/no-explicit-any */

export const ToggleButton = ({ setOpen }: { setOpen: any }) => {
  return (
    <>
      <div
        onClick={() => setOpen((pre: any) => !pre)}
        className="z-50 w-10 rounded-full h-10 cursor-pointer bg-red-500 text-black flex justify-center items-center"
      >
        click
      </div>
    </>
  );
};
