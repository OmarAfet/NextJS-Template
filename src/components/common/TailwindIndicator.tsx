export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  const breakpoints = {
    xs: "block sm:hidden",
    sm: "hidden sm:block md:hidden",
    md: "hidden md:block lg:hidden",
    lg: "hidden lg:block xl:hidden",
    xl: "hidden xl:block 2xl:hidden",
    "2xl": "hidden 2xl:block",
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs">
      {Object.entries(breakpoints).map(([key, value]) => (
        <div className={value} key={key}>
          {key}
        </div>
      ))}
    </div>
  );
}
