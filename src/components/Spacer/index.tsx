type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

export const Spacer: React.FC<SpacerProps> = ({ size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? {
              width: size,
              height: "auto",
              display: "inline-block",
              flexShrink: 0,
            }
          : {
              width: "auto",
              height: size,
              flexShrink: 0,
            }
      }
    />
  );
};
