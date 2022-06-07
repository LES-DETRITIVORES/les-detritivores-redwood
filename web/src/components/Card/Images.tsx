import { cn } from "src/utils/classNames";

interface Props {
  isLoading: boolean;
  image: string;
  width: number;
  height: number;
  onLoadingComplete: () => void;
}
const Images = ({
  isLoading,
  image,
  width,
  height,
  onLoadingComplete,
}: Props) => {
  return (
    <>
      <div>
        <div className="!rounded-lg w-80 m-auto md:m-0 sm:m-0">
          <img
            width={width}
            height={height}
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75 rounded-lg",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0",
            )}
            src={image}
            onLoadedData={onLoadingComplete}
          />
        </div>
      </div>
    </>
  );
};
export default Images;
