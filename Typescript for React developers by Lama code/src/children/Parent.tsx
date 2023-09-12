const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>This is Parent</div>
      <div>{children}</div>
    </div>
  );
};

export default Parent;
