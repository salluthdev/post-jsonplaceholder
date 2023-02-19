import { Button } from "../../common";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  nextPageLength: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  nextPageLength,
}: PaginationProps) {
  return (
    <div className="flex flex-wrap items-end gap-4 mb-10">
      {currentPage > 1 && (
        <Button
          variant="outline"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          Prev
        </Button>
      )}
      <div className="flex items-end gap-2">
        {currentPage > 2 && (
          <Button variant="outline" onClick={() => setCurrentPage(1)}>
            1
          </Button>
        )}
        {currentPage > 3 && (
          <Button variant="outline" onClick={() => setCurrentPage(2)}>
            2
          </Button>
        )}
        {currentPage > 4 && <p className="font-bold text-stone-800">...</p>}
        {currentPage > 1 && (
          <Button
            variant="outline"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </Button>
        )}
        <Button>{currentPage}</Button>
        {nextPageLength !== 0 && (
          <Button
            variant="outline"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </Button>
        )}
      </div>
      {nextPageLength !== 0 && (
        <Button
          variant="outline"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
}
