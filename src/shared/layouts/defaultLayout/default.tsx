interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function DefaultLayout({ children, header }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <header className="px-8 py-8">{header}</header>
      <main>
        <div className="sm:px-8 sm:py-8">{children}</div>
      </main>
    </div>
  );
}
