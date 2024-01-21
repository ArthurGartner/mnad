interface BarSentimentBarProps {
  value: number; // Value between 0 and 100
}

const BarSentimentBar: React.FC<BarSentimentBarProps> = ({ value }) => {
  // Ensure the value is within 0 to 100 range
  const normalizedValue = Math.min(100, Math.max(0, value));

  return (
    <div>
      <div
        className="w-full h-[50px] rounded-3xl overflow-hidden shadow-md"
        style={{ backgroundColor: "rgba(229, 231, 235, 0.3)" }} // bg-gray-200 with 30% opacity
      >
        <div
          style={{
            width: `${normalizedValue}%`,
            transition: "width 1s ease-in-out",
          }}
          className="bg-secondary-light h-full rounded-3xl"
        ></div>
      </div>
      <div className="w-full flex justify-between text-label text-label-size font-semibold">
        <div>Gloomy</div>
        <div>Cheerful</div>
      </div>
    </div>
  );
};

export default BarSentimentBar;
