type Props = {
  children: React.ReactNode;
};

const TableWrapper = ({ children }: Props) => {
  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table
        border={4}
        className="shadow w-full bg-white rounded-md mt-5 border-zinc-300 z-0"
      >
        {children}
      </table>
    </div>
  );
};

export default TableWrapper;
