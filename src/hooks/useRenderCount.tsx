export const useRenderCount = ({ name }: { name: string }) => {
  let count = 0;

  return () => {
    count++;
    return (
      <div style={{ marginBottom: 5 }}>
        {name} count : {count / 2}
      </div>
    );
  };
};
