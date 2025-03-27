const ContentGrid = ({ data, topic }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`border p-4 rounded-lg shadow-md text-center ${item.bgColor} hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="text-4xl">{item.icon}</div>
          {/* Display letter only for ABC topic */}
          {topic === 'abc' && (
            <h2 className="text-2xl font-bold mt-2">
              {item.letter} for {item.english}
            </h2>
          )}
          {/* Display English name for all topics */}
          {topic !== 'abc' && (
            <h2 className="text-2xl font-bold mt-2">{item.english}</h2>
          )}
          {/* Display Hindi name for all topics */}
          <p className="text-lg mt-1">{item.hindi}</p>
          {/* Display pronunciation and meaning for all topics */}
          <p className="text-sm mt-1"><strong>Pronunciation:</strong> {item.pronunciation}</p>
          <p className="text-sm mt-1"><strong>Meaning:</strong> {item.hindiMeaning}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;