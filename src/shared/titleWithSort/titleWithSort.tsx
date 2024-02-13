import { ArrowLeftIcon } from "../svgs/arrowLeftIcon";

interface TitleWithSortProps {
  title: string | React.ReactNode;
  ascending: boolean;
}

const TitleWithSort = (props: TitleWithSortProps) => {
  const { title, ascending } = props;
  return (
    <span className="inline-flex items-center cursor-pointer">
      <span>{title}</span>

      {ascending ? (
        <ArrowLeftIcon style={{ transform: "rotate(270deg)" }} />
      ) : (
        <ArrowLeftIcon style={{ transform: "rotate(90deg)" }} />
      )}
    </span>
  );
};

export default TitleWithSort;
