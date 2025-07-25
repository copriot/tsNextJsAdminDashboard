type Props = {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
};

export default function Field({ children, htmlFor, label }: Props) {
  return (
    <div>
      <label className="label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
